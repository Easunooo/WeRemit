(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const ie=["record-wise-01"],ne=["home","authorize","confirm","platforms","guide","profile","order-management","select-country","upload-id","id-prep","face-intro","face-scan","face-waiting","face-success","select-contact","confirm-recipient","create-success","order-details"],N={AED:1.97,ARS:.008,AUD:4.65,BGN:4.02,BHD:19.2,BRL:1.45,CAD:5.31,CHF:8.35,CLP:.008,COP:.0018,CZK:.31,DKK:1.05,EGP:.15,EUR:7.85,GBP:9.15,GEL:2.7,HKD:.92,HUF:.02,ILS:1.95,INR:.087,ISK:.052,JPY:.047,KES:.056,KGS:.08,KHR:.0017,KRW:.0053,KWD:23.5,LBP:8e-5,LKR:.024,MAD:.72,MXN:.42,MYR:1.54,NOK:.67,NZD:4.28,OMR:18.8,PAB:7.24,PEN:1.95,PHP:.13,PKR:.026,PLN:1.81,QAR:1.99,RON:1.58,SAR:1.93,SEK:.69,SGD:5.35,THB:.2,TRY:.22,TWD:.22,USD:7.24,VND:28e-5,ZAR:.38},$=[{id:"hk",name:"中国香港",currency:"HKD",flagKey:"HK",englishName:"Hong Kong",dialCode:"+852"},{id:"us",name:"美国",currency:"USD",flagKey:"US",englishName:"United States",dialCode:"+1"},{id:"kr",name:"韩国",currency:"KRW",flagKey:"KR",englishName:"South Korea",dialCode:"+82"},{id:"sg",name:"新加坡",currency:"SGD",flagKey:"SG",englishName:"Singapore",dialCode:"+65"}],x={A:[{id:"ar",name:"阿根廷",currency:"ARS",flagKey:"AR",englishName:"Argentina",dialCode:"+54"},{id:"ae",name:"阿联酋",currency:"AED",flagKey:"AE",englishName:"United Arab Emirates",dialCode:"+971"},{id:"ie",name:"爱尔兰",currency:"EUR",flagKey:"IE",englishName:"Ireland",dialCode:"+353"},{id:"ee",name:"爱沙尼亚",currency:"EUR",flagKey:"EE",englishName:"Estonia",dialCode:"+372"},{id:"ad",name:"安道尔",currency:"EUR",flagKey:"AD",englishName:"Andorra",dialCode:"+376"},{id:"au",name:"澳大利亚",currency:"AUD",flagKey:"AU",englishName:"Australia",dialCode:"+61"},{id:"at",name:"奥地利",currency:"EUR",flagKey:"AT",englishName:"Austria",dialCode:"+43"}],B:[{id:"bh",name:"巴林",currency:"BHD",flagKey:"BH",englishName:"Bahrain",dialCode:"+973"},{id:"pa",name:"巴拿马",currency:"PAB",flagKey:"PA",englishName:"Panama",dialCode:"+507"},{id:"br",name:"巴西",currency:"BRL",flagKey:"BR",englishName:"Brazil",dialCode:"+55"},{id:"bg",name:"保加利亚",currency:"BGN",flagKey:"BG",englishName:"Bulgaria",dialCode:"+359"},{id:"be",name:"比利时",currency:"EUR",flagKey:"BE",englishName:"Belgium",dialCode:"+32"},{id:"is",name:"冰岛",currency:"ISK",flagKey:"IS",englishName:"Iceland",dialCode:"+354"},{id:"pl",name:"波兰",currency:"PLN",flagKey:"PL",englishName:"Poland",dialCode:"+48"}],E:[{id:"eg",name:"埃及",currency:"EGP",flagKey:"EG",englishName:"Egypt",dialCode:"+20"}],D:[{id:"dk",name:"丹麦",currency:"DKK",flagKey:"DK",englishName:"Denmark",dialCode:"+45"},{id:"de",name:"德国",currency:"EUR",flagKey:"DE",englishName:"Germany",dialCode:"+49"}],F:[{id:"fr",name:"法国",currency:"EUR",flagKey:"FR",englishName:"France",dialCode:"+33"},{id:"fi",name:"芬兰",currency:"EUR",flagKey:"FI",englishName:"Finland",dialCode:"+358"}],G:[{id:"co",name:"哥伦比亚",currency:"COP",flagKey:"CO",englishName:"Colombia",dialCode:"+57"},{id:"ge",name:"格鲁吉亚",currency:"GEL",flagKey:"GE",englishName:"Georgia",dialCode:"+995"}],H:[{id:"kr",name:"韩国",currency:"KRW",flagKey:"KR",englishName:"Korea",dialCode:"+82"},{id:"nl",name:"荷兰",currency:"EUR",flagKey:"NL",englishName:"Netherlands",dialCode:"+31"}],J:[{id:"kg",name:"吉尔吉斯斯坦",currency:"KGS",flagKey:"KG",englishName:"Kyrgyzstan",dialCode:"+996"},{id:"ca",name:"加拿大",currency:"CAD",flagKey:"CA",englishName:"Canada",dialCode:"+1"},{id:"kh",name:"柬埔寨",currency:"KHR",flagKey:"KH",englishName:"Cambodia",dialCode:"+855"},{id:"cz",name:"捷克",currency:"CZK",flagKey:"CZ",englishName:"Czechia",dialCode:"+420"}],K:[{id:"qa",name:"卡塔尔",currency:"QAR",flagKey:"QA",englishName:"Qatar",dialCode:"+974"},{id:"hr",name:"克罗地亚",currency:"HRK",flagKey:"HR",englishName:"Croatia",dialCode:"+385"},{id:"ke",name:"肯尼亚",currency:"KES",flagKey:"KE",englishName:"Kenya",dialCode:"+254"}],L:[{id:"lv",name:"拉脱维亚",currency:"EUR",flagKey:"LV",englishName:"Latvia",dialCode:"+371"},{id:"lt",name:"立陶宛",currency:"EUR",flagKey:"LT",englishName:"Lithuania",dialCode:"+370"},{id:"li",name:"列支敦士登",currency:"CHF",flagKey:"LI",englishName:"Liechtenstein",dialCode:"+423"},{id:"lu",name:"卢森堡",currency:"EUR",flagKey:"LU",englishName:"Luxembourg",dialCode:"+352"},{id:"ro",name:"罗马尼亚",currency:"RON",flagKey:"RO",englishName:"Romania",dialCode:"+40"}],M:[{id:"mt",name:"马耳他",currency:"EUR",flagKey:"MT",englishName:"Malta",dialCode:"+356"},{id:"my",name:"马来西亚",currency:"MYR",flagKey:"MY",englishName:"Malaysia",dialCode:"+60"},{id:"us",name:"美国",currency:"USD",flagKey:"US",englishName:"United States",dialCode:"+1"},{id:"pe",name:"秘鲁",currency:"PEN",flagKey:"PE",englishName:"Peru",dialCode:"+51"},{id:"mc",name:"摩纳哥",currency:"EUR",flagKey:"MC",englishName:"Monaco",dialCode:"+377"},{id:"mx",name:"墨西哥",currency:"MXN",flagKey:"MX",englishName:"Mexico",dialCode:"+52"}],N:[{id:"za",name:"南非",currency:"ZAR",flagKey:"ZA",englishName:"South Africa",dialCode:"+27"},{id:"no",name:"挪威",currency:"NOK",flagKey:"NO",englishName:"Norway",dialCode:"+47"}],P:[{id:"pt",name:"葡萄牙",currency:"EUR",flagKey:"PT",englishName:"Portugal",dialCode:"+351"}],R:[{id:"jp",name:"日本",currency:"JPY",flagKey:"JP",englishName:"Japan",dialCode:"+81"},{id:"se",name:"瑞典",currency:"SEK",flagKey:"SE",englishName:"Sweden",dialCode:"+46"},{id:"ch",name:"瑞士",currency:"CHF",flagKey:"CH",englishName:"Switzerland",dialCode:"+41"}],S:[{id:"cy",name:"塞浦路斯",currency:"EUR",flagKey:"CY",englishName:"Cyprus",dialCode:"+357"},{id:"sk",name:"斯洛伐克",currency:"EUR",flagKey:"SK",englishName:"Slovakia",dialCode:"+421"},{id:"si",name:"斯洛文尼亚",currency:"EUR",flagKey:"SI",englishName:"Slovenia",dialCode:"+386"}],T:[{id:"th",name:"泰国",currency:"THB",flagKey:"TH",englishName:"Thailand",dialCode:"+66"}],X:[{id:"es",name:"西班牙",currency:"EUR",flagKey:"ES",englishName:"Spain",dialCode:"+34"},{id:"gr",name:"希腊",currency:"EUR",flagKey:"GR",englishName:"Greece",dialCode:"+30"},{id:"sg",name:"新加坡",currency:"SGD",flagKey:"SG",englishName:"Singapore",dialCode:"+65"},{id:"nz",name:"新西兰",currency:"NZD",flagKey:"NZ",englishName:"New Zealand",dialCode:"+64"},{id:"hu",name:"匈牙利",currency:"HUF",flagKey:"HU",englishName:"Hungary",dialCode:"+36"}],Y:[{id:"it",name:"意大利",currency:"EUR",flagKey:"IT",englishName:"Italy",dialCode:"+39"},{id:"il",name:"以色列",currency:"ILS",flagKey:"IL",englishName:"Israel",dialCode:"+972"},{id:"in",name:"印度",currency:"INR",flagKey:"IN",englishName:"India",dialCode:"+91"},{id:"id",name:"印度尼西亚",currency:"IDR",flagKey:"ID",englishName:"Indonesia",dialCode:"+62"},{id:"gb",name:"英国",currency:"GBP",flagKey:"GB",englishName:"United Kingdom",dialCode:"+44"},{id:"jo",name:"约旦",currency:"JOD",flagKey:"JO",englishName:"Jordan",dialCode:"+962"},{id:"vn",name:"越南",currency:"VND",flagKey:"VN",englishName:"Viet Nam",dialCode:"+84"}],Z:[{id:"cl",name:"智利",currency:"CLP",flagKey:"CL",englishName:"Chile",dialCode:"+56"},{id:"mo",name:"中国澳门",currency:"MOP",flagKey:"MO",englishName:"Macao",dialCode:"+853"},{id:"hk",name:"中国香港",currency:"HKD",flagKey:"HK",englishName:"Hong Kong",dialCode:"+852"}]},y={fromRegion:"越南",fromCurrency:"VND",toRegion:"中国",toCurrency:"CNY"},G=[{id:"recipient-magic",avatarText:"杨",name:"杨德林 Darren",realName:"(**杨)",wechatId:"darren_yang",note:""},{id:"recipient-chen",avatarText:"C",name:"陈晨",realName:"(**晨)",wechatId:"chen_chen_01",note:""},{id:"recipient-wang",avatarText:"W",name:"王小明",realName:"(**明)",wechatId:"xiaoming_w",note:""},{id:"recipient-li",avatarText:"L",name:"李雷",realName:"(**雷)",wechatId:"li_lei_xyz",note:""},{id:"recipient-han",avatarText:"H",name:"韩梅梅",realName:"(**梅)",wechatId:"han_meimei",note:""},{id:"recipient-alex",avatarText:"A",name:"Alex",wechatId:"alex_global",note:""},{id:"recipient-sun",avatarText:"S",name:"孙亮",realName:"(**亮)",wechatId:"sun_light",note:""},{id:"recipient-zhao",avatarText:"Z",name:"赵敏",realName:"(**敏)",wechatId:"zhao_min_01",note:""},{id:"recipient-zhou",avatarText:"Z",name:"周伟",realName:"(**伟)",wechatId:"zhou_wei_w",note:""},{id:"recipient-wu",avatarText:"W",name:"吴刚",realName:"(**刚)",wechatId:"wu_gang_123",note:""},{id:"recipient-feng",avatarText:"F",name:"冯强",realName:"(**强)",wechatId:"feng_qiang_ff",note:""},{id:"recipient-zheng",avatarText:"Z",name:"郑洁",realName:"(**洁)",wechatId:"zheng_jie_z",note:""}],M=[{id:"platform-panda",name:"熊猫速汇",logoText:"🐼",tags:[{prefix:"免",text:"新用户免手续费",type:"orange"}],rateRaw:4.702,feeRaw:0,feeOriginalRaw:5.99,couponRaw:100,arrivalSpeed:"1-2小时",averageTime:"1-2小时",isFastest:!0,buttonText:"去汇款",isRecommended:!0,providerAccountName:"Panda Remit Australia Pty Ltd",bankAccount:"1234 5678 9012 3456"},{id:"platform-wise",name:"Wise",logoText:"W",tags:[{prefix:"免",text:"新用户免手续费",type:"orange"}],rateRaw:4.698,feeRaw:0,feeOriginalRaw:12.5,arrivalSpeed:"2-4小时",averageTime:"2-4小时",description:"英国上市公司，全球1600万用户的汇款之选。畅享实时费率和极速到账服务，无任何隐藏费用。",buttonText:"去汇款",providerAccountName:"Wise Asia Remittance Ltd.",bankAccount:"6222 8888 1234 1036"},{id:"platform-koula",name:"考拉速汇",logoText:"🐨",tags:[{prefix:"惠",text:"新人领汇率券",type:"orange"},{prefix:"免",text:"新人免手续费",type:"orange"}],rateRaw:4.711,feeRaw:0,feeOriginalRaw:8,couponRaw:50,arrivalSpeed:"4-5小时",averageTime:"4-5小时",description:"考拉速汇是一家旨为全球华人提供汇款服务的机构，提供安全、快捷、一站式在线汇款服务，极速到账，对比传统汇款手续费、汇率更优。",buttonText:"去汇款",providerAccountName:"Koula Remit Australia Pty Ltd",bankAccount:"9876 5432 1098 7654"},{id:"platform-lemfi",name:"LemFi",logoText:"LF",tags:[{prefix:"免",text:"新用户免手续费",type:"orange"}],arrivalSpeed:"2-4小时",averageTime:"2-4小时",description:"全球前100金融科技公司，服务13个国家的超百万用户。提供安全、快捷、低成本的跨境汇款服务。支持从英国、加拿大、美国、欧洲各国直接汇款到微信。",buttonText:"去了解",isGrayButton:!0,providerAccountName:"Rightcard Payment Services Ltd",bankAccount:"1122 3344 5566 7788"},{id:"platform-wu",name:"Western Union",logoText:"W",arrivalSpeed:"4-5小时",averageTime:"4-5小时",description:"西联跨境汇款服务覆盖全球200多个国家和地区，作为首家进入中国市场的全球汇款机构，我们从1995年开始与众多知名银行及金融机构合作提供跨境汇款服务。",buttonText:"去了解",isGrayButton:!0,providerAccountName:"Western Union Financial Services",bankAccount:"3344 5566 7788 9900"},{id:"platform-remitly",name:"Remitly",logoText:"R",tags:[{text:"新用户享特别汇率",type:"orange"}],arrivalSpeed:"2-4小时",averageTime:"2-4小时",description:"Remitly是数百万客户的信赖之选，您可以从美国、加拿大等地汇款至中国。我们将您的资金安全放在第一位。我们会实时跟踪您的汇款情况，提供银行级别的安全保障。",buttonText:"去了解",isGrayButton:!0,providerAccountName:"Remitly UK Ltd",bankAccount:"5566 7788 9900 1122"}],g=[{step:"1",title:"汇款机构账户名称",value:"Wise Asia Remittance Ltd."},{step:"2",title:"汇款机构账号",value:"6222 8888 1234 1036"},{step:"3",title:"参考附言",value:"WX-HK-20260330-001"}],re=[{label:"总汇款笔数",value:"12",unit:"笔"},{label:"累计汇款金额",value:"186,500",unit:"CNY"},{label:"累计节省金额",value:"2,860",unit:"CNY"}],T=[],le="AUD",A=4.7059;function ce(e){return e.selectedCountry?.currency||le}function B(e){const t=ce(e).toUpperCase();return e.exchangeRate||e.ratesCache[t]||N[t]||A}function oe(e){return(e.rateRaw||A)/A}function de(e,t){return B(t)*oe(e)}function R(e,t){const a=t.amount>0?t.amount:0,s=e.feeRaw||0,n=e.couponRaw||0,r=de(e,t),l=a>0?Math.max(a-s,0)*r+n:0;return{amount:a,fee:s,coupon:n,rate:r,receiveAmount:l}}function P(e,t){const a=[...e];return t.platformSort==="cheapest"?(a.sort((s,n)=>{const r=R(s,t).receiveAmount;return R(n,t).receiveAmount-r}),a):(a.sort((s,n)=>s.isFastest&&!n.isFastest?-1:!s.isFastest&&n.isFastest?1:0),a)}function F(e,t){const a=P(e,t);return t.selectedPlatformId&&e.find(s=>s.id===t.selectedPlatformId)||a[0]}const D='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b2b2b2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',O='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><polyline points="15 18 9 12 15 6"></polyline></svg>',j='<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><polyline points="15 18 9 12 15 6"></polyline></svg>',ve='<svg viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',V='<svg viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="6 9 12 15 18 9"></polyline></svg>',S='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="9 18 15 12 9 6"></polyline></svg>',pe='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',fe='<svg viewBox="0 0 24 24" fill="none" stroke="#07c160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px;"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 21V10"></path><path d="M9 21V10"></path><path d="M15 21V10"></path><path d="M19 21V10"></path><path d="M3 10l9-7 9 7"></path></svg>',he='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',ue='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',me=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#00008b" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M480 348.4l14.1 43.5h45.7l-37 26.9 14.2 43.5-37-26.9-37 26.9 14.2-43.5-37-26.9h45.7zM160 360l8.1 24.8h26.1l-21.1 15.3 8.1 24.8-21.2-15.3-21.2 15.3 8.1-24.8-21.1-15.3H152zm160-53.1l11.4 34.9h36.7l-29.7 21.6 11.4 34.9-29.8-21.6-29.7 21.6 11.4-34.9-29.7-21.6h36.7zm160-184l11.4 34.9h36.7l-29.7 21.6 11.4 34.9-29.8-21.6-29.7 21.6 11.4-34.9-29.7-21.6h36.7zm0-101.4l6.1 18.7h19.6l-15.9 11.6 6 18.7-15.9-11.6-15.9 11.6 6-18.7-15.8-11.6h19.6z"/>
  <path fill="#fff" d="M0 0h320v160H0z"/>
  <path fill="#fff" d="M0 0v240h320V0H0zm140 0h40v240h-40V0zM0 100h320v40H0v-40z"/>
  <path fill="#ff0000" d="M0 0v240h320V0H0zm148 0h24v240h-24V0zM0 108h320v24H0v-24z"/>
  <path stroke="#fff" stroke-width="20" d="M0 0l320 240m0-240L0 240"/>
  <path stroke="#ff0000" stroke-width="12" d="M0 0l320 240m0-240L0 240"/>
</svg>
`,U=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#de2910" d="M0 0h640v480H0z"/>
  <path fill="#ffde00" d="M120 72l12 38.3h40.3L140 134l12.4 38.2L120 148.6l-32.4 23.6 12.4-38.2-32.5-23.7h40.3zm78-41.5l1.6 6h6.1l-5 3.5 1.9 6-5-3.8-5 3.8 2-6-5-3.5h5zm24 24l4.6 4.1 3-5.5-1 6.3 5.4 3.7-6.2.7.2 6.5-4-5-5.3 4 2-6.2-5-4.2 6.4-.6zm0 40l6.2.6-2 6.2 5.3 4-4 5-.2 6.5-6.2-.7-5.4 3.7 1-6.3-3-5.5-4.6 4.1 6-.5zm-24 24l5 3.5-2 6 5-3.8 5 3.8-1.9-6 5-3.5h-6l-1.6-6-1.7 6h-6.1z"/>
</svg>
`,Y=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#da251d" d="M0 0h640v480H0z"/>
  <path fill="#ff0" d="M320 120l23.5 72.3h76l-61.5 44.7 23.5 72.3-61.5-44.7-61.5 44.7 23.5-72.3-61.5-44.7h76z"/>
</svg>
`,ge=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#de2910" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M331.3 115.1c-14 3.1-41.5 21.6-47.5 73.1 7.1-15.6 15.6-25 36.6-32.9 8.7-2.9 23-4.5 35.1-4.7-22.3.4-60.8 11.6-70.1 76-1.1 5.4-3.1 19.4 3.4 35 2 4.9 6.7 17.2 18.5 26.8-19.1-11.6-33.1-34.6-28.8-71.1 1.4-11.8 4.2-22.1 13.6-35.1 3.4-4.7 9.8-13.6 22-20.4-12.7 6.1-23 18.1-27.9 33.3-10.3 32.2-2.7 61 7.1 73.6 8.3 10.5 28.6 20.3 48.7 15.6-28.8 5.4-66.3-21-65.7-77.7.4-40.7 20.3-66.3 54.9-91.5zm-55.9 146.4c1.1-1.3 4.2-4.5 4.5-4.5.2-.2-3.6 23.4-1.3 37.1.5 3.1 1.6 8.3 4.5 13.8-3.1-4-5.4-8.7-6.7-14.7-2-8.5-2.2-28.1-1-31.7zm116.3-134.7c15.1-6.1 48-18.1 94.7 14.1-17.6-1.4-31.1 2.3-51.4 12.3-8.5 4.2-19.4 12.5-26.4 19.4 14.2-6.5 46.1-12.8 91.5 37.7 3.6 4.1 12.1 14.1 18.3 27.2 2 3.8 7.6 15.2 10.3 30.2-12.7-18.1-29.9-34.8-63-42.5-12.1-2.9-23-4-37.1-2.5-6.5.7-18.5 3.8-29.3 10.7 12.7-.9 31.9-.9 51.4 6.7 41 16.3 54.5 40.7 58.7 54.7 3.6 11.6 5.4 34.6-2.5 54.1-8.5-30.8-26.6-59.5-73.4-68.4-35.7-7.2-57.1 11.8-82.7 44.2zm-22.1 154.5c.2 1.8 1.1 6.5 1.1 6.1 0-.2.5-24 5.6-35.7.9-2.2 3.6-7.6 6.9-12.3-4.5 2.5-8.3 5.4-11.2 9.4-4.2 6.5-2.9 28.8-2.4 32.5zm-72.2-27.5c6.3-13.8 24.6-43.1 78.4-45.6-4.9 17.1-3.6 30.9-.9 53.2.9 9.8 3.8 23 7.8 30.6-11.4-11.2-22.1-41.2-11.2-100.3.9-4.7 2.7-18.3 8.3-31.1.9-2.2 4-11.9 9.8-21.6-6.1 15.1-6.5 31.5-6.5 54.1 0 12.1 1.4 23.9 4.9 38 .7 2.7 2.2 12.1 7.4 22-11.6-6.1-27.9-14.7-41.2-34-11.6-17-15.1-40.9-10.7-61-.7 32.7 15.6 70.3 56.5 102.7 8.3 6.9 26.4 18.5 44.9 21.2-32.9-.4-68-30.6-88.7-82.3zm8.3 47.7c-.5-1.1-2-5.4-2-4.9 0 .2 15.2 11.6 28.1 10.7 2.9-.2 7.4-1.6 12.5-3.8-3.6.7-7.8 1.6-13.2 1.1-7.1-1.1-24.8-2-25.4-3.1zm115-46.1c-13.4-6.3-43.3-18.7-65.5 13.6 12.1 10.7 21.4 18.8 32 40 .4 1.8 2.2 6.7 5.6 11.6-5.8-13.2-11.2-41-45.7-81.8-2.7-3.4-13.8-16.1-28.4-23.7-2.9-1.3-12.5-5.6-26.8-9.4 12.1 3.6 32.4 8.7 50.7 21.6 11.8 8.1 20.3 16.3 27.5 28.4.9 1.6 5.8 12.1 9.6 24.4-.2-12.5-1.4-27.5-6.5-44-6.5-20.6-18.1-33.6-29.3-47.2 24 16.3 35.1 48.9 41.6 85.9 1.3 8.1 3.1 31.9-1.3 52 14.3-25.5 18.5-61.9 6.5-101.4zM315 253.3c-1.3.2-5.4.7-4.9.4.2 0 17.2-6.5 23.4-15.4 1.6-2.2 3.8-5.8 4.7-10.7-.7 3.8-2 7.1-4.7 10.3-3.6 4.7-17.6 15-18.5 15.4zm102.3-51.4c-8.7 12.3-22.1 35-5.4 78.4-5.4-15.6-7.4-28.4-8.7-52.9-1.1-11.4-.7-23.4 2.2-34.9-3.4 14.1 6.5 44 48.9 74.9 3.6 2.5 13.8 8.9 27.5 14.3 2.5 1.1 14.3 5.4 27.7 8.5-16.1-1.3-32.2-4.9-51.4-11.2-10.7-3.6-21.6-8.3-31.9-15.6.7 12.5 4.5 24.1 9.4 35.1 2.2 4.9 8.7 21.2 19 32.2-7.1-10.3-11.4-23.4-13.4-38.9-.7-16.1 2.5-28.6 7.4-42.5 1-13.8 5.6-35.1 22.1-42.5-16.5 12.1-23.7 44-18.1 91 1 8.7 7.4 34 16.1 48.7-27.5-15.6-39.1-42.7-48.2-89zm-13.4 34c.4 1.3 2.5 5.6 2.2 5.1-.2-.2-4.9-18.3-15.4-25.5-2.2-1.6-6.1-4.7-11-6.1 3.8.4 7.4 1.3 11.2 3.8 5.8 3.8 12.5 21 13 22.7z"/>
</svg>
`,we=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#bd3d44" d="M0 0h640v480H0z"/>
  <path stroke="#fff" stroke-width="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/>
  <path fill="#192f5d" d="M0 0h364.8v258.5H0z"/>
  <g fill="#fff">
    <g id="s1">
      <g id="s2">
        <g id="s3">
          <g id="s4">
            <path id="s" d="M30 35h13.1L33 43l5 13-10.5-8-10.5 8 5-13-10.1-8H23z"/>
            <use href="#s" y="52"/>
          </g>
          <use href="#s" y="104"/>
        </g>
        <use href="#s" y="156"/>
      </g>
      <use href="#s" y="208"/>
    </g>
    <use href="#s1" x="61"/>
    <use href="#s1" x="122"/>
    <use href="#s1" x="183"/>
    <use href="#s1" x="244"/>
    <use href="#s1" x="305"/>
    <g id="ss1">
      <g id="ss2">
        <g id="ss3">
          <g id="ss4">
            <use href="#s" x="30.5" y="26"/>
            <use href="#s" x="30.5" y="78"/>
          </g>
          <use href="#s" x="30.5" y="130"/>
        </g>
        <use href="#s" x="30.5" y="182"/>
      </g>
    </g>
    <use href="#ss1" x="61"/>
    <use href="#ss1" x="122"/>
    <use href="#ss1" x="183"/>
    <use href="#ss1" x="244"/>
  </g>
</svg>
`,ye=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#fff" d="M0 0h640v480H0z"/>
  <g transform="rotate(33.7 320 240)">
    <path fill="#cd2e3a" d="M320 120a120 120 0 0 1 0 240 120 120 0 0 1 0-240z"/>
    <path fill="#0047a0" d="M320 360a120 120 0 0 1 0-240 60 60 0 0 1 0 120 60 60 0 0 0 0 120z"/>
    <path fill="#cd2e3a" d="M320 120a60 60 0 0 0 0 120 60 60 0 0 1 0 120 120 120 0 0 0 0-240z"/>
  </g>
  <g id="bg">
    <g id="b1">
      <path id="bar" d="M125 150h12v100h-12z" transform="rotate(33.7 320 240) translate(-213 -130)"/>
      <use href="#bar" y="20"/>
      <use href="#bar" y="40"/>
    </g>
    <g id="b2" transform="rotate(67.4 320 240)">
      <use href="#bar" x="426" y="200"/>
      <path d="M539 350h12v45h-12zm0 55h12v45h-12z" transform="rotate(-33.7 320 240) translate(213 130)"/>
      <use href="#bar" x="426" y="240"/>
    </g>
    <g id="b3" transform="rotate(112.6 320 240)">
      <use href="#bar" x="-213" y="130"/>
      <path d="M125 150h12v45h-12zm0 55h12v45h-12z" transform="rotate(-33.7 320 240) translate(-213 -130)"/>
      <use href="#bar" x="-213" y="170"/>
    </g>
    <g id="b4" transform="rotate(146.3 320 240)">
      <path d="M539 350h12v45h-12zm0 55h12v45h-12z" transform="rotate(-33.7 320 240) translate(213 130)"/>
      <path d="M539 370h12v45h-12zm0 55h12v45h-12z" transform="rotate(-33.7 320 240) translate(213 130)"/>
      <path d="M539 390h12v45h-12zm0 55h12v45h-12z" transform="rotate(-33.7 320 240) translate(213 130)"/>
    </g>
  </g>
</svg>
`,be=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#fff" d="M0 0h640v480H0z"/>
  <path fill="#ed2e38" d="M0 0h640v240H0z"/>
  <g fill="#fff">
    <path d="M130 191a72 72 0 1 1 0-143.5 82 82 0 1 0 0 143.5z"/>
    <g id="star">
      <path id="s" d="M128 65l3 9.4H141l-8 5.8 3 9.3-8-5.8-8 5.8 3-9.3-8-5.8h10z" transform="translate(42 -14)"/>
      <use href="#s" y="34"/>
    </g>
    <use href="#star" x="20" y="17"/>
    <use href="#s" x="40"/>
  </g>
</svg>
`,xe=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#71b3e8" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#ffb81c" d="M338 240a18 18 0 1 1-36 0 18 18 0 0 1 36 0z"/>
</svg>
`,_e=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#00732f" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#000" d="M0 320h640v160H0z"/>
  <path fill="red" d="M0 0h160v480H0z"/>
</svg>
`,ke=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#169b62" d="M0 0h213.3v480H0z"/>
  <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
  <path fill="#ff883e" d="M426.7 0H640v480H426.7z"/>
</svg>
`,$e=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#4891d9" d="M0 0h640v160H0z"/>
  <path fill="#000" d="M0 160h640v160H0z"/>
  <path fill="#fff" d="M0 320h640v160H0z"/>
</svg>
`,ze=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#001898" d="M0 0h213.3v480H0z"/>
  <path fill="#fed500" d="M213.3 0h213.4v480H213.3z"/>
  <path fill="#d50032" d="M426.7 0H640v480H426.7z"/>
  <path d="M280 200h80v80h-80z" fill="#ffb81c"/>
</svg>
`,Me='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#ed2939" d="M0 0h640v160H0zm0 320h640v160H0z"/></svg>',Ce='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000" d="M0 0h213.3v480H0z"/><path fill="#ff0" d="M213.3 0h213.4v480h-213.4z"/><path fill="red" d="M426.7 0H640v480h-213.3z"/></svg>',He='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#009739" d="M0 0h640v480H0z"/><path fill="#fedd00" d="M320 72L64 240l256 168 256-168z"/><circle cx="320" cy="240" r="88" fill="#012169"/></svg>',Se='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#f00" d="M0 0h640v480H0z"/><path fill="#fff" d="M160 0h320v480H160z"/><path fill="#f00" d="M320 120l5 70 65-40-30 75 70 30-75 10 30 75-65-45-65 45 30-75-75-10 70-30-30-75 65 40z"/></svg>',Re='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ffce00" d="M0 320h640v160H0z"/><path fill="#000" d="M0 0h640v160H0z"/><path fill="#d00" d="M0 160h640v160H0z"/></svg>',Ae='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M213.3 0h213.4v480h-213.4z"/><path fill="#002395" d="M0 0h213.3v480H0z"/><path fill="#ed2939" d="M426.7 0H640v480H426.7z"/></svg>',Le='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="144" fill="#bc002d"/></svg>',Ne='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#21468b" d="M0 320h640v160H0z"/><path fill="#ae1c28" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/></svg>',Ge='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#f4f5f8" d="M0 0h640v480H0z"/><path fill="#2d2a4a" d="M0 160h640v160H0z"/><path fill="#a51931" d="M0 0h640v80H0zm0 400h640v80H0z"/></svg>',Be='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#0d5eaf" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 53.3h640v53.4H0zm0 106.7h640v53.3H0zm0 106.7h640v53.3H0zm0 106.6h640v53.4H0zM240 0h53.3v266.7H240zM0 106.7h293.3v53.3H0z"/></svg>',Fe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M213.3 0h213.4v480h-213.4z"/><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></svg>',Ie='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#c60b1e" d="M0 0h640v120H0zm0 360h640v120H0z"/><path fill="#ffc400" d="M0 120h640v240H0z"/><circle cx="160" cy="240" r="40" fill="#a50000"/></svg>',Ke='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#fff" d="m75 0 245 180L565 0h75v50L395 240l245 190v50h-75L320 300 75 480H0v-50l245-190L0 50V0z"/><path fill="#C8102E" d="m424 281 216 159v40L365 281zm-208 0-216 160v39l216-159zm0-82L0 39V0l216 160zm208 0L640 40V0L424 160z"/><path fill="#fff" d="M240 0v480h160V0zM0 160v160h640V160z"/><path fill="#C8102E" d="M267 0v480h106V0zM0 187v106h640V187z"/></svg>',Te='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#cc0000" d="M0 0h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0zm0 68.5h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0z"/><path fill="#000066" d="M0 0h320v240H0z"/><path fill="#fff" d="M160 180a60 60 0 1 1 0-120 70 70 0 1 0 0 120z"/><path fill="#ffcc00" d="M190 120l15 45 45-15-30 35 30 35-45-15-15 45-15-45-45 15 30-35-30-35 45 15z"/></svg>',Ve='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#007a4d" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0v480h160L400 240 160 0H0z"/><path fill="#000" d="M0 40v400h120L320 240 120 40H0z"/><path fill="#ffb81c" d="M0 160v160h160L320 240 160 160H0z"/><path fill="#002395" d="M320 240L640 480H213L320 240z"/><path fill="#e03c31" d="M320 240L213 0h427L320 240z"/></svg>',Ee='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="red" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h160l100 48 100 48-100 48-100 48 100 48 100 48-100 48-100 48 100 48-100 48H0z"/></svg>',Pe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#dc143c" d="M0 240h640v240H0z"/></svg>',De='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#c8102e" d="M0 0h640v480H0z"/><path fill="#fff" d="M176 0h64v480h-64zM0 208h640v64H0z"/></svg>',Oe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#003580" d="M0 174.5h640v131H0zm174.5-174.5h131v480h-131z"/></svg>',je='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#006aa7" d="M0 0h640v480H0z"/><path fill="#fecc00" d="M0 192h640v96H0zm160-192h96v480h-96z"/></svg>',Ue='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="red" d="M0 0h640v480H0z"/><path fill="#fff" d="M280 120h80v240h-80zm-120 120h240v80h-240z"/></svg>',Ye='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ba0c2f" d="M0 0h640v480H0z"/><path fill="#fff" d="M180 0h120v480H180zM0 180h640v120H0z"/><path fill="#00205b" d="M210 0h60v480h-60zM0 210h640v60H0z"/></svg>',We='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#006600" d="M0 0h256v480H0z"/><path fill="red" d="M256 0h384v480H256z"/><circle cx="256" cy="240" r="80" fill="#ffde00"/></svg>',Ze='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fcd116" d="M0 0h640v240H0z"/><path fill="#003893" d="M0 240h640v120H0z"/><path fill="#ce1126" d="M0 360h640v120H0z"/></svg>',Qe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#8d1b3d" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h160l60 26 60 27-60 27-60 26 60 27 60 26-60 27-60 26 60 27 60 26-60 27-60 26 60 27 60 26-60 27-60 26H0z"/></svg>',qe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h320v480H0z"/><path fill="#c00" d="M320 0h320v480H320z"/><path d="M40 40h40v40H40z" fill="#ddd"/></svg>',Je='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#003897" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 174.5h640v131H0zm174.5-174.5h131v480h-131z"/><path fill="#d72828" d="M0 203.6h640v72.8H0zm203.6-203.6h72.8v480h-72.8z"/></svg>',Xe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ff9933" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#128807" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="60" fill="none" stroke="#000080" stroke-width="2"/><circle cx="320" cy="240" r="10" fill="#000080"/></svg>',et='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#d47000" d="M220 140h200v200h-200z"/><path fill="#4e5b31" d="M280 360l80 40 80-40z"/></svg>',tt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#ff0000" d="M280 0h80v480h-80zM0 200h640v80H0z"/><path fill="#ff0000" d="M120 80h40v40h-40zM480 80h40v40h-40zM120 360h40v40h-40zM480 360h40v40h-40z"/></svg>',at='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#002b7f" d="M0 0h213.3v480H0z"/><path fill="#fcd116" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce1126" d="M426.7 0H640v480H426.7z"/></svg>',st='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ed2939" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#00a1de" d="M0 320h640v160H0z"/></svg>',it='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#d7141a" d="M0 240h640v240H0z"/><path fill="#11457e" d="M0 0l320 240L0 480z"/></svg>',nt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#0b4ea2" d="M0 160h640v160H0z"/><path fill="#ee1c25" d="M0 320h640v160H0z"/><circle cx="160" cy="240" r="40" fill="#fff" stroke="#000"/></svg>',rt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#005293" d="M0 160h640v160H0z"/><path fill="#ed1c24" d="M0 320h640v160H0z"/><path d="M120 120a20 20 0 0 1 40 0h-40z" fill="#fff"/></svg>',lt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#005293" d="M0 240h320v240H0z"/><path fill="#ce1126" d="M320 0h320v240H320z"/><path d="M160 80l10 30 30 10-25 20 15 30-30-20-30 20 15-30-25-20 30-10z" fill="#005293"/><path d="M480 320l10 30 30 10-25 20 15 30-30-20-30 20 15-30-25-20 30-10z" fill="#ce1126"/></svg>',ct='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#00966e" d="M0 160h640v160H0z"/><path fill="#d62612" d="M0 320h640v160H0z"/></svg>',ot='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#032ea1" d="M0 0h640v120H0zm0 360h640v120H0z"/><path fill="#e00025" d="M0 120h640v240H0z"/><path fill="#fff" d="M320 160l20 40h-40zM280 200h80v40h-80z"/></svg>',dt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ff0000" d="M0 0h640v160H0z"/><path fill="#ffffff" d="M0 160h640v160H0z"/><path fill="#0000ff" d="M0 320h640v160H0z"/><path d="M280 140h80v80h-80z" fill="#f00"/></svg>',vt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000" d="M0 0h640v140H0z"/><path fill="#fff" d="M0 140h640v20H0zm0 180h640v20H0z"/><path fill="#922" d="M0 160h640v140H0z"/><path fill="#00843d" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="40" fill="#000"/></svg>',pt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#9e3039" d="M0 0h640v192H0zm0 288h640v192H0z"/><path fill="#fff" d="M0 192h640v96H0z"/></svg>',ft='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fdb913" d="M0 0h640v160H0z"/><path fill="#006a44" d="M0 160h640v160H0z"/><path fill="#c1272d" d="M0 320h640v160H0z"/></svg>',ht='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000080" d="M0 0h640v240H0z"/><path fill="#ce1126" d="M0 240h640v240H0z"/><path d="M100 60c10 0 20 20 0 20z" fill="#ffde00"/></svg>',ut='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#d91023" d="M0 0h213.3v480H0zm426.7 0H640v480H426.7z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/></svg>',mt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ce1126" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 240h640v240H0z"/></svg>',gt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#114d4d" d="M0 0h213.3v480H0z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce1126" d="M426.7 0H640v480H426.7z"/><circle cx="320" cy="240" r="40" fill="#8b4513"/></svg>',wt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#e10000" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="100" fill="none" stroke="#ffde00" stroke-width="10"/><path d="M220 240h200M320 140v200" stroke="#ffde00" stroke-width="5"/></svg>',yt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#0038b8" d="M0 60h640v70H0zm0 290h640v70H0z"/><path d="M320 150l40 120-100-80h120l-100 80 40-120z" fill="none" stroke="#0038b8" stroke-width="8"/></svg>',bt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="red" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 240h640v240H0z"/></svg>',xt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#007a3d" d="M0 320h640v160H0z"/><path fill="#ce1126" d="M0 0l320 240L0 480z"/><path fill="#fff" d="M100 240l10-25 25 10-15 20 15 20-25-10-10 25-10-25-25 10 15-20-15-20 25 10z"/></svg>',_t='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#00247d" d="M0 0h640v480H0z"/><path fill="#fff" d="m75 0 245 180L565 0h75v50L395 240l245 190v50h-75L320 300 75 480H0v-50l245-190L0 50V0z"/><path fill="#C8102E" d="m424 281 216 159v40L365 281zm-208 0-216 160v39l216-159zm0-82L0 39V0l216 160zm208 0L640 40V0L424 160z"/><path fill="#fff" d="M240 0v480h160V0zM0 160v160h640V160z"/><circle cx="480" cy="120" r="10" fill="red" stroke="#fff" stroke-width="2"/></svg>',kt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#cd2a3e" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#436f4d" d="M0 320h640v160H0z"/></svg>',$t='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#d52b1e" d="M0 240h640v240H0z"/><path fill="#0039a6" d="M0 0h240v240H0z"/><path fill="#fff" d="M120 160l15 45 45-15-30 35 30 35-45-15-15 45-15-45-45 15 30-35-30-35 45 15z"/></svg>',zt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#00785e" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="80" fill="#fff" opacity="0.5"/><path d="M320 120l10 30 30 10-25 20 15 30-30-20-30 20 15-30-25-20 30-10z" fill="#ffde00"/></svg>';function C(e){switch(e){case"AU":return me;case"CN":return U;case"VN":return Y;case"HK":return ge;case"US":return we;case"KR":return ye;case"SG":return be;case"AR":return xe;case"AE":return _e;case"EG":return`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" class="flag">
        <rect width="900" height="600" fill="#ce1126"/>
        <rect width="900" height="400" y="200" fill="#fff"/>
        <rect width="900" height="200" y="400" fill="#000"/>
        <path d="M450 300l-15 15h30z" fill="#c09307"/>
      </svg>`;case"IE":return ke;case"EE":return $e;case"AD":return ze;case"AT":return Me;case"BE":return Ce;case"BR":return He;case"CA":return Se;case"DE":return Re;case"FR":return Ae;case"JP":return Le;case"NL":return Ne;case"MY":return Te;case"ZA":return Ve;case"IT":return Fe;case"ES":return Ie;case"GB":return Ke;case"TH":return Ge;case"GR":return Be;case"IL":return yt;case"IN":return Xe;case"ID":return bt;case"JO":return xt;case"NZ":return _t;case"HU":return kt;case"CL":return $t;case"MO":return zt;case"BH":return Ee;case"PL":return Pe;case"DK":return De;case"FI":return Oe;case"SE":return je;case"CH":return Ue;case"NO":return Ye;case"PT":return We;case"CO":return Ze;case"QA":return Qe;case"MT":return qe;case"IS":return Je;case"CY":return et;case"RO":return at;case"LU":return st;case"CZ":return it;case"SK":return nt;case"SI":return rt;case"PA":return lt;case"BG":return ct;case"KH":return ot;case"HR":return dt;case"KE":return vt;case"LV":return pt;case"LT":return ft;case"LI":return ht;case"PE":return ut;case"MC":return mt;case"MX":return gt;case"KG":return wt;case"GE":return tt;default:return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><rect width="640" height="480" fill="#f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="200" fill="#ccc">${e}</text></svg>`}}function f(e,t){return e===t?"screen is-active":"screen"}function E(e,t){return`
    <footer class="bottom-bar">
      <button class="primary-button" type="button" data-target="${t}">${e}</button>
    </footer>
  `}function _(e){const{title:t,centerTitle:a=!1,backTarget:s,iconTarget:n}=e,r=s?`
        <button class="header-left-btn" type="button" data-target="${s}" aria-label="返回上一页">
          ${O}
        </button>
      `:"",l=n?`
        <button class="header-right-btn" type="button" data-target="${n}" aria-label="进入个人中心">
          <span class="icon-help"></span>
        </button>
      `:"";return`
    <header class="top-bar">
      <div class="top-bar__nav">
        <div class="header-col-left">${r}</div>
        <div class="header-col-center">
          <h1 class="header-title">${t}</h1>
        </div>
        <div class="header-col-right">${l}</div>
      </div>
    </header>
  `}function Mt(e){const t=e.countrySearchQuery.trim().toLowerCase();let a=x;const s=t.length>0;s&&(a={},Object.entries(x).forEach(([r,l])=>{const o=l.filter(c=>c.name.toLowerCase().includes(t)||c.englishName.toLowerCase().includes(t)||c.currency.toLowerCase().includes(t)||c.dialCode&&c.dialCode.includes(t));o.length>0&&(a[r]=o)}));const n=r=>`
    <button class="sheet-country-item ${e.selectedCountry?.id===r.id?"is-selected":""}" type="button" data-country-id="${r.id}">
      <div class="sheet-country-flag">${C(r.flagKey)}</div>
      <span class="sheet-country-name">${r.name} ${r.dialCode}</span>
    </button>
  `;return`
    ${s?"":`
      <section class="sheet-section">
        <h4 class="sheet-section-title">热门国家/地区</h4>
        <div class="sheet-country-list">
          ${$.map(n).join("")}
        </div>
      </section>
    `}

    ${Object.entries(a).sort(([r],[l])=>r.localeCompare(l)).map(([r,l])=>`
        <section class="sheet-section" id="sheet-letter-${r}">
          <h4 class="sheet-section-title">${r}</h4>
          <div class="sheet-country-list">
            ${l.map(n).join("")}
          </div>
        </section>
      `).join("")}
  `}function Ct(e){return e.countrySearchQuery.trim().toLowerCase().length>0?"":`
    <aside class="alphabet-index alphabet-index--sheet">
      ${"ABDFGHJKLMNPRSTXYZ".split("").map(s=>`<span data-sheet-letter="${s}">${s}</span>`).join("")}
    </aside>
  `}function Ht(e){return e.showCountrySheet?`
    <div class="country-sheet-overlay" data-close-country-sheet-overlay>
      <div class="country-sheet">
        <div class="country-sheet__header">
          <h3 class="country-sheet__title">请选择国家/地区</h3>
          <button class="country-sheet__close" type="button" data-close-country-sheet-btn aria-label="关闭">
            <span class="close-icon-x"></span>
          </button>
        </div>

        <div class="country-sheet__search">
          <div class="search-bar search-bar--sheet">
            ${D}
            <input type="text" id="country-search-input" placeholder="请输入搜索关键字" value="${e.countrySearchQuery}" />
          </div>
        </div>

        <div class="country-sheet__body">
          ${Mt(e)}
        </div>
        
        <div id="country-sheet-sidebar-container">
          ${Ct(e)}
        </div>
      </div>
    </div>
  `:""}function St(e){if(e.id==="jp")return["个人编号卡 + 在留卡","个人编号卡 (仅适用于日本人)","住民票 + 在留卡"];if(e.id==="gb")return["英国居留卡","中国护照 + 英国签证","英国身份证","英国护照"];if(e.id==="eg")return["埃及国家身份证","埃及护照","埃及驾照","中国护照 + 埃及签证"];const t=["ie","ee","ad","at","be","bg","dk","de","fr","fi","nl","cz","hr","lv","lt","lu","mt","mc","pt","ro","sk","si","es","se","gr","it","cy","pl"];return e.currency==="EUR"||t.includes(e.id)?["欧洲居留卡","欧洲身份证","中国护照 + 欧洲签证","欧洲护照"]:["中国护照",`${e.name}护照`,`${e.name}驾照`,`${e.name} Photo Card`]}function Rt(e){const t=e.selectedCountry||$[0],a=St(t);return`
    <section class="${f(e.view,"id-prep")}" data-view="id-prep">
      <div class="prep-header">
        <div class="header-col-left">
          <button class="header-left-btn" type="button" data-target="home" aria-label="返回">
            ${j}
          </button>
        </div>
      </div>

      <div class="screen__body screen__body--prep">
        <div class="prep-hero">
          <div class="shield-container">
            <div class="wechat-shield">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
          </div>
          <h2 class="prep-title">实名认证</h2>
          <p class="prep-subtitle">接下来可以进行实名认证，开通汇款功能，请提前准备好以下材料，便于您快速认证</p>
        </div>

        <div class="prep-content">
          <button class="country-picker-card" type="button" data-open-country-sheet>
            <div class="country-picker-info">
              <div class="country-picker-flag">${C(t.flagKey)}</div>
              <span class="country-picker-name">${t.name}</span>
            </div>
            <span class="arrow-down-icon"></span>
          </button>

          <div class="materials-card">
            <h3 class="materials-title">需要准备的材料</h3>
            
            <div class="material-item">
              <div class="material-icon material-icon--id">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#07c160" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M7 8h10M7 12h10M7 16h4"></path></svg>
              </div>
              <div class="material-text">
                <div class="material-label">
                  个人证件 <span class="material-caption">(仅需一类证件即可)</span>
                </div>
                <ul class="material-list">
                  ${a.map(s=>`<li>${s}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>

          <div class="prep-notice">
            说明：请确保证件在有效期内，照片清晰完整、无遮挡，证件照片请勿提供扫描件
          </div>
        </div>
      </div>

      <footer class="bottom-bar bottom-bar--prep">
        <button class="primary-button" type="button" data-target="upload-id">资料已备好，开通汇款</button>
      </footer>
    </section>
  `}function L(e){switch(e){case"platform-panda":return`
        <div style="background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
          <div style="font-size: 20px;">🐼</div>
          <div style="font-size: 8px; font-weight: 800; color: #07c160; margin-top: -2px;">REMIT</div>
        </div>
      `;case"platform-wise":return`<div style="background: #9fe219; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #37513e; font-size: 24px; font-weight: 900;">${At}</div>`;case"platform-koula":return'<div style="background: #e65615; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px;">🐨</div>';case"platform-lemfi":return`
        <div style="background: #eef7f2; border: 1px solid #73ba93; width: 100%; height: 100%; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #73ba93; font-weight: 800; font-size: 10px;">LEMFi</div>
      `;case"platform-wu":return'<div style="background: #000; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #ffda00; font-weight: 900; font-size: 20px; border-radius: 6px;">W</div>';case"platform-remitly":return'<div style="background: #2b4291; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; border-radius: 50%;">🤝</div>';default:return"🏦"}}const At=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 3L6 14H11L9.5 21L18 10H13L14.5 3Z" fill="currentColor"/>
</svg>
`;function I(e,t){const a=R(e,t);return{amount:a.amount,coupon:a.coupon,currency:t.selectedCountry?.currency||"AUD",fee:a.fee,originalFee:e.feeOriginalRaw,rate:a.rate,total:a.receiveAmount}}function Lt(e){return e.skipContactSelection&&e.selectedRecipient?'data-target="confirm-recipient" data-confirm-recipient-back-target="platforms"':'data-target="select-contact"'}function Nt(e,t){const{amount:a,coupon:s,currency:n,fee:r,originalFee:l,rate:o,total:c}=I(e,t),h=u=>u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" "+n,d=u=>u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" CNY",p=u=>u.toFixed(4);return`
    <article class="platform-card platform-card--recommended">
      <div class="platform-card__header">
        <div class="platform-brand">
          <div class="platform-logo-img">
            ${L(e.id)}
          </div>
          <div class="platform-meta">
            <h3 class="platform-name">${e.name}</h3>
            <div class="platform-tags-row">
              ${(e.tags||[]).map(u=>`<span class="premium-tag">${u.text}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>

      <div class="metrics-grid">
         <div class="metric-block">
            <span class="metric-label">实收</span>
            <div class="metric-value amount">${d(c)}</div>
         </div>
         <div class="metric-block align-right">
            <span class="metric-label">平均用时</span>
            <div class="metric-value speed">
               <span class="main">${e.averageTime||"--"}</span>
            </div>
         </div>
      </div>

      <button class="go-btn go-btn--primary platform-card__cta" type="button" ${Lt(t)} data-platform-id="${e.id}">
        立即汇款
      </button>

      <div class="luxury-calc-container">
        <label class="luxury-calc-label">实时算费明细</label>

        <div class="luxury-receipt">
          <div class="receipt-row">
            <div class="receipt-body">
              <span class="label">汇款额</span>
              <span class="value">${h(a)}</span>
            </div>
          </div>

          <div class="receipt-row">
            <div class="receipt-body">
              <span class="label">服务费</span>
              <div class="value-group">
                <span class="value ${r===0?"text-green":""}">${r===0?"0.00 "+n:h(r)}</span>
                ${l?`<span class="strike-value">${h(l)}</span>`:""}
              </div>
            </div>
          </div>

          <div class="receipt-row highlight">
            <div class="receipt-body">
              <span class="label">当前汇率 (1 ${n})</span>
              <span class="value text-blue">${p(o)}</span>
            </div>
          </div>

          ${s>0?`
          <div class="receipt-row benefit">
            <div class="receipt-body">
              <span class="label">汇款专属优惠</span>
              <span class="value text-red">+${d(s)}</span>
            </div>
          </div>
          `:""}

          <div class="receipt-footer">
            <div class="receipt-body">
              <span class="label-bold">实收</span>
              <span class="value-total">${d(c)}</span>
            </div>
          </div>

          <div class="selected-provider-row">
            <span class="selected-provider-row__label">服务商</span>
            <div class="selected-provider-row__value">
              <span class="selected-provider-row__name">${e.name}</span>
              <div class="selected-provider-row__logo">
                ${L(e.id)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `}function Gt(e,t){const{total:a}=I(e,t),s=n=>n.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})+" CNY";return`
    <article class="platform-list-item" data-select-platform-id="${e.id}">
      <div class="pli-left">
        <div class="pli-logo">${L(e.id)}</div>
        <div class="pli-info">
          <div class="pli-name">${e.name}</div>
          <div class="pli-tags">
            ${(e.tags||[]).slice(0,1).map(n=>`<span class="mini-tag">${n.text}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="pli-right">
        <div class="pli-amount">${s(a)}</div>
        <div class="pli-time">${e.averageTime||"--"}</div>
      </div>
    </article>
  `}function Bt(e){return e.historyRecords[0]}function W(e){return e.historyRecords.find(t=>t.id===e.selectedRecordId)||Bt(e)}function w(e){return e.statusCode==="completed"||e.status.includes("完成")}function k(e){return e.statusCode==="cancelled"||e.status.includes("取消")}function Ft(e){const t=e.recipientId?G.find(n=>n.id===e.recipientId):void 0,a=e.recipientName||t?.name||e.recipient||"联系人";return{avatarText:e.recipientAvatarText||t?.avatarText||a.slice(0,1)||"?",displayName:a}}function Z(e,t="",a=e.status){let s="is-pending";return w(e)?s="is-completed":k(e)&&(s="is-cancelled"),`
    <span class="order-status-text ${s} ${t}">
      ${a}
    </span>
  `}function Q(e){const[t]=e.datetime.split(" ");return`
    <button class="current-order-card" type="button" data-target="order-details" data-record-id="${e.id}">
      <div class="coc-left">
        <div class="order-card-name">${e.recipient}</div>
        <div class="order-meta-row">
          <span class="order-platform">${e.platform}</span>
          <span class="order-date">${t}</span>
        </div>
      </div>
      <div class="coc-right">
        <div class="order-amount">${e.amount}</div>
        ${Z(e,"order-status-text--card",e.status)}
      </div>
    </button>
  `}function It(e){return`
    <button class="order-management-card" type="button" data-target="order-details" data-record-id="${e.id}">
      <div class="order-management-card__main">
        <div class="order-management-card__top">
          <div class="order-card-name">${e.recipient}</div>
          ${Z(e,"order-management-card__status",e.status)}
        </div>
        <div class="order-meta-row order-management-card__meta">
          <span class="order-platform">${e.platform}</span>
          <span class="order-date">${e.datetime}</span>
        </div>
        <div class="order-management-card__bottom">
          <div class="order-amount">${e.amount}</div>
          <div class="order-management-card__remark">订单号 ${e.remark}</div>
        </div>
      </div>
    </button>
  `}function Kt(e){const t=new Set;return e.historyRecords.filter(a=>!a.recipientId||t.has(a.recipientId)?!1:(t.add(a.recipientId),!0))}function Tt(e){return e?e.name==="阿拉伯联合酋长国"?"阿联酋":e.name.replace(/^中国/,""):"全球"}function Vt(e){return{AUD:"A$12",USD:"$12",CAD:"C$12",NZD:"NZ$12",SGD:"S$12",HKD:"HK$88",MOP:"MOP88",GBP:"£8",EUR:"€8",JPY:"¥1,200",KRW:"₩10,000",MYR:"RM35",THB:"฿300",AED:"AED30",VND:"₫200,000",PHP:"₱150",PLN:"zł35",CHF:"CHF8",INR:"₹600"}[e||""]||`${e||"当地币"}10`}function Et(e){const t=e.historyRecords.filter(c=>!w(c)&&!k(c)),a=e.historyRecords.filter(c=>w(c)||k(c)).slice(0,1),s=t.length?t:a,n=t.length?"当前订单":a.length?"最近订单":"当前订单",r=Tt(e.selectedCountry),l=Vt(e.selectedCountry?.currency),o=Kt(e).slice(0,8);return`
    <section class="${f(e.view,"home")}" data-view="home">
      <div class="screen__body screen__body--home">
        <!-- Hero Section -->
        <section class="hero-section">
          <nav class="wechat-nav">
            <div class="header-col-left"></div>

            <div class="header-col-center">
              <div class="nav-center-text">
                <span>跨境汇款</span>
                <span>微汇款</span>
              </div>
            </div>

            <div class="header-col-right"></div>
          </nav>

          <div class="hero-headlines">
            <h1 class="hero-title">便捷汇款，快速到账</h1>
            <p class="hero-desc">支持全球60+国家及地区汇至中国</p>
          </div>
        </section>

        <!-- Transfer Panel (Main Card) -->
        <section class="panel-transfer-main">
          <div id="amount-field-underline" class="transfer-field transfer-field--highlight ${e.showAmountWarning?"is-error":e.isAmountFieldFocused?"is-focused":""}">
            <div class="field-header">
              <span>汇出地 | 币种</span>
              <span>汇出金额</span>
            </div>
            <div class="field-input-row field-input-row--no-border">
            <div class="country-selector" data-target="select-country">
                ${e.selectedCountry?C(e.selectedCountry.flagKey):Y}
                <span>${e.selectedCountry?`${e.selectedCountry.name} | ${e.selectedCountry.currency}`:`${y.fromRegion} | ${y.fromCurrency}`} </span>
              </div>

              <div class="amount-display-container">
                <input 
                  type="text" 
                  id="transfer-amount-input" 
                  class="amount-display-input" 
                  value="${e.isAmountFieldFocused?e.rawAmountInput:e.amount>0?e.amount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):""}" 
                  placeholder="请输入"
                />
              </div>
            </div>
          </div>
          
          <div id="amount-validation-note" class="validation-note ${e.showAmountWarning?"visible":""}">
            单笔汇款的到账金额不低于50CNY
          </div>

          <div class="transfer-field" style="margin-top: 24px;">
            <div class="field-header">
              <span>收款地 | 币种</span>
              <span>预估可收到</span>
            </div>
            <div class="field-input-row">
              <div class="country-selector">
                ${U}
                <span>${y.toRegion} | ${y.toCurrency}</span>
              </div>
              <div id="received-amount-display" class="amount-display received ${e.isRateLoading&&!e.exchangeRate?"is-loading":""}">
                ${e.isRateLoading&&!e.exchangeRate&&!e.ratesCache[e.selectedCountry?.currency||y.fromCurrency]?"...":(()=>{const c=e.exchangeRate||e.ratesCache[e.selectedCountry?.currency||y.fromCurrency]||2e-4;return(e.amount*c).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})})()}
              </div>
            </div>
          </div>

          <div class="start-btn-container">
            <div class="start-btn-wrap">
              <button class="transfer-start-btn" type="button" data-target="authorize">
                开始汇款
              </button>
            </div>
          </div>
        </section>

        <section class="current-order-section">
          <div class="home-section-header">
            <h3 class="home-section-title">${n}</h3>
          </div>
          ${s.length?s.map(Q).join(""):'<div class="home-section-empty">暂无</div>'}
        </section>

        <section class="frequent-contacts-section">
          <div class="home-section-header">
            <h3 class="home-section-title">常用联系人</h3>
          </div>
          ${o.length?`
            <div class="frequent-contacts-scroll">
              <div class="frequent-contacts-list">
                ${o.map(c=>{const h=Ft(c);return`
                      <button
                        class="contact-cell"
                        type="button"
                        data-target="platforms"
                        data-recipient-id="${c.recipientId}"
                        data-skip-contact-selection="true"
                      >
                        <div class="contact-avatar-small">${h.avatarText}</div>
                        <div class="contact-name-small">${h.displayName}</div>
                      </button>
                    `}).join("")}
              </div>
            </div>
          `:'<div class="home-section-empty">暂无</div>'}
        </section>

        <button class="promo-banner" type="button" data-target="authorize">
          <div class="promo-banner__content">
            <div class="promo-banner__title">${r}微信汇款优惠</div>
            <div class="promo-banner__meta">
              <span class="promo-banner__tag">微信独享</span>
            </div>
          </div>
          <div class="promo-banner__offer">
            <div class="promo-banner__offer-value">${l}</div>
            <div class="promo-banner__offer-copy">首单减</div>
          </div>
        </button>

        <!-- AI Assistant / FAQ Card -->
        <div class="faq-card-container">
          <div class="faq-card">
            <div class="faq-content">
              <div class="ai-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <span>汇款需要提供哪些信息？</span>
            </div>

            <button class="ask-ai-btn" type="button">问问AI助手</button>
          </div>
        </div>
      </div>
    </section>
  `}function Pt(){return""}function Dt(e){return e.showAuthModal?`
    <div class="auth-overlay">
      <div class="auth-sheet">
        <div class="auth-sheet__header">
          <h3 class="auth-sheet__title">使用前请先同意协议</h3>
          <button class="auth-sheet__close" type="button" data-close-auth aria-label="关闭">
            <span class="close-icon-x"></span>
          </button>
        </div>
        <div class="auth-sheet__body">
          <label class="checkbox-row checkbox-row--compact">
            <span class="checkbox checkbox--small checkbox--checked">
              <span class="checkbox__tick"></span>
            </span>
            <span class="checkbox-row__text checkbox-row__text--small">
              你已阅读并同意
              <span class="text-link">《微汇款服务协议》</span>、
              <span class="text-link">《个人信息使用授权书》</span>，
              <span style="color: #fa5151; display: block; margin-top: 4px;">授权“微汇款”代理填报信息</span>
            </span>
          </label>
          <div class="auth-sheet__footer">
            <button class="primary-button" type="button" data-target="id-prep">立即体验</button>
          </div>
        </div>
      </div>
    </div>
  `:""}function Ot(e){if(!e.showDatePicker)return"";const t=new Date().getFullYear(),a=Array.from({length:110},(r,l)=>(t-l).toString()),s=Array.from({length:12},(r,l)=>(l+1).toString().padStart(2,"0")),n=Array.from({length:31},(r,l)=>(l+1).toString().padStart(2,"0"));return`
    <div class="picker-overlay" data-picker-backdrop>
      <div class="picker-sheet">
        <div class="picker-header">
          <button class="picker-cancel" type="button" data-close-date-picker>取消</button>
          <div class="picker-title">选择出生日期</div>
          <button class="picker-confirm" type="button" data-confirm-date-picker>确定</button>
        </div>
        <div class="picker-body picker-body--date">
          <div class="date-picker-column">
             <div class="date-picker-label">年</div>
             <div class="picker-options-list" id="year-scroll">
                ${a.map(r=>`<div class="picker-item ${r===e.datePickerYear?"is-selected":""}" data-date-year="${r}">${r}</div>`).join("")}
             </div>
          </div>
          <div class="date-picker-column">
             <div class="date-picker-label">月</div>
             <div class="picker-options-list" id="month-scroll">
                ${s.map(r=>`<div class="picker-item ${r===e.datePickerMonth?"is-selected":""}" data-date-month="${r}">${r}</div>`).join("")}
             </div>
          </div>
          <div class="date-picker-column">
             <div class="date-picker-label">日</div>
             <div class="picker-options-list" id="day-scroll">
                ${n.map(r=>`<div class="picker-item ${r===e.datePickerDay?"is-selected":""}" data-date-day="${r}">${r}</div>`).join("")}
             </div>
          </div>
          <div class="picker-highlight-mask"></div>
        </div>
      </div>
    </div>
  `}function jt(e){return!e.showPicker||!e.pickerOptions?"":`
    <div class="picker-overlay" data-picker-backdrop>
      <div class="picker-sheet">
        <div class="picker-header">
          <button class="picker-cancel" type="button" data-close-picker>取消</button>
          <div class="picker-title">${e.pickerTitle||"请选择"}</div>
          <button class="picker-confirm" type="button" data-confirm-picker>确定</button>
        </div>
        <div class="picker-body">
          <div class="picker-options-list">
            ${e.pickerOptions.map(t=>`
              <div class="picker-item ${t===e.pickerValue?"is-selected":""}" data-picker-option="${t}">
                ${t}
              </div>
            `).join("")}
          </div>
          <div class="picker-highlight-mask"></div>
        </div>
      </div>
    </div>
  `}function Ut(e){e.scanResults;const t=(s,n,r,l,o=!0)=>`
    <div class="confirm-row">
      <div class="confirm-row__label-group">
        <div class="confirm-row__label-en">${s}</div>
        <div class="confirm-row__label-zh">${n}</div>
      </div>
      <div class="confirm-row__content">
        <input type="text" class="confirm-row__input" data-field-id="${l}" value="${r}" />
        ${o?`<div class="confirm-row__arrow">${ve}</div>`:""}
      </div>
    </div>
  `,a=(s,n,r,l,o)=>`
    <div class="confirm-row picker-trigger" data-field-id="${l}" data-picker-title="${n}" data-picker-options='${JSON.stringify(o)}'>
      <div class="confirm-row__label-group">
        <div class="confirm-row__label-en">${s}</div>
        <div class="confirm-row__label-zh">${n}</div>
      </div>
      <div class="confirm-row__content">
        <div class="confirm-row__value-text">${r}</div>
        <div class="confirm-row__arrow">${V}</div>
      </div>
    </div>
  `;return`
    <section class="${f(e.view,"confirm")}" data-view="confirm">
      ${_({title:"信息确认",centerTitle:!0,backTarget:e.confirmBackTarget||"upload-id"})}
      <div class="screen__body screen__body--confirm">
        

        <div class="confirm-panel-group">
          <div class="confirm-panel-title">
            <span>汇款人身份信息</span>
            <span class="title-meta-tag">自动识别</span>
          </div>
          <section class="confirm-panel">
            ${t("Last Name","姓",e.scanResults?.lastName||"李","lastName",!1)}
            <div class="divider"></div>
            ${t("First Name","名",e.scanResults?.firstName||"薇","firstName",!1)}
            <div class="divider"></div>
            ${a("Birth Region","出生国家/地区",e.scanResults?.region||"中国","region",["中国","澳大利亚","美国","英国","日本","越南"])}
            <div class="divider"></div>
            ${a("Gender","性别",e.scanResults?.gender||"女","gender",["男","女","其他"])}
            <div class="divider"></div>
            <div class="confirm-row date-picker-trigger" data-current-dob="${e.scanResults?.dob||"1993-10-12"}">
              <div class="confirm-row__label-group">
            <div class="confirm-row__label-en">Birth Date</div>
                <div class="confirm-row__label-zh">出生年月</div>
              </div>
              <div class="confirm-row__content">
                <div class="confirm-row__value-text">${e.scanResults?.dob||"1993-10-12"}</div>
                <div class="confirm-row__arrow">${V}</div>
              </div>
            </div>
            <div class="divider"></div>
            ${a("Source of Income","收入来源",e.scanResults?.sourceOfIncome||"工资","sourceOfIncome",["工资","储蓄","兼职","经营收入"])}
          </section>
        </div>

        <div class="confirm-panel-group">
          <div class="confirm-panel-title">
            <span>居住地信息</span>
            <span class="title-meta-tag">获取当前地址</span>
          </div>
          <section class="confirm-panel">
            ${t("Street & No.","街道地址",e.scanResults?.address||"28 Warrego Way, Birdsville","address",!1)}
            <div class="divider"></div>
            ${t("Post Code","邮编",e.scanResults?.postCode||"4482","postCode",!1)}
            <div class="divider"></div>
            ${t("City/Suburb","城市或区",e.scanResults?.city||"Birdsville, QLD","city",!1)}
          </section>
        </div>

        <p class="confirm-disclaimer">信息仅用于汇款平台合规性验证，我们承诺尊重并保护您的隐私。</p>
      </div>
      ${e.confirmBackTarget==="profile"?E("确认","profile"):E("确认并继续","face-intro")}
    </section>
  `}function Yt(e){const t=e.selectedCountry||$[0],a=e.amount>0?e.amount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"",s=e.isAmountFieldFocused?e.rawAmountInput:a,n=P(M,e),r=F(M,e),l=n.filter(o=>o.id!==r.id);return`
    <section class="${f(e.view,"platforms")}" data-view="platforms">
      <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="${e.hasCompletedOnboarding?"home":"confirm"}" aria-label="返回">
              ${O}
            </button>
          </div>
          <div class="header-col-center">
            <h1 class="header-title">跨境汇款 微汇款</h1>
          </div>
          <div class="header-col-right"></div>
        </div>
      </header>

      <div class="platform-select-header">
        <div class="ps-header-top">
          <span>汇出地 | 币种</span>
          <span>汇出金额</span>
        </div>
        <div class="ps-header-main">
          <div class="ps-country-info">
            ${C(t.flagKey)}
            <span>${t.name} | ${t.currency}</span>
            <span class="chevron-down-mini"></span>
          </div>
          <input
            type="text"
            id="ps-amount-input"
            class="ps-amount-input"
            inputmode="decimal"
            value="${s}"
            placeholder="请输入"
          />
        </div>
      </div>

      <div class="screen__body screen__body--platforms">
        <!-- Sort Toggle -->
        <div class="platform-sort-toggle">
          <button class="sort-btn ${e.platformSort==="cheapest"?"is-active":""}" data-sort="cheapest">
            价格最优
          </button>
          <button class="sort-btn ${e.platformSort==="fastest"?"is-active":""}" data-sort="fastest">
            速度最快
          </button>
        </div>

        <div class="recommended-section">
          ${Nt(r,e)}
        </div>
        
        <div class="other-channels-section">
          <h4 class="other-channels-title">其他渠道</h4>
          <div class="platform-list">
            ${l.map(o=>Gt(o,e)).join("")}
          </div>
        </div>

        <p class="platforms-disclaimer">
          *实际汇率、手续费由汇款机构提供，收款金额以实际为准，信息仅供参考
        </p>
      </div>
    </section>
  `}function Wt(e){const t=M.find(n=>n.id===e.selectedPlatformId),a=W(e),s=[{title:"收款账户名称",value:t?.providerAccountName||a?.providerAccountName||g[0]?.value},{title:"收款账号",value:t?.bankAccount||a?.bankAccount||g[1]?.value},{title:"参考附言",value:a?.remark||g[2]?.value}];return`
    <section class="${f(e.view,"guide")}" data-view="guide" style="background: #f5f5f5;">
      ${_({title:"收款名片",centerTitle:!0,backTarget:"platforms"})}
      
      <div class="screen__body screen__body--guide">

        <div class="receiving-card-wrapper">
          <div class="receiving-card-top">
            <div class="receiving-card-top__title">
              收款指引
            </div>
          </div>

          <div class="grey-info-card">
            <div class="grey-info-card__avatar">${fe}</div>
            <div class="card-section-title" style="font-size: 14px; color: #111; font-weight: 700; margin-bottom: 20px;">收款账户信息</div>
            
            <div class="grey-info-list">
              ${s.map(n=>`
                <div class="grey-info-item">
                  <span class="grey-info-item__label">${n.title}</span>
                  <div class="grey-info-item__value-group">
                    <span class="grey-info-item__value">${n.value}</span>
                    <span class="grey-info-item__icon grey-info-item__icon--copy" data-copy-value="${n.value}">${pe}</span>
                  </div>
                </div>
                <div class="divider divider--dashed"></div>
              `).join("")}

              <div class="grey-info-item">
                <span class="grey-info-item__label">付款方式</span>
                <div class="grey-info-item__value-group">
                  <span class="grey-info-item__value">银行卡转账</span>
                  <span class="grey-info-item__icon">${S}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="guide-tips-footer">
          <h3 class="footer-tips-title">温馨提示</h3>
          <ul class="footer-tips-list">
            <li>请使用您本人名下的银行卡进行转账，确保资金安全。</li>
            <li>请保持转账金额与页面显示的汇出金额完全一致。</li>
            <li>通常在转账完成后 1-3 个工作日内到账。</li>
          </ul>
        </div>
      </div>

      <footer class="bottom-bar bottom-bar--guide">
        <button class="primary-button" type="button" data-target="home">我已完成转账</button>
      </footer>
    </section>
  `}function Zt(e){const t=W(e),a=e.orderDetailsBackTarget||"home";if(!t)return`
      <section class="${f(e.view,"order-details")}" data-view="order-details">
        ${_({title:"订单详情",centerTitle:!0,backTarget:a})}
        <div class="screen__body screen__body--order-details">
          <div class="empty-placeholder-card order-empty-placeholder">暂时还没有订单</div>
        </div>
      </section>
    `;const s=k(t),n=w(t)?3:s?0:2,r=s?"已取消":n===3?"已完成":"处理中",l=[{number:1,title:"创建订单"},{number:2,title:"处理中"},{number:3,title:"已完成"}],o=[{label:"订单状态",value:r},{label:"收款人",value:t.recipient},{label:"汇款人",value:t.sender||"李薇"},{label:"收入来源",value:t.sourceOfFunds||"工资/储蓄储备"},{label:"汇款金额",value:t.transferAmount||"--"},{label:"创建时间",value:t.datetime},{label:"汇款机构",value:t.platform},{label:"汇率预估",value:t.rateDisplay||`1 ${e.selectedCountry?.currency||"AUD"} = ${t.rate} CNY`},{label:"手续费",value:t.fee},{label:"订单编号",value:t.remark},{label:"汇款机构账户名称",value:t.providerAccountName||g[0]?.value},{label:"汇款机构账号",value:t.bankAccount||g[1]?.value}];return`
    <section class="${f(e.view,"order-details")}" data-view="order-details">
      ${_({title:"订单详情",centerTitle:!0,backTarget:a})}

      <div class="screen__body screen__body--order-details">
        <section class="order-hero-details">
          <div class="order-progress-card">
            <div class="summary-amount-row">
              <span class="value">${t.amount}</span>
              <span class="label" style="margin-top: 4px;">汇款到账金额</span>
            </div>

            <div class="order-progress-track">
              ${l.map((c,h)=>{const d=n>c.number?"is-completed":n===c.number?"is-active":"",p=n>c.number?"is-active":"";return`
                    <div class="order-progress-step">
                      <div class="order-progress-marker ${d}">
                        <span class="order-progress-number">${c.number}</span>
                      </div>
                      <div class="order-progress-label ${d}">${c.title}</div>
                    </div>
                    ${h<l.length-1?`<div class="order-progress-line ${p}"></div>`:""}
                  `}).join("")}
            </div>
          </div>

          <div class="order-main-summary order-main-summary--card">
            <div class="order-progress-status ${s?"is-cancelled":""}">${r}</div>
          </div>
        </section>

        <section class="order-detail-card">
          ${o.map((c,h)=>`
              <div class="order-detail-row">
                <span class="label">${c.label}</span>
                <span class="value ${c.label==="订单状态"&&s?"is-cancelled":""}">${c.value}</span>
              </div>
              ${h<o.length-1?'<div class="order-detail-divider"></div>':""}
            `).join("")}
        </section>

        <div class="order-help-row">
          <span>对此订单有疑问</span>
          ${!w(t)&&!k(t)?`
            <span class="divider-line">|</span>
            <span class="cancel-order-btn" data-cancel-order-id="${t.id}">取消订单</span>
          `:""}
        </div>
      </div>
    </section>
  `}function Qt(e){const t=e.historyRecords.filter(l=>!w(l)&&!k(l)),a=e.historyRecords.filter(w),s=[{key:"all",label:"全部"},{key:"processing",label:"进行中"},{key:"completed",label:"已完成"}],n=e.orderManagementFilter==="processing"?t:e.orderManagementFilter==="completed"?a:e.historyRecords;return`
    <section class="${f(e.view,"order-management")}" data-view="order-management">
      ${_({title:"订单管理",centerTitle:!0,backTarget:"profile"})}

      <div class="screen__body screen__body--order-management">
        <section class="order-filter-toggle" aria-label="订单筛选">
          ${s.map(l=>`
                <button
                  class="order-filter-toggle__item ${e.orderManagementFilter===l.key?"is-active":""}"
                  type="button"
                  data-order-filter="${l.key}"
                >
                  ${l.label}
                </button>
              `).join("")}
        </section>

        ${n.length?`
              <section class="order-management-list">
                ${n.map(l=>It(l)).join("")}
              </section>
            `:'<div class="order-management-empty">暂无</div>'}
      </div>
    </section>
  `}function qt(e){const t="ABDFGHJKLMNPRSTXYZ".split(""),a=e.countrySearchQuery.trim().toLowerCase();let s=x,n=a.length>0;return n&&(s={},Object.entries(x).forEach(([r,l])=>{const o=l.filter(c=>c.name.toLowerCase().includes(a)||c.englishName.toLowerCase().includes(a)||c.currency.toLowerCase().includes(a));o.length>0&&(s[r]=o)})),`
    <section class="${f(e.view,"select-country")}" data-view="select-country">
      <header class="top-bar top-bar--white">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="home" aria-label="返回">
              <span class="back-icon-arrow black"></span>
            </button>
          </div>
          <div class="header-col-center">
            <h1 class="header-title header-title--black">跨境汇款 微汇款</h1>
          </div>
          <div class="header-col-right"></div>
        </div>
      </header>

      <div class="screen__body screen__body--white">
        <div class="search-bar-container">
          <div class="search-bar">
            ${D}
            <input type="text" id="country-search-input" placeholder="搜索" value="${e.countrySearchQuery}" />
          </div>
        </div>

        <div class="select-country-content">
          <h2 class="section-title-large">${n?"搜索结果":"选择汇出的国家/地区"}</h2>

          ${n?"":`
          <section class="countries-popular">
            <h3 class="section-subtitle">热门国家及地区</h3>
            <div class="popular-grid">
              ${$.map(r=>`
                <button class="popular-btn" type="button" data-country-id="${r.id}" data-target="home">
                  ${r.name}
                </button>
              `).join("")}
            </div>
          </section>
          `}
          
          <section class="countries-all">
            <h3 class="section-subtitle">${n?"":"全部国家地区 (按照拼音顺序排序)"}</h3>
            
            ${Object.entries(s).map(([r,l])=>`
              <div class="letter-section" id="letter-${r}">
                <div class="letter-heading">${r}</div>
                <div class="country-list">
                  ${l.map(o=>`
                    <button class="country-item-btn" type="button" data-country-id="${o.id}" data-target="home">
                      <div class="country-item-flag">${C(o.flagKey)}</div>
                      <div class="country-item-info">
                        <div class="country-item-label">
                          <span class="name-zh">${o.name}</span>
                          <span class="divider">|</span>
                          <span class="currency-code">${o.currency}</span>
                        </div>
                        <div class="name-en">${o.englishName}</div>
                      </div>
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
              
            ${n&&Object.keys(s).length===0?'<div class="no-results">未找到相关国家或地区</div>':""}
          </section>
        </div>

        ${n?"":`<aside class="alphabet-index">${t.map(r=>`<span data-letter="${r}">${r}</span>`).join("")}</aside>`}
      </div>
    </section>
  `}function Jt(e){return`
    <section class="${f(e.view,"upload-id")} screen--dark" data-view="upload-id">
      <header class="top-bar top-bar--dark no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="id-prep" aria-label="返回">
              ${j}
            </button>
          </div>
          <div class="header-col-center">
            <h1 class="header-title header-title--white">中国护照</h1>
          </div>
          <div class="header-col-right"></div>
        </div>
      </header>

      <div class="screen__body screen__body--upload">
        <div class="passport-preview">
          <img src="./passport.png" alt="护照示例" />
          <div class="preview-label">护照示例</div>
          ${e.isScanning?`
              <div class="scan-overlay">
                <div class="scan-line"></div>
                <div class="scan-text">正在识别中...</div>
              </div>
            `:""}
        </div>

        <div class="capture-standards">
          <div class="standard-item">
            <div class="standard-icon standard-icon--ok">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="standard-label"><span class="status-marker status-marker--ok">✓</span> 标准拍摄</div>
          </div>
          <div class="standard-item">
            <div class="standard-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>
            </div>
            <div class="standard-label"><span class="status-marker status-marker--error">×</span> 边框缺失</div>
          </div>
          <div class="standard-item">
            <div class="standard-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <circle cx="12" cy="12" r="7" opacity="0.6"></circle>
                  <circle cx="12" cy="12" r="10" opacity="0.3"></circle>
               </svg>
            </div>
            <div class="standard-label"><span class="status-marker status-marker--error">×</span> 照片模糊</div>
          </div>
          <div class="standard-item">
            <div class="standard-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <div class="standard-label"><span class="status-marker status-marker--error">×</span> 闪光强烈</div>
          </div>
        </div>

        <div class="capture-footer">
          <input type="file" id="id-photo-input" accept="image/*" style="display: none;" />
          <div class="capture-controls">
            <button class="gallery-btn" type="button" data-action="open-gallery">
              <div class="gallery-icon-box">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" ry="3"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                 </svg>
              </div>
              <div class="gallery-label">相册</div>
            </button>

            <div class="capture-btn-group">
              <button class="capture-start-btn" type="button" data-target="start-scan">
                <div class="capture-inner-circle">
                   <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                     <circle cx="12" cy="13" r="4"></circle>
                   </svg>
                </div>
              </button>
              <div class="capture-btn-label">开始拍摄</div>
            </div>
            
            <div class="controls-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  `}function Xt(e){const t=re.find(s=>s.label==="累计节省金额"),a=e.historyRecords;return`
    <section class="${f(e.view,"profile")}" data-view="profile">
      ${_({title:"个人中心",centerTitle:!0})}
      
      <div class="screen__body screen__body--profile">
        <!-- Hero Section -->
        <section class="minimal-profile-hero">
          <div class="minimal-avatar">李</div>
          <div class="minimal-details">
            <h2 class="minimal-name">李薇</h2>
            <p class="minimal-status">已完成实名认证</p>
          </div>
        </section>

        <!-- Focused Savings Card -->
        ${t?`
          <div class="savings-card-large">
            <div class="savings-card-label">${t.label}</div>
            <div class="savings-card-main">
              <span class="currency-symbol">¥</span>
              <span class="value">${t.value}</span>
            </div>
            <div class="savings-card-footer">
              累计通过微汇款智能优选路径获取
            </div>
          </div>
        `:""}

        <!-- Action Panel -->
        <section class="action-panel-minimal">
          <button class="action-row" type="button" data-target="confirm" data-confirm-back-target="profile">
            <div class="action-row__label">个人信息</div>
            <div class="action-row__right">
              ${S}
            </div>
          </button>
          <div class="minimal-divider"></div>
          <button class="action-row is-disabled" type="button">
            <div class="action-row__label">管理证件信息</div>
            <div class="action-row__right">
              <span class="action-row__status">已上传</span>
              ${S}
            </div>
          </button>
          <div class="minimal-divider"></div>
          <button class="action-row" type="button">
            <div class="action-row__label">安全声明</div>
            <div class="action-row__right">
              ${S}
            </div>
          </button>
        </section>

        <!-- History Preview (Simpler) -->
        <section class="history-preview-minimal">
          <div class="section-title-row">
            <div class="section-title-small">我的订单</div>
            <button class="section-link-btn" type="button" data-target="order-management">查看更多</button>
          </div>
          ${a.length?`
            <div class="profile-order-list">
              ${a.map(s=>Q(s)).join("")}
            </div>
          `:'<div class="home-section-empty">暂无</div>'}
        </section>

        <div class="profile-footer-links">
          <button class="profile-footer-links__item" type="button">隐私协议</button>
          <span class="profile-footer-links__divider">|</span>
          <button class="profile-footer-links__item" type="button">客服答疑</button>
        </div>
      </div>
    </section>
  `}function ea(e){const t=e.scanResults?.lastName?`${e.scanResults.lastName}${e.scanResults.firstName}`:"李薇";return`
    <section class="${f(e.view,"face-intro")}" data-view="face-intro">
      <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="confirm" aria-label="关闭">
              <span class="close-icon-x black"></span>
            </button>
          </div>
        </div>
      </header>

      <div class="screen__body screen__body--face-intro">
        <div class="face-intro__top">
          <div class="app-info">
            <div class="app-logo-box">
              <img src="./微汇款_logo.png" alt="logo" class="app-logo-img" />
            </div>
            <span class="app-name">微汇款 申请使用</span>
          </div>

          <h2 class="face-intro__title">
            人脸识别功能验证你的身份信息，请确保为 ${t} 本人操作
          </h2>
        </div>

        <div class="face-intro__spacer"></div>

        <div class="face-intro__footer">
          <label class="checkbox-row checkbox-row--wrap">
            <button class="custom-checkbox ${e.faceAgreementChecked?"custom-checkbox--checked":""}" type="button" id="toggle-face-agreement">
            </button>
            <span class="checkbox-row__text checkbox-row__text--gray">
              您知悉并同意服务提供者授权腾讯按照《个人信息处理规则》实施个人信息处理并用于身份核验，详见<span class="text-link">《个人信息处理规则》</span>
            </span>
          </label>
          <button class="primary-button primary-button--face ${e.faceAgreementChecked?"is-active":""}" type="button" ${e.faceAgreementChecked?'data-target="face-scan"':""} id="face-next-btn">下一步</button>
          <div class="help-center-link">
            <button type="button" class="text-btn">帮助中心</button>
          </div>
        </div>
      </div>
    </section>
  `}function ta(e){return`
    <section class="${f(e.view,"face-scan")}" data-view="face-scan">
      <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="face-intro" aria-label="关闭">
              <span class="close-icon-x black"></span>
            </button>
          </div>
        </div>
      </header>

      <div class="screen__body screen__body--face-scan">
        <div class="scan-instructions">请移动人脸到框内</div>
        
        <div class="face-circle-container">
           <div class="face-video-placeholder">
             <!-- Simulated camera feed with a blurred image or just a color -->
             <div class="face-camera-preview"></div>
             <div class="face-overlay-guide"></div>
           </div>
        </div>
      </div>
    </section>
  `}function aa(e){return`
    <section class="${f(e.view,"face-waiting")}" data-view="face-waiting">
       <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="face-intro" aria-label="关闭">
              <span class="close-icon-x black"></span>
            </button>
          </div>
        </div>
      </header>

      <div class="screen__body screen__body--face-scan">
        <div class="scan-instructions">请稍候</div>
        
        <div class="face-circle-container">
           <div class="face-video-placeholder is-waiting">
             <div class="face-camera-preview is-blurred"></div>
             <div class="loading-spinner-box">
                <div class="spinner-circle"></div>
             </div>
           </div>
        </div>
      </div>
    </section>
  `}function sa(e){return`
    <section class="${f(e.view,"face-success")}" data-view="face-success">
       <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left"></div>
        </div>
      </header>

      <div class="screen__body screen__body--face-scan">
        <div class="face-success-icon-box" style="margin-top: 60px; text-align: center;">
           
    <div style="width: 72px; height: 72px; background-color: #07c160; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  
        </div>
        <div class="scan-instructions" style="margin-top: 32px;">验证成功</div>
      </div>
    </section>
  `}function ia(e){return`
    <section class="${f(e.view,"select-contact")} select-contact-screen" data-view="select-contact">
      <header class="contact-header">
        <div class="contact-header-left">
          <button type="button" data-target="platforms" class="contact-cancel-btn">取消</button>
        </div>
        <div class="contact-header-center">选择联系人</div>
        <div class="contact-header-right"></div>
      </header>

      <div class="contact-search-container">
        <div class="contact-search-bar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;opacity:0.6;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span class="search-placeholder">搜索</span>
        </div>
      </div>

      <div class="contact-scroll-area">
        <div class="contact-group">
          <div class="contact-item" data-target="confirm-recipient" data-recipient-id="self-balance">
            <div class="contact-avatar contact-avatar--balance">
               <svg viewBox="0 0 100 100" style="width:24px;height:24px;">
                  <circle cx="50" cy="50" r="45" fill="#fbc30c" />
                  <circle cx="50" cy="50" r="38" stroke="#e0ae04" stroke-width="6" fill="none" />
                  <text x="50" y="65" text-anchor="middle" font-size="45" font-weight="900" fill="#cc9f02" font-family="Arial, sans-serif">¥</text>
               </svg>
            </div>
            <div class="contact-info">
              <div class="contact-name">零钱</div>
            </div>
          </div>
          <div class="contact-item" data-target="confirm-recipient" data-recipient-id="self-card">
            <div class="contact-avatar contact-avatar--card">
               <svg viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:24px;height:24px;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <div class="contact-info">
              <div class="contact-name">银行卡</div>
            </div>
          </div>
        </div>

        <div class="contact-group">
          <div class="contact-item contact-item--arrow">
            <div class="contact-info">
              <div class="contact-name">打开通讯录</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;opacity:0.3;"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        <div class="contact-divider-label">最近聊天</div>

        <div class="contact-group overflow-visible">
          ${G.map(s=>`
            <div class="contact-item" data-target="confirm-recipient" data-recipient-id="${s.id}">
              <div class="contact-avatar contact-avatar--mini">
                <span class="contact-avatar-text">${s.avatarText}</span>
              </div>
              <div class="contact-info">
                <div class="contact-name">${s.name}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function na(e){const t=e.selectedRecipient||{name:"未知联系人",avatarText:"?",realName:"",wechatId:""},a=e.selectedCountry?.currency||"AUD",s=F(M,e),{fee:n,rate:r,total:l}=I(s,e),o=l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),c=e.confirmRecipientBackTarget||"select-contact";return`
    <section class="${f(e.view,"confirm-recipient")} confirm-recipient-screen" data-view="confirm-recipient">
      <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn back-button" type="button" data-target="${c}" aria-label="返回">
              <span class="back-icon-arrow"></span>
            </button>
          </div>
          ${q(!0)}
        </div>
      </header>

      <div class="screen__body screen__body--confirm-recipient">
        <div class="confirmation-layout">
          <div class="recipient-header-row">
            <div class="recipient-header-text">
               <div class="recipient-row-top">
                 <span class="label">汇款给</span>
                 <span class="name">${t.name} ${t.realName||""}</span>
               </div>
               <div class="recipient-row-sub">
                 微信号: ${t.wechatId||"---"}
               </div>
            </div>
            <div class="recipient-header-avatar">
              ${t.avatarText}
            </div>
          </div>

          <div class="amount-entry-block">
            <div class="amount-label">汇款金额</div>
            <div class="amount-field-luxury">
              <span class="currency-symbol">¥</span>
              <span class="amount-value">${o}</span>
            </div>
            
            <div class="payment-detail-list">
              <div class="payment-detail-row">
                <span class="detail-label">本次汇出金额</span>
                <span class="detail-value">${e.amount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})} ${a}</span>
              </div>
              <div class="payment-detail-row">
                <span class="detail-label">平台服务费</span>
                <span class="detail-value">${n===0?"免手续费":n.toFixed(2)+" "+a}</span>
              </div>
              <div class="payment-detail-row">
                <span class="detail-label">当前汇率</span>
                <span class="detail-value">1 ${a} ≈ ${r.toFixed(4)} CNY</span>
              </div>
              <div class="payment-detail-row">
                <span class="detail-label">服务商</span>
                <span class="detail-value">${s.name}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="direct-payment-entry">
          <div class="payment-create-order-tip">该步骤仅创建汇款订单，暂不涉及资金汇出</div>
          <div class="payment-modal__header payment-modal__header--direct">
            <span class="payment-modal__title">请输入支付密码</span>
          </div>
          
          <div class="payment-modal__body">
            <div class="passcode-discrete-container">
              ${Array(6).fill(0).map((h,d)=>`<div class="passcode-box ${(e.paymentPassword||"").length>d?"is-filled":""}"></div>`).join("")}
            </div>
          </div>

          <div class="payment-keypad-design">
            <button class="key-cell" type="button" data-key="1">1</button>
            <button class="key-cell" type="button" data-key="2">2</button>
            <button class="key-cell" type="button" data-key="3">3</button>
            <button class="key-cell" type="button" data-key="4">4</button>
            <button class="key-cell" type="button" data-key="5">5</button>
            <button class="key-cell" type="button" data-key="6">6</button>
            <button class="key-cell" type="button" data-key="7">7</button>
            <button class="key-cell" type="button" data-key="8">8</button>
            <button class="key-cell" type="button" data-key="9">9</button>
            <div class="key-cell key-cell--gray"></div>
            <button class="key-cell" type="button" data-key="0">0</button>
            <button class="key-cell key-cell--gray key-cell--del" type="button" data-key="backspace">
              <div class="del-icon-box">
                <svg viewBox="0 0 24 24" style="width:34px;height:22px;"><path d="M21 4H8l-7 8 7 8h13c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="#111"/><line x1="17" y1="9" x2="11" y2="15" stroke="white" stroke-width="2.2" stroke-linecap="round"/><line x1="11" y1="9" x2="17" y2="15" stroke="white" stroke-width="2.2" stroke-linecap="round"/></svg>
              </div>
            </button>
          </div>
          <div class="keypad-safe-area"></div>
        </div>
      </div>
    </section>
  `}function ra(e){return`
    <section class="${f(e.view,"create-success")}" data-view="create-success">
       <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left"></div>
        </div>
      </header>

      <div class="screen__body screen__body--face-scan">
        <div class="face-success-icon-box" style="margin-top: 60px; text-align: center;">
           
    <div style="width: 72px; height: 72px; background-color: #07c160; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  
        </div>
        <div class="scan-instructions" style="margin-top: 32px;">创建成功</div>
      </div>
    </section>
  `}function la(e){return e.showOrderLoading?`
    <div class="hud-overlay">
      <div class="hud-box">
        <div class="hud-spinner"></div>
        <div class="hud-text">创建订单中</div>
      </div>
    </div>
  `:""}function ca(e){return e.showAccountLoading?`
    <div class="hud-overlay">
      <div class="hud-box">
        <div class="hud-spinner"></div>
        <div class="hud-text">创建账户中</div>
      </div>
    </div>
  `:""}function oa(e){return e.showQuoteLoading?`
    <div class="hud-overlay">
      <div class="hud-box">
        <div class="hud-spinner"></div>
        <div class="hud-text">获取报价中</div>
      </div>
    </div>
  `:""}function q(e=!1){return`
    <div class="wechat-capsule-menu ${e?"wechat-capsule-menu--dark":""}">
      <div class="capsule-segment">
        <div class="capsule-more-icon">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="capsule-divider"></div>
      <div class="capsule-segment">
        <div class="capsule-min-icon"></div>
      </div>
      <div class="capsule-divider"></div>
      <div class="capsule-segment">
        <div class="capsule-close-icon"></div>
      </div>
    </div>
  `}function da(e){return["home","profile"].includes(e.view)?`
    <nav class="tab-bar">
      ${[{id:"home",label:"首页",icon:he},{id:"profile",label:"个人",icon:ue}].map(s=>`
        <button class="tab-item ${e.view===s.id?"is-active":""}" type="button" data-target="${s.id}">
          <div class="tab-icon">${s.icon}</div>
          <span class="tab-label">${s.label}</span>
        </button>
      `).join("")}
    </nav>
  `:""}function va(e){const t=e.view==="home";return e.view,`
    <main class="app-shell" style="color: ${t?"#ffffff":"#111111"}">
      <div class="phone-shell" style="background: #f5f5f5">
        ${q(!["home","upload-id","confirm","face-scan","face-waiting","face-success","face-intro"].includes(e.view))}
        ${Et(e)}
        ${Pt()}
        ${Ut(e)}
        ${Yt(e)}
        ${Wt(e)}
        ${Qt(e)}
        ${Zt(e)}
        ${Xt(e)}
        ${qt(e)}
        ${Jt(e)}
        ${Rt(e)}
        ${ea(e)}
        ${ta(e)}
        ${aa(e)}
        ${sa(e)}
        ${ia(e)}
        ${na(e)}
        ${ra(e)}
        
        <!-- Tab Bar -->
        ${da(e)}

        <!-- Bottom Sheet Modals -->
        ${Dt(e)}
        ${Ht(e)}
        ${jt(e)}
        ${Ot(e)}
        ${la(e)}
        ${ca(e)}
        ${oa(e)}
      </div>
    </main>
  `}const J=document.querySelector("#app");if(!J)throw new Error("App root #app was not found.");const X=J,pa=new Set(ne),z=new Map;function H(){const e=window.visualViewport?.height||window.innerHeight;document.documentElement.style.setProperty("--app-height",`${e}px`)}H();window.addEventListener("resize",H);window.addEventListener("orientationchange",H);window.visualViewport?.addEventListener("resize",H);window.visualViewport?.addEventListener("scroll",H);const i={view:te(),expandedRecordIds:new Set(ie),showAuthModal:!1,isAuthorized:localStorage.getItem("wechat_auth_completed")==="true",countrySearchQuery:"",isRateLoading:!1,amount:1e3,showAmountWarning:!1,isAmountFieldFocused:!1,rawAmountInput:"1000",selectedCountry:Object.values(x).flat().find(e=>e.id==="au")||$[0],showCountrySheet:!1,ratesCache:{...N},faceAgreementChecked:!0,platformSort:"cheapest",orderManagementFilter:"all",paymentPassword:"",showPasswordInput:!1,showOrderLoading:!1,historyRecords:[...T],selectedRecordId:T[0]?.id,hasCompletedOnboarding:localStorage.getItem("wechat_onboarding_completed")==="true"};function fa(e){const t=e.toUpperCase(),a=i.ratesCache[t]||N[t]||1,s=Math.ceil(55/a);return s<=1e3?1e3:Math.ceil(s/1e3)*1e3}function ha(e){const t=e.replace(/[^0-9.]/g,""),[a="",...s]=t.split(".");return s.length===0?a:`${a}.${s.join("")}`}function b(e){return e.toString().padStart(2,"0")}function ua(e){return`${e.getFullYear()}-${b(e.getMonth()+1)}-${b(e.getDate())} ${b(e.getHours())}:${b(e.getMinutes())}`}function ee(e,t){const a=i.historyRecords.findIndex(s=>s.id===e);if(a>=0){const s=[...i.historyRecords];s[a]=t(s[a]),i.historyRecords=s}}function ma(e){const t=i.selectedCountry?.currency||"AUD",a=F(M,i),s=R(a,i),n=`WX-HK-${e.getFullYear()}${b(e.getMonth()+1)}${b(e.getDate())}-${Math.floor(Math.random()*900)+100}`,r=i.selectedRecipient?.name||"未选择联系人",l=i.selectedRecipient?.realName?` ${i.selectedRecipient.realName}`:"";return{id:`record-${e.getTime()}`,datetime:ua(e),platform:a.name,status:"处理中",statusCode:"processing",amount:`¥ ${s.receiveAmount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,amountValue:s.receiveAmount,amountCurrency:"CNY",rate:s.rate.toFixed(4),rateDisplay:`1 ${t} = ${s.rate.toFixed(4)} CNY`,fee:`¥ ${s.fee.toFixed(2)}`,feeValue:s.fee,recipient:`${r}${l}`,recipientName:r,recipientAvatarText:i.selectedRecipient?.avatarText,recipientId:i.selectedRecipient?.id,sender:i.scanResults?.firstName?`${i.scanResults.lastName}${i.scanResults.firstName}`:"李薇",account:i.selectedRecipient?.wechatId||"---",remark:n,feeDetail:`平台服务费 ¥${s.fee.toFixed(2)} / 汇率差额 ¥0.00`,sourceOfFunds:i.scanResults?.sourceOfIncome||"工资/储蓄储备",providerAccountName:a.providerAccountName||g[0]?.value,destinationBank:"中国工商银行（ICBC）",bankAccount:a.bankAccount||g[1]?.value,transferAmount:`${i.amount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}}function ga(e){const t=z.get(e);t&&clearTimeout(t);const a=window.setTimeout(()=>{z.delete(e);const s=i.historyRecords.find(n=>n.id===e);!s||s.statusCode!=="processing"||(ee(e,n=>({...n,status:"已完成",statusCode:"completed"})),v())},6e4);z.set(e,a)}function te(){const e=window.location.hash.replace("#","");return pa.has(e)?e:"home"}function wa(e){window.location.hash!==`#${e}`&&(window.location.hash=e)}function v(){X.innerHTML=va(i)}function m(e){i.view=e,wa(e),v(),e==="face-scan"?setTimeout(()=>{i.view==="face-scan"&&m("face-waiting")},2500):e==="face-waiting"?setTimeout(()=>{i.view==="face-waiting"&&m("face-success")},2e3):e==="face-success"&&setTimeout(()=>{i.view==="face-success"&&(i.hasCompletedOnboarding=!0,localStorage.setItem("wechat_onboarding_completed","true"),m("platforms"))},2e3)}function ya(e){const t=document.createElement("div");t.className="toast-message",t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),2500)}function ba(){["AUD","USD","HKD","SGD","JPY","KRW"].forEach(t=>{i.ratesCache[t]||K(t)})}async function K(e){i.isRateLoading=!0,v();try{const a=await(await fetch(`https://api.frankfurter.app/latest?from=${e}&to=CNY`)).json();a.rates?.CNY&&(i.exchangeRate=a.rates.CNY,i.ratesCache[e]=a.rates.CNY)}catch(t){console.error(t)}finally{i.isRateLoading=!1,v()}}function ae(e){const t=B(e);e.showAmountWarning=e.amount>0&&e.amount*t<50}function xa(){i.isScanning=!0,v(),setTimeout(()=>{i.isScanning=!1,i.scanResults={lastName:"李",firstName:"薇",region:"中国",gender:"女",dob:"1993-10-12",sourceOfIncome:"工资",address:"Birdsville",postCode:"4482",city:"QLD"},i.confirmBackTarget=void 0,m("confirm")},2e3)}function _a(){i.selectedRecipient=void 0,i.skipContactSelection=!1,i.confirmRecipientBackTarget=void 0}function ka(e,t){v(),requestAnimationFrame(()=>{const a=document.getElementById(e);if(!a)return;a.focus();const s=t==null?a.value.length:Math.min(t,a.value.length);a.setSelectionRange(s,s)})}function $a(e){const t=ha(e.value),a=t.length;if(i.isAmountFieldFocused=!0,i.rawAmountInput=t,i.amount=parseFloat(t)||0,e.value=t,ae(i),e.id==="ps-amount-input"){ka(e.id,a);return}const s=document.getElementById("received-amount-display");s&&(s.textContent=(i.amount*B(i)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}));const n=document.getElementById("amount-field-underline");n&&(n.className=`transfer-field transfer-field--highlight ${i.showAmountWarning?"is-error":"is-focused"}`);const r=document.getElementById("amount-validation-note");r&&(r.className=`validation-note ${i.showAmountWarning?"visible":""}`)}X.onclick=e=>{const t=e.target;if(!t)return;const a=t.closest("[data-country-id]");if(a?.dataset.countryId){const d=$.find(p=>p.id===a.dataset.countryId)||Object.values(x).flat().find(p=>p.id===a.dataset.countryId);if(d){if(i.selectedCountry=d,i.amount=fa(d.currency),i.rawAmountInput=i.amount.toString(),ae(i),K(d.currency),i.showCountrySheet){i.showCountrySheet=!1,v();return}i.view==="select-country"&&m(i.selectCountryBackTarget||"home")}}const s=t.closest("[data-sort]");if(s?.dataset.sort){i.platformSort=s.dataset.sort,i.selectedPlatformId=void 0,v();return}const n=t.closest("[data-order-filter]");if(n?.dataset.orderFilter){i.orderManagementFilter=n.dataset.orderFilter,v();return}const r=t.closest("[data-select-platform-id]");if(r?.dataset.selectPlatformId){i.selectedPlatformId=r.dataset.selectPlatformId,v();return}const l=t.closest("[data-target]");if(l?.dataset.target){const d=l.dataset.target;if(d==="start-scan"){xa();return}if(l.dataset.platformId&&(i.selectedPlatformId=l.dataset.platformId),l.dataset.recordId&&(i.selectedRecordId=l.dataset.recordId,i.orderDetailsBackTarget=i.view),l.dataset.confirmBackTarget&&(i.confirmBackTarget=l.dataset.confirmBackTarget),l.dataset.skipContactSelection&&(i.skipContactSelection=l.dataset.skipContactSelection==="true"),d==="confirm-recipient"&&(i.confirmRecipientBackTarget=l.dataset.confirmRecipientBackTarget),d==="authorize"){_a(),i.hasCompletedOnboarding?(i.showQuoteLoading=!0,v(),setTimeout(()=>{i.showQuoteLoading=!1,m("platforms")},1e3)):m("id-prep");return}const p=l.closest("[data-recipient-id]");if(p?.dataset.recipientId){const u=p.dataset.recipientId;u==="self-balance"?i.selectedRecipient={id:"self-balance",name:"零钱",avatarText:"¥",wechatId:"current_user",realName:"",note:""}:u==="self-card"?i.selectedRecipient={id:"self-card",name:"银行卡",avatarText:"🏦",wechatId:"current_user",realName:"",note:""}:i.selectedRecipient=G.find(se=>se.id===u)}m(d);return}const o=t.closest("[data-expand-id]");if(o?.dataset.expandId){const d=o.dataset.expandId,p=new Set(i.expandedRecordIds);p.has(d)?p.delete(d):p.add(d),i.expandedRecordIds=p,v();return}const c=t.closest("[data-cancel-order-id]");if(c?.dataset.cancelOrderId){const d=z.get(c.dataset.cancelOrderId);d&&(clearTimeout(d),z.delete(c.dataset.cancelOrderId)),ee(c.dataset.cancelOrderId,p=>({...p,status:"已取消",statusCode:"cancelled"})),ya("订单已取消"),v();return}if(t.closest("#trigger-payment")){i.showPasswordInput=!0,i.paymentPassword="",v();return}if(t.closest("#close-payment")||t.classList.contains("payment-modal-overlay")){i.showPasswordInput=!1,v();return}const h=t.closest(".key-cell");if(h?.dataset.key&&!i.showOrderLoading){const d=h.dataset.key;d==="backspace"?i.paymentPassword=i.paymentPassword.slice(0,-1):i.paymentPassword.length<6&&(i.paymentPassword+=d),v(),i.paymentPassword.length===6&&!i.showOrderLoading&&(i.showOrderLoading=!0,v(),setTimeout(()=>{i.showPasswordInput=!1,i.paymentPassword="",v(),setTimeout(()=>{i.showOrderLoading=!1;const p=ma(new Date);i.historyRecords=[p,...i.historyRecords],i.selectedRecordId=p.id,ga(p.id),m("create-success"),setTimeout(()=>m("guide"),1500)},2e3)},300));return}if(t.closest("#toggle-face-agreement")){i.faceAgreementChecked=!i.faceAgreementChecked,v();return}if(t.closest("[data-open-country-sheet]")){i.showCountrySheet=!0,v();return}if(t.hasAttribute("data-close-country-sheet-overlay")||t.closest("[data-close-country-sheet-btn]")){i.showCountrySheet=!1,v();return}if(t.closest("[data-confirm-date-picker]")){i.scanResults||(i.scanResults={lastName:"",firstName:"",region:"",gender:"",dob:"",sourceOfIncome:"",address:"",postCode:"",city:""}),i.scanResults.dob=`${i.datePickerYear}-${i.datePickerMonth}-${i.datePickerDay}`,i.showDatePicker=!1,v();return}};document.oninput=e=>{const t=e.target;(t.id==="transfer-amount-input"||t.id==="ps-amount-input")&&$a(t)};window.onhashchange=()=>{m(te())};v();ba();i.selectedCountry&&K(i.selectedCountry.currency);
