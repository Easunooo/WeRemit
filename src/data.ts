import type {
  Country,
  GuideStep,
  HistoryRecord,
  PlatformCard,
  Recipient,
  StatCard,
  TransferSummary,
  ViewName,
} from "./types";

export const defaultExpandedRecordIds = ["record-wise-01"];

export const validViews: readonly ViewName[] = ["home", "authorize", "confirm", "platforms", "guide", "profile", "select-country", "upload-id", "id-prep", "face-intro", "face-scan", "face-waiting", "face-success", "select-contact"];

export const staticFallbackRates: Record<string, number> = {
  AED: 1.97, ARS: 0.008, AUD: 4.65, BGN: 4.02, BHD: 19.2, BRL: 1.45, CAD: 5.31, CHF: 8.35, 
  CLP: 0.008, COP: 0.0018, CZK: 0.31, DKK: 1.05, EGP: 0.15, EUR: 7.85, GBP: 9.15, GEL: 2.70, 
  HKD: 0.92, HUF: 0.02, ILS: 1.95, INR: 0.087, ISK: 0.052, JPY: 0.047, KES: 0.056, KGS: 0.08, 
  KHR: 0.0017, KRW: 0.0053, KWD: 23.5, LBP: 0.00008, LKR: 0.024, MAD: 0.72, MXN: 0.42, 
  MYR: 1.54, NOK: 0.67, NZD: 4.28, OMR: 18.8, PAB: 7.24, PEN: 1.95, PHP: 0.13, PKR: 0.026, 
  PLN: 1.81, QAR: 1.99, RON: 1.58, SAR: 1.93, SEK: 0.69, SGD: 5.35, THB: 0.20, TRY: 0.22, 
  TWD: 0.22, USD: 7.24, VND: 0.00028, ZAR: 0.38
};

const popularCountryIds = ["hk", "us", "uk", "au", "ca", "nz", "sg", "jp", "kr"];

export const popularCountries: Country[] = [
  { id: "hk", name: "中国香港", currency: "HKD", flagKey: "HK", englishName: "Hong Kong", dialCode: "+852" },
  { id: "us", name: "美国", currency: "USD", flagKey: "US", englishName: "United States", dialCode: "+1" },
  { id: "kr", name: "韩国", currency: "KRW", flagKey: "KR", englishName: "South Korea", dialCode: "+82" },
  { id: "sg", name: "新加坡", currency: "SGD", flagKey: "SG", englishName: "Singapore", dialCode: "+65" },
];

