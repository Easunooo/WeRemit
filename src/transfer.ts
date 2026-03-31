import { staticFallbackRates } from "./data";
import type { AppState, PlatformCard } from "./types";

const DEFAULT_CURRENCY = "AUD";
const PLATFORM_RATE_REFERENCE = 4.7059;

type ExchangeRateState = Pick<AppState, "amount" | "exchangeRate" | "ratesCache" | "selectedCountry">;
type PlatformSelectionState = ExchangeRateState & Pick<AppState, "platformSort" | "selectedPlatformId">;

export interface PlatformTransferBreakdown {
  amount: number;
  fee: number;
  coupon: number;
  rate: number;
  receiveAmount: number;
}

export function getSelectedCurrency(state: Pick<AppState, "selectedCountry">): string {
  return state.selectedCountry?.currency || DEFAULT_CURRENCY;
}

export function getBaseExchangeRate(state: Pick<AppState, "exchangeRate" | "ratesCache" | "selectedCountry">): number {
  const currency = getSelectedCurrency(state).toUpperCase();
  return state.exchangeRate || state.ratesCache[currency] || staticFallbackRates[currency] || PLATFORM_RATE_REFERENCE;
}

function getPlatformRateMultiplier(platform: PlatformCard): number {
  const platformReferenceRate = platform.rateRaw || PLATFORM_RATE_REFERENCE;
  return platformReferenceRate / PLATFORM_RATE_REFERENCE;
}

export function getPlatformEffectiveRate(
  platform: PlatformCard,
  state: Pick<AppState, "exchangeRate" | "ratesCache" | "selectedCountry">,
): number {
  return getBaseExchangeRate(state) * getPlatformRateMultiplier(platform);
}

export function getPlatformTransferBreakdown(
  platform: PlatformCard,
  state: ExchangeRateState,
): PlatformTransferBreakdown {
  const amount = state.amount > 0 ? state.amount : 0;
  const fee = platform.feeRaw || 0;
  const coupon = platform.couponRaw || 0;
  const rate = getPlatformEffectiveRate(platform, state);
  const receiveAmount = amount > 0 ? Math.max(amount - fee, 0) * rate + coupon : 0;

  return {
    amount,
    fee,
    coupon,
    rate,
    receiveAmount,
  };
}

export function sortPlatformsForState(
  platformList: readonly PlatformCard[],
  state: PlatformSelectionState,
): PlatformCard[] {
  const sortedPlatforms = [...platformList];

  if (state.platformSort === "cheapest") {
    sortedPlatforms.sort((a, b) => {
      const totalA = getPlatformTransferBreakdown(a, state).receiveAmount;
      const totalB = getPlatformTransferBreakdown(b, state).receiveAmount;
      return totalB - totalA;
    });
    return sortedPlatforms;
  }

  sortedPlatforms.sort((a, b) => {
    if (a.isFastest && !b.isFastest) return -1;
    if (!a.isFastest && b.isFastest) return 1;
    return 0;
  });

  return sortedPlatforms;
}

export function getActivePlatform(
  platformList: readonly PlatformCard[],
  state: PlatformSelectionState,
): PlatformCard {
  const sortedPlatforms = sortPlatformsForState(platformList, state);

  if (state.selectedPlatformId) {
    return platformList.find((platform) => platform.id === state.selectedPlatformId) || sortedPlatforms[0];
  }

  return sortedPlatforms[0];
}
