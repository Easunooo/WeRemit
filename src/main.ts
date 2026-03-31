import "./styles.css";

import { allCountries, defaultExpandedRecordIds, guideSteps, popularCountries, recipients, staticFallbackRates, validViews } from "./data";
import { getActivePlatform, getBaseExchangeRate, getPlatformTransferBreakdown } from "./transfer";
import type { AppState, HistoryRecord, ViewName } from "./types";
import {
  renderApp,
  renderCountrySheetList,
  renderCountrySheetSidebar,
} from "./views";
import { historyRecords as initialHistoryRecords, platforms } from "./data";

const appRoot = document.querySelector<HTMLDivElement>("#app");

if (!appRoot) {
  throw new Error("App root #app was not found.");
}

const app = appRoot;
const validViewSet = new Set<ViewName>(validViews);

function updateViewportHeight(): void {
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${viewportHeight}px`);
}

updateViewportHeight();
window.addEventListener("resize", updateViewportHeight);
window.addEventListener("orientationchange", updateViewportHeight);
window.visualViewport?.addEventListener("resize", updateViewportHeight);
window.visualViewport?.addEventListener("scroll", updateViewportHeight);

const state: AppState = {
  view: resolveViewFromHash(),
  expandedRecordIds: new Set(defaultExpandedRecordIds),
  showAuthModal: false,
  isAuthorized: localStorage.getItem("wechat_auth_completed") === "true",
  countrySearchQuery: "",
  isRateLoading: false,
  amount: 1000,
  showAmountWarning: false,
  isAmountFieldFocused: false,
  rawAmountInput: "1000",
  selectedCountry: Object.values(allCountries).flat().find(c => c.id === "ie") || popularCountries[0],
  showCountrySheet: false,
  ratesCache: { ...staticFallbackRates },
  faceAgreementChecked: true,
  platformSort: "cheapest",
  paymentPassword: "",
  showPasswordInput: false,
  showOrderLoading: false,
  historyRecords: [...initialHistoryRecords],
  selectedRecordId: initialHistoryRecords[0]?.id,
  hasCompletedOnboarding: localStorage.getItem("wechat_onboarding_completed") === "true",
};

// --- Helpers ---
function getDefaultAmount(currency: string): number {
  const c = currency.toUpperCase();
  const rate = state.ratesCache[c] || staticFallbackRates[c] || 1.0;
  const baseAmount = Math.ceil(55 / rate);
  return baseAmount <= 1000 ? 1000 : Math.ceil(baseAmount / 1000) * 1000;
}

function sanitizeAmountInput(value: string): string {
  const normalized = value.replace(/[^0-9.]/g, "");
  const [integerPart = "", ...decimalParts] = normalized.split(".");
  return decimalParts.length === 0 ? integerPart : `${integerPart}.${decimalParts.join("")}`;
}

function padDatePart(value: number): string { return value.toString().padStart(2, "0"); }

function formatDateTime(date: Date): string {
  return `${date.getFullYear()}-${padDatePart(date.getMonth() + 1)}-${padDatePart(date.getDate())} ${padDatePart(date.getHours())}:${padDatePart(date.getMinutes())}`;
}

function updateHistoryRecord(recordId: string, updater: (record: HistoryRecord) => HistoryRecord): void {
  const targetIndex = state.historyRecords.findIndex((r) => r.id === recordId);
  if (targetIndex >= 0) {
    const nextRecords = [...state.historyRecords];
    nextRecords[targetIndex] = updater(nextRecords[targetIndex]);
    state.historyRecords = nextRecords;
  }
}

function buildHistoryRecord(date: Date): HistoryRecord {
  const currency = state.selectedCountry?.currency || "AUD";
  const platform = getActivePlatform(platforms, state);
  const breakdown = getPlatformTransferBreakdown(platform, state);
  const reference = `WX-HK-${date.getFullYear()}${padDatePart(date.getMonth()+1)}${padDatePart(date.getDate())}-${Math.floor(Math.random()*900)+100}`;
  const recipientName = state.selectedRecipient?.name || "未选择联系人";
  const recipientRealName = state.selectedRecipient?.realName ? ` ${state.selectedRecipient.realName}` : "";

  return {
    id: `record-${date.getTime()}`,
    datetime: formatDateTime(date),
    platform: platform.name,
    status: "处理中",
    statusCode: "processing",
    amount: `¥ ${breakdown.receiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    amountValue: breakdown.receiveAmount,
    amountCurrency: "CNY",
    rate: breakdown.rate.toFixed(4),
    rateDisplay: `1 ${currency} = ${breakdown.rate.toFixed(4)} CNY`,
    fee: `¥ ${breakdown.fee.toFixed(2)}`,
    feeValue: breakdown.fee,
    recipient: `${recipientName}${recipientRealName}`,
    recipientName,
    recipientAvatarText: state.selectedRecipient?.avatarText,
    recipientId: state.selectedRecipient?.id,
    sender: state.scanResults?.firstName ? `${state.scanResults.lastName}${state.scanResults.firstName}` : "李薇",
    account: state.selectedRecipient?.wechatId || "---",
    remark: reference,
    feeDetail: `平台服务费 ¥${breakdown.fee.toFixed(2)} / 汇率差额 ¥0.00`,
    sourceOfFunds: state.scanResults?.sourceOfIncome || "工资/储蓄储备",
    providerAccountName: platform.providerAccountName || guideSteps[0]?.value || "Wise Asia Remittance Ltd.",
    destinationBank: "中国工商银行（ICBC）",
    bankAccount: platform.bankAccount || guideSteps[1]?.value || "6222 8888 1234 1036",
    transferAmount: `${state.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`,
  };
}