export const allCountries: Record<string, Country[]> = {
  A: [
    { id: "ar", name: "阿根廷", currency: "ARS", flagKey: "AR", englishName: "Argentina", dialCode: "+54" },
    { id: "ae", name: "阿联酋", currency: "AED", flagKey: "AE", englishName: "United Arab Emirates", dialCode: "+971" },
    { id: "ie", name: "爱尔兰", currency: "EUR", flagKey: "IE", englishName: "Ireland", dialCode: "+353" },
    { id: "ee", name: "爱沙尼亚", currency: "EUR", flagKey: "EE", englishName: "Estonia", dialCode: "+372" },
    { id: "ad", name: "安道尔", currency: "EUR", flagKey: "AD", englishName: "Andorra", dialCode: "+376" },
    { id: "au", name: "澳大利亚", currency: "AUD", flagKey: "AU", englishName: "Australia", dialCode: "+61" },
    { id: "at", name: "奥地利", currency: "EUR", flagKey: "AT", englishName: "Austria", dialCode: "+43" },
  ],
  B: [
    { id: "bh", name: "巴林", currency: "BHD", flagKey: "BH", englishName: "Bahrain", dialCode: "+973" },
    { id: "pa", name: "巴拿马", currency: "PAB", flagKey: "PA", englishName: "Panama", dialCode: "+507" },
    { id: "br", name: "巴西", currency: "BRL", flagKey: "BR", englishName: "Brazil", dialCode: "+55" },
    { id: "bg", name: "保加利亚", currency: "BGN", flagKey: "BG", englishName: "Bulgaria", dialCode: "+359" },
    { id: "be", name: "比利时", currency: "EUR", flagKey: "BE", englishName: "Belgium", dialCode: "+32" },
    { id: "is", name: "冰岛", currency: "ISK", flagKey: "IS", englishName: "Iceland", dialCode: "+354" },
    { id: "pl", name: "波兰", currency: "PLN", flagKey: "PL", englishName: "Poland", dialCode: "+48" },
  ],
  E: [
    { id: "eg", name: "埃及", currency: "EGP", flagKey: "EG", englishName: "Egypt", dialCode: "+20" },
  ],
  D: [
    { id: "dk", name: "丹麦", currency: "DKK", flagKey: "DK", englishName: "Denmark", dialCode: "+45" },
    { id: "de", name: "德国", currency: "EUR", flagKey: "DE", englishName: "Germany", dialCode: "+49" },
  ],
  F: [
    { id: "fr", name: "法国", currency: "EUR", flagKey: "FR", englishName: "France", dialCode: "+33" },
    { id: "fi", name: "芬兰", currency: "EUR", flagKey: "FI", englishName: "Finland", dialCode: "+358" },
  ],
  G: [
    { id: "co", name: "哥伦比亚", currency: "COP", flagKey: "CO", englishName: "Colombia", dialCode: "+57" },
    { id: "ge", name: "格鲁吉亚", currency: "GEL", flagKey: "GE", englishName: "Georgia", dialCode: "+995" },
  ],
  H: [
    { id: "kr", name: "韩国", currency: "KRW", flagKey: "KR", englishName: "Korea", dialCode: "+82" },
    { id: "nl", name: "荷兰", currency: "EUR", flagKey: "NL", englishName: "Netherlands", dialCode: "+31" },
  ],
  J: [
    { id: "kg", name: "吉尔吉斯斯坦", currency: "KGS", flagKey: "KG", englishName: "Kyrgyzstan", dialCode: "+996" },
    { id: "ca", name: "加拿大", currency: "CAD", flagKey: "CA", englishName: "Canada", dialCode: "+1" },
    { id: "kh", name: "柬埔寨", currency: "KHR", flagKey: "KH", englishName: "Cambodia", dialCode: "+855" },
    { id: "cz", name: "捷克", currency: "CZK", flagKey: "CZ", englishName: "Czechia", dialCode: "+420" },
  ],
  K: [
    { id: "qa", name: "卡塔尔", currency: "QAR", flagKey: "QA", englishName: "Qatar", dialCode: "+974" },
    { id: "hr", name: "克罗地亚", currency: "HRK", flagKey: "HR", englishName: "Croatia", dialCode: "+385" },
    { id: "ke", name: "肯尼亚", currency: "KES", flagKey: "KE", englishName: "Kenya", dialCode: "+254" },
  ],
  L: [
    { id: "lv", name: "拉脱维亚", currency: "EUR", flagKey: "LV", englishName: "Latvia", dialCode: "+371" },
    { id: "lt", name: "立陶宛", currency: "EUR", flagKey: "LT", englishName: "Lithuania", dialCode: "+370" },
    { id: "li", name: "列支敦士登", currency: "CHF", flagKey: "LI", englishName: "Liechtenstein", dialCode: "+423" },
    { id: "lu", name: "卢森堡", currency: "EUR", flagKey: "LU", englishName: "Luxembourg", dialCode: "+352" },
    { id: "ro", name: "罗马尼亚", currency: "RON", flagKey: "RO", englishName: "Romania", dialCode: "+40" },
  ],
  M: [
    { id: "mt", name: "马耳他", currency: "EUR", flagKey: "MT", englishName: "Malta", dialCode: "+356" },
    { id: "my", name: "马来西亚", currency: "MYR", flagKey: "MY", englishName: "Malaysia", dialCode: "+60" },
    { id: "us", name: "美国", currency: "USD", flagKey: "US", englishName: "United States", dialCode: "+1" },
    { id: "pe", name: "秘鲁", currency: "PEN", flagKey: "PE", englishName: "Peru", dialCode: "+51" },
    { id: "mc", name: "摩纳哥", currency: "EUR", flagKey: "MC", englishName: "Monaco", dialCode: "+377" },
    { id: "mx", name: "墨西哥", currency: "MXN", flagKey: "MX", englishName: "Mexico", dialCode: "+52" },
  ],
  N: [
    { id: "za", name: "南非", currency: "ZAR", flagKey: "ZA", englishName: "South Africa", dialCode: "+27" },
    { id: "no", name: "挪威", currency: "NOK", flagKey: "NO", englishName: "Norway", dialCode: "+47" },
  ],
  P: [{ id: "pt", name: "葡萄牙", currency: "EUR", flagKey: "PT", englishName: "Portugal", dialCode: "+351" }],
  R: [
    { id: "jp", name: "日本", currency: "JPY", flagKey: "JP", englishName: "Japan", dialCode: "+81" },
    { id: "se", name: "瑞典", currency: "SEK", flagKey: "SE", englishName: "Sweden", dialCode: "+46" },
    { id: "ch", name: "瑞士", currency: "CHF", flagKey: "CH", englishName: "Switzerland", dialCode: "+41" },
  ],
  S: [
    { id: "cy", name: "塞浦路斯", currency: "EUR", flagKey: "CY", englishName: "Cyprus", dialCode: "+357" },
    { id: "sk", name: "斯洛伐克", currency: "EUR", flagKey: "SK", englishName: "Slovakia", dialCode: "+421" },
    { id: "si", name: "斯洛文尼亚", currency: "EUR", flagKey: "SI", englishName: "Slovenia", dialCode: "+386" },
  ],
  T: [{ id: "th", name: "泰国", currency: "THB", flagKey: "TH", englishName: "Thailand", dialCode: "+66" }],
  X: [
    { id: "es", name: "西班牙", currency: "EUR", flagKey: "ES", englishName: "Spain", dialCode: "+34" },
    { id: "gr", name: "希腊", currency: "EUR", flagKey: "GR", englishName: "Greece", dialCode: "+30" },
    { id: "sg", name: "新加坡", currency: "SGD", flagKey: "SG", englishName: "Singapore", dialCode: "+65" },
    { id: "nz", name: "新西兰", currency: "NZD", flagKey: "NZ", englishName: "New Zealand", dialCode: "+64" },
    { id: "hu", name: "匈牙利", currency: "HUF", flagKey: "HU", englishName: "Hungary", dialCode: "+36" },
  ],
  Y: [
    { id: "it", name: "意大利", currency: "EUR", flagKey: "IT", englishName: "Italy", dialCode: "+39" },
    { id: "il", name: "以色列", currency: "ILS", flagKey: "IL", englishName: "Israel", dialCode: "+972" },
    { id: "in", name: "印度", currency: "INR", flagKey: "IN", englishName: "India", dialCode: "+91" },
    { id: "id", name: "印度尼西亚", currency: "IDR", flagKey: "ID", englishName: "Indonesia", dialCode: "+62" },
    { id: "gb", name: "英国", currency: "GBP", flagKey: "GB", englishName: "United Kingdom", dialCode: "+44" },
    { id: "jo", name: "约旦", currency: "JOD", flagKey: "JO", englishName: "Jordan", dialCode: "+962" },
    { id: "vn", name: "越南", currency: "VND", flagKey: "VN", englishName: "Viet Nam", dialCode: "+84" },
  ],
  Z: [
    { id: "cl", name: "智利", currency: "CLP", flagKey: "CL", englishName: "Chile", dialCode: "+56" },
    { id: "mo", name: "中国澳门", currency: "MOP", flagKey: "MO", englishName: "Macao", dialCode: "+853" },
    { id: "hk", name: "中国香港", currency: "HKD", flagKey: "HK", englishName: "Hong Kong", dialCode: "+852" },
  ],
};

