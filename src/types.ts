export type ViewName =
  | "home"
  | "authorize"
  | "confirm"
  | "platforms"
  | "guide"
  | "profile"
  | "select-country"
  | "upload-id"
  | "id-prep"
  | "face-intro"
  | "face-scan"
  | "face-waiting"
  | "face-success"
  | "select-contact"
  | "confirm-recipient"
  | "create-success"
  | "order-details";

export interface TransferSummary {
  fromRegion: string;
  fromCurrency: string;
  amount: string;
  toRegion: string;
  toCurrency: string;
  estimatedReceiveAmount: string;
  rateText: string;
}

export interface Recipient {
  id: string;
  avatarText: string;
  name: string;
  note: string;
  realName?: string;
  wechatId?: string;
  muted?: boolean;
}

export interface PlatformCard {
  id: string;
  logoText?: string;
  logoSrc?: string;
  name: string;
  subtitle?: string;
  description?: string;
  rate?: string;
  fee?: string;
  eta?: string;
  tag?: string;
  tags?: { text: string; prefix?: string; type?: "orange" | "blue" }[];
  exchangeRateValue?: string;
  feeValue?: string;
  feeOriginalValue?: string;
  couponValue?: string;
  receiveValue?: string;
  averageTime?: string;
  arrivalSpeed?: string;
  isFastest?: boolean;
  rateRaw?: number;
  feeRaw?: number;
  feeOriginalRaw?: number;
  couponRaw?: number;
  buttonText: string;
  isGrayButton?: boolean;
  isRecommended?: boolean;
  mutedLogo?: boolean;
  outlinedLogo?: boolean;
  plainTag?: boolean;
  providerAccountName?: string;
  bankAccount?: string;
}

export interface GuideStep {
  step: string;
  title: string;
  value: string;
}

export interface StatCard {
  label: string;
  value: string;
  unit: string;
}

export type HistoryRecordStatusCode = "processing" | "completed" | "cancelled";

export interface HistoryRecord {
  id: string;
  datetime: string;
  platform: string;
  status: string;
  statusCode?: HistoryRecordStatusCode;
  amount: string;
  amountValue?: number;
  amountCurrency?: string;
  rate: string;
  rateDisplay?: string;
  fee: string;
  feeValue?: number;
  recipient: string;
  recipientName?: string;
  recipientAvatarText?: string;
  recipientId?: string;
  sender?: string;
  account: string;
  remark: string;
  feeDetail: string;
  sourceOfFunds?: string;
  providerAccountName?: string;
  destinationBank?: string;
  bankAccount?: string;
  transferAmount?: string;
}

export interface Country {
  id: string;
  name: string;
  currency: string;
  englishName: string;
  flagKey: string;
  dialCode: string;
}

export interface IDScanResults {
  lastName: string;
  firstName: string;
  region: string;
  gender: string;
  dob: string;
  sourceOfIncome: string;
  address: string;
  postCode: string;
  city: string;
}

export interface AppState {
  view: ViewName;
  expandedRecordIds: ReadonlySet<string>;
  showAuthModal: boolean;
  isAuthorized: boolean;
  isScanning?: boolean;
  scanResults?: IDScanResults;
  // New fields
  selectedCountry?: Country;
  countrySearchQuery: string;
  exchangeRate?: number;
  isRateLoading: boolean;
  amount: number;
  showAmountWarning: boolean;
  isAmountFieldFocused: boolean;
  rawAmountInput: string;
  showCountrySheet:boolean;
  ratesCache: Record<string, number>;
  // Picker state
  showPicker?: boolean;
  pickerTitle?: string;
  pickerOptions?: string[];
  pickerValue?: string;
  pickerFieldId?: string;
  // Date Picker state
  showDatePicker?: boolean;
  datePickerYear?: string;
  datePickerMonth?: string;
  datePickerDay?: string;
  faceAgreementChecked: boolean;
  platformSort: "cheapest" | "fastest";
  selectedPlatformId?: string;
  selectedRecipient?: Recipient;
  paymentPassword: string;
  showPasswordInput?: boolean;
  showOrderLoading?: boolean;
  showAccountLoading?: boolean;
  showQuoteLoading?: boolean;
  historyRecords: HistoryRecord[];
  selectedRecordId?: string;
  hasCompletedOnboarding: boolean;
  selectCountryBackTarget?: ViewName;
  guideBackTarget?: ViewName;
  orderDetailsBackTarget?: ViewName;
  confirmRecipientBackTarget?: ViewName;
  confirmBackTarget?: ViewName;
  skipContactSelection?: boolean;
}