function scheduleOrderCompletion(recordId: string): void {
  setTimeout(() => {
    updateHistoryRecord(recordId, (r) => ({ ...r, status: "已完成", statusCode: "completed" }));
    render();
  }, 60000);
}

function resolveViewFromHash(): ViewName {
  const hashValue = window.location.hash.replace("#", "");
  return validViewSet.has(hashValue as ViewName) ? (hashValue as ViewName) : "home";
}

function updateHash(view: ViewName): void { if (window.location.hash !== `#${view}`) window.location.hash = view; }

function render(): void {
  app.innerHTML = renderApp(state);
}

function navigate(view: ViewName): void {
  state.view = view;
  updateHash(view);
  render();

  // Face recognition simulation sequence
  if (view === "face-scan") {
    setTimeout(() => {
      if (state.view === "face-scan") navigate("face-waiting");
    }, 2500);
  } else if (view === "face-waiting") {
    setTimeout(() => {
      if (state.view === "face-waiting") navigate("face-success");
    }, 2000);
  } else if (view === "face-success") {
    setTimeout(() => {
      if (state.view === "face-success") {
        state.hasCompletedOnboarding = true;
        localStorage.setItem("wechat_onboarding_completed", "true");
        navigate("platforms");
      }
    }, 2000);
  }
}