export const transferSummary: TransferSummary = {
  fromRegion: "越南",
  fromCurrency: "VND",
  amount: "100,000.00",
  toRegion: "中国",
  toCurrency: "CNY",
  estimatedReceiveAmount: "26.24",
  rateText: "参考汇率 1 AUD ≈ 4.7059 CNY",
};


export const recommendationTags = ["省钱最多", "到账最快"];

export const recipients: Recipient[] = [
  { id: "recipient-chen", avatarText: "C", name: "陈晨", note: "" },
  { id: "recipient-wang", avatarText: "W", name: "王小明", note: "" },
  { id: "recipient-clawbot", avatarText: "C", name: "微信助手", note: "" },
  { id: "recipient-li", avatarText: "L", name: "李雷", note: "" },
  { id: "recipient-han", avatarText: "H", name: "韩梅梅", note: "" },
  { id: "recipient-alex", avatarText: "A", name: "Alex", note: "" },
  { id: "recipient-sun", avatarText: "S", name: "孙亮", note: "" },
  { id: "recipient-zhao", avatarText: "Z", name: "赵敏", note: "" },
  { id: "recipient-zhou", avatarText: "Z", name: "周伟", note: "" },
  { id: "recipient-wu", avatarText: "W", name: "吴刚", note: "" },
  { id: "recipient-feng", avatarText: "F", name: "冯强", note: "" },
  { id: "recipient-zheng", avatarText: "Z", name: "郑洁", note: "" },
];