function showToast(message: string): void {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function syncAllRates(): void {
  // Common currencies to sync on startup
  const currencies = ["AUD", "USD", "HKD", "SGD", "JPY", "KRW"];
  currencies.forEach((c) => {
    if (!state.ratesCache[c]) fetchExchangeRate(c);
  });
}


async function fetchExchangeRate(targetCurrency: string): Promise<void> {
  state.isRateLoading = true;
  render();
  try {
    const response = await fetch(`https://api.frankfurter.app/latest?from=${targetCurrency}&to=CNY`);
    const data = await response.json();
    if (data.rates?.CNY) {
      state.exchangeRate = data.rates.CNY;
      state.ratesCache[targetCurrency] = data.rates.CNY;
    }
  } catch (e) { console.error(e); }
  finally { state.isRateLoading = false; render(); }
}

function updateAmountValidation(state: AppState): void {
  const rate = getBaseExchangeRate(state);
  state.showAmountWarning = state.amount > 0 && (state.amount * rate < 50);
}

function startScan(): void {
  state.isScanning = true; render();
  setTimeout(() => {
    state.isScanning = false;
    state.scanResults = { lastName: "李", firstName: "薇", region: "中国", gender: "女", dob: "1993-10-12", sourceOfIncome: "工资", address: "Birdsville", postCode: "4482", city: "QLD" };
    navigate("confirm");
  }, 2000);
}

// --- Events ---
app.onclick = (event) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  const countryTrigger = target.closest<HTMLElement>("[data-country-id]");
  if (countryTrigger?.dataset.countryId) {
    const found = popularCountries.find(c => c.id === countryTrigger.dataset.countryId) || Object.values(allCountries).flat().find(c => c.id === countryTrigger.dataset.countryId);
    if (found) {
      state.selectedCountry = found;
      state.amount = getDefaultAmount(found.currency);
      state.rawAmountInput = state.amount.toString();
      updateAmountValidation(state);
      fetchExchangeRate(found.currency);
      if (state.showCountrySheet) { state.showCountrySheet = false; render(); return; }
      if (state.view === "select-country") navigate(state.selectCountryBackTarget || "home");
    }
  }

  const navTrigger = target.closest<HTMLElement>("[data-target]");
  if (navTrigger?.dataset.target) {
    const targetView = navTrigger.dataset.target as any;
    if (targetView === "start-scan") { startScan(); return; }
    if (navTrigger.dataset.platformId) state.selectedPlatformId = navTrigger.dataset.platformId;
    if (navTrigger.dataset.recordId) { state.selectedRecordId = navTrigger.dataset.recordId; state.orderDetailsBackTarget = state.view; }
    if (targetView === "authorize") {
      if (state.hasCompletedOnboarding) { state.showQuoteLoading = true; render(); setTimeout(() => { state.showQuoteLoading = false; navigate("platforms"); }, 1000); }
      else navigate("id-prep");
      return;
    }
    const contactItem = navTrigger.closest<HTMLElement>("[data-recipient-id]");
    if (contactItem?.dataset.recipientId) {
      const rid = contactItem.dataset.recipientId;
      if (rid === "self-balance") state.selectedRecipient = { id: "self-balance", name: "零钱", avatarText: "¥", wechatId: "current_user", realName: "", note: "" };
      else if (rid === "self-card") state.selectedRecipient = { id: "self-card", name: "银行卡", avatarText: "🏦", wechatId: "current_user", realName: "", note: "" };
      else state.selectedRecipient = recipients.find((r: any) => r.id === rid);
    }
    navigate(targetView);
    return;
  }

  // Expansion
  const expandTrigger = target.closest<HTMLElement>("[data-expand-id]");
  if (expandTrigger?.dataset.expandId) {
    const id = expandTrigger.dataset.expandId;
    const next = new Set(state.expandedRecordIds);
    if (next.has(id)) next.delete(id); else next.add(id);
    state.expandedRecordIds = next;
    render();
    return;
  }

  // Cancel Order
  const cancelTrigger = target.closest<HTMLElement>("[data-cancel-order-id]");
  if (cancelTrigger?.dataset.cancelOrderId) {
    updateHistoryRecord(cancelTrigger.dataset.cancelOrderId, (r) => ({ ...r, status: "已取消", statusCode: "cancelled" }));
    showToast("订单已取消");
    render(); return;
  }

  // Modals & Keypad
  if (target.closest("#trigger-payment")) { state.showPasswordInput = true; state.paymentPassword = ""; render(); return; }
  if (target.closest("#close-payment") || target.classList.contains("payment-modal-overlay")) { state.showPasswordInput = false; render(); return; }
  
  const keypadBtn = target.closest<HTMLElement>(".key-cell");
  if (keypadBtn?.dataset.key && !state.showOrderLoading) {
    const key = keypadBtn.dataset.key;
    if (key === "backspace") state.paymentPassword = state.paymentPassword.slice(0, -1);
    else if (state.paymentPassword.length < 6) state.paymentPassword += key;
    render();
    if (state.paymentPassword.length === 6 && !state.showOrderLoading) {
      state.showOrderLoading = true; render();
      setTimeout(() => {
        state.showPasswordInput = false; state.paymentPassword = ""; render();
        setTimeout(() => {
          state.showOrderLoading = false;
          const newRec = buildHistoryRecord(new Date());
          state.historyRecords = [newRec, ...state.historyRecords];
          state.selectedRecordId = newRec.id;
          scheduleOrderCompletion(newRec.id);
          navigate("create-success");
          setTimeout(() => navigate("guide"), 1500);
        }, 2000);
      }, 300);
    }
    return;
  }

  // Misc
  if (target.closest("#toggle-face-agreement")) { state.faceAgreementChecked = !state.faceAgreementChecked; render(); return; }
  if (target.closest("[data-open-country-sheet]")) { state.showCountrySheet = true; render(); return; }
  if (target.hasAttribute("data-close-country-sheet-overlay") || target.closest("[data-close-country-sheet-btn]")) { state.showCountrySheet = false; render(); return; }
  if (target.closest("[data-confirm-date-picker]")) {
     if (!state.scanResults) state.scanResults = { lastName: "", firstName: "", region: "", gender: "", dob: "", sourceOfIncome: "", address: "", postCode: "", city: "" };
     state.scanResults.dob = `${state.datePickerYear}-${state.datePickerMonth}-${state.datePickerDay}`;
     state.showDatePicker = false; render(); return;
  }
};

document.oninput = (e) => {
  const target = e.target as HTMLInputElement;
  if (target.id === "transfer-amount-input") {
    const val = sanitizeAmountInput(target.value);
    target.value = val; state.amount = parseFloat(val) || 0;
    updateAmountValidation(state);
    const display = document.getElementById("received-amount-display");
    if (display) display.textContent = (state.amount * getBaseExchangeRate(state)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
};

window.onhashchange = () => { navigate(resolveViewFromHash()); };

render();
syncAllRates();
if (state.selectedCountry) fetchExchangeRate(state.selectedCountry.currency);