export const platforms: PlatformCard[] = [
  {
    id: "platform-panda",
    name: "熊猫速汇",
    logoText: "🐼",
    tags: [{ prefix: "免", text: "新用户免手续费", type: "orange" }],
    rateRaw: 4.7020,
    feeRaw: 0,
    feeOriginalRaw: 5.99,
    couponRaw: 100,
    arrivalSpeed: "2分钟",
    averageTime: "平均 5分钟",
    isFastest: true,
    buttonText: "去汇款",
    isRecommended: true,
  },
  {
    id: "platform-wise",
    name: "Wise",
    logoText: "W",
    tags: [{ prefix: "免", text: "新用户免手续费", type: "orange" }],
    rateRaw: 4.6980,
    feeRaw: 0,
    feeOriginalRaw: 12.50,
    arrivalSpeed: "2-5分钟",
    averageTime: "平均 15分钟",
    description: "英国上市公司，全球1600万用户的汇款之选。畅享实时费率和极速到账服务，无任何隐藏费用。",
    buttonText: "去汇款",
  },
  {
    id: "platform-koula",
    name: "考拉速汇",
    logoText: "🐨",
    tags: [
      { prefix: "惠", text: "新人领汇率券", type: "orange" },
      { prefix: "免", text: "新人免手续费", type: "orange" },
    ],
    rateRaw: 4.7110,
    feeRaw: 0,
    feeOriginalRaw: 8.00,
    couponRaw: 50,
    arrivalSpeed: "10-20分钟",
    averageTime: "平均 45分钟",
    description: "考拉速汇是一家旨为全球华人提供汇款服务的机构，提供安全、快捷、一站式在线汇款服务，极速到账，对比传统汇款手续费、汇率更优。",
    buttonText: "去汇款",
  },
  {
    id: "platform-lemfi",
    name: "LemFi",
    logoText: "LF",
    tags: [{ prefix: "免", text: "新用户免手续费", type: "orange" }],
    description: "全球前100金融科技公司，服务13个国家的超百万用户。提供安全、快捷、低成本的跨境汇款服务。支持从英国、加拿大、美国、欧洲各国直接汇款到微信。",
    buttonText: "去了解",
    isGrayButton: true,
  },
  {
    id: "platform-wu",
    name: "Western Union",
    logoText: "W",
    description: "西联跨境汇款服务覆盖全球200多个国家和地区，作为首家进入中国市场的全球汇款机构，我们从1995年开始与众多知名银行及金融机构合作提供跨境汇款服务。",
    buttonText: "去了解",
    isGrayButton: true,
  },
  {
    id: "platform-remitly",
    name: "Remitly",
    logoText: "R",
    tags: [{ text: "新用户享特别汇率", type: "orange" }],
    description: "Remitly是数百万客户的信赖之选，您可以从美国、加拿大等地汇款至中国。我们将您的资金安全放在第一位。我们会实时跟踪您的汇款情况，提供银行级别的安全保障。",
    buttonText: "去了解",
    isGrayButton: true,
  },
];

export const guideSteps: GuideStep[] = [
  { step: "1", title: "收款账户名称", value: "Wise Asia Remittance Ltd." },
  { step: "2", title: "收款账号", value: "6222 8888 1234 1036" },
  { step: "3", title: "参考附言", value: "WX-HK-20260330-001" },
];

export const stats: StatCard[] = [
  { label: "总汇款笔数", value: "12", unit: "笔" },
  { label: "累计汇款金额", value: "186,500", unit: "CNY" },
  { label: "累计节省金额", value: "2,860", unit: "CNY" },
];

export const historyRecords: HistoryRecord[] = [
  {
    id: "record-wise-01",
    datetime: "2026-03-18 09:42",
    platform: "Wise",
    status: "已完成",
    amount: "¥ 20,000",
    rate: "1.0831",
    fee: "¥48.00",
    recipient: "W**g / 香港工资卡",
    account: "6222 8888 1234 1036",
    remark: "WX-HK-20260318-006",
    feeDetail: "平台服务费 ¥36.00 / 汇率差额 ¥12.00",
  },
  {
    id: "record-panda-02",
    datetime: "2026-02-27 16:08",
    platform: "熊猫速汇",
    status: "处理中",
    amount: "¥ 8,500",
    rate: "1.0818",
    fee: "¥29.00",
    recipient: "L** / 家用支出",
    account: "9558 8088 1234 9912",
    remark: "WX-HK-20260227-002",
    feeDetail: "平台服务费 ¥20.00 / 通道费 ¥9.00",
  },
  {
    id: "record-remitly-03",
    datetime: "2026-01-09 11:25",
    platform: "Remitly",
    status: "已完成",
    amount: "¥ 12,000",
    rate: "1.0807",
    fee: "¥38.00",
    recipient: "C**n / 海外学费",
    account: "6217 0088 1234 5128",
    remark: "WX-HK-20260109-004",
    feeDetail: "平台服务费 ¥28.00 / 通道费 ¥10.00",
  },
];
