import {
  allCountries,
  guideSteps,
  historyRecords,
  platforms,
  popularCountries,
  recipients,
  recommendationTags,
  stats,
  transferSummary,
} from "./data";
import type { AppState, Country, HistoryRecord, PlatformCard, Recipient, ViewName } from "./types";

const SVG_SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b2b2b2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;

const SVG_BACK_ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
const SVG_BACK_ARROW_WHITE = `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><polyline points="15 18 9 12 15 6"></polyline></svg>`;

const SVG_CHECKMARK_CIRCLE = `<svg viewBox="0 0 24 24" fill="none" stroke="#07c160" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
const SVG_EDIT_PENCIL = `<svg viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
const SVG_CHEVRON_DOWN = `<svg viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
const SVG_CHEVRON_RIGHT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
const SVG_EYE = `<svg viewBox="0 0 24 24" fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
const SVG_COPY = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const SVG_BANK = `<svg viewBox="0 0 24 24" fill="none" stroke="#07c160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px;"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 21V10"></path><path d="M9 21V10"></path><path d="M15 21V10"></path><path d="M19 21V10"></path><path d="M3 10l9-7 9 7"></path></svg>`;

const SVG_TAB_HOME = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
const SVG_TAB_PROFILE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;

const SVG_FLAG_AU = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#00008b" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M480 348.4l14.1 43.5h45.7l-37 26.9 14.2 43.5-37-26.9-37 26.9 14.2-43.5-37-26.9h45.7zM160 360l8.1 24.8h26.1l-21.1 15.3 8.1 24.8-21.2-15.3-21.2 15.3 8.1-24.8-21.1-15.3H152zm160-53.1l11.4 34.9h36.7l-29.7 21.6 11.4 34.9-29.8-21.6-29.7 21.6 11.4-34.9-29.7-21.6h36.7zm160-184l11.4 34.9h36.7l-29.7 21.6 11.4 34.9-29.8-21.6-29.7 21.6 11.4-34.9-29.7-21.6h36.7zm0-101.4l6.1 18.7h19.6l-15.9 11.6 6 18.7-15.9-11.6-15.9 11.6 6-18.7-15.8-11.6h19.6z"/>
  <path fill="#fff" d="M0 0h320v160H0z"/>
  <path fill="#fff" d="M0 0v240h320V0H0zm140 0h40v240h-40V0zM0 100h320v40H0v-40z"/>
  <path fill="#ff0000" d="M0 0v240h320V0H0zm148 0h24v240h-24V0zM0 108h320v24H0v-24z"/>
  <path stroke="#fff" stroke-width="20" d="M0 0l320 240m0-240L0 240"/>
  <path stroke="#ff0000" stroke-width="12" d="M0 0l320 240m0-240L0 240"/>
</svg>
`;

const SVG_FLAG_CN = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#de2910" d="M0 0h640v480H0z"/>
  <path fill="#ffde00" d="M120 72l12 38.3h40.3L140 134l12.4 38.2L120 148.6l-32.4 23.6 12.4-38.2-32.5-23.7h40.3zm78-41.5l1.6 6h6.1l-5 3.5 1.9 6-5-3.8-5 3.8 2-6-5-3.5h5zm24 24l4.6 4.1 3-5.5-1 6.3 5.4 3.7-6.2.7.2 6.5-4-5-5.3 4 2-6.2-5-4.2 6.4-.6zm0 40l6.2.6-2 6.2 5.3 4-4 5-.2 6.5-6.2-.7-5.4 3.7 1-6.3-3-5.5-4.6 4.1 6-.5zm-24 24l5 3.5-2 6 5-3.8 5 3.8-1.9-6 5-3.5h-6l-1.6-6-1.7 6h-6.1z"/>
</svg>
`;

const SVG_FLAG_VN = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#da251d" d="M0 0h640v480H0z"/>
  <path fill="#ff0" d="M320 120l23.5 72.3h76l-61.5 44.7 23.5 72.3-61.5-44.7-61.5 44.7 23.5-72.3-61.5-44.7h76z"/>
</svg>
`;

const SVG_FLAG_HK = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#de2910" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M331.3 115.1c-14 3.1-41.5 21.6-47.5 73.1 7.1-15.6 15.6-25 36.6-32.9 8.7-2.9 23-4.5 35.1-4.7-22.3.4-60.8 11.6-70.1 76-1.1 5.4-3.1 19.4 3.4 35 2 4.9 6.7 17.2 18.5 26.8-19.1-11.6-33.1-34.6-28.8-71.1 1.4-11.8 4.2-22.1 13.6-35.1 3.4-4.7 9.8-13.6 22-20.4-12.7 6.1-23 18.1-27.9 33.3-10.3 32.2-2.7 61 7.1 73.6 8.3 10.5 28.6 20.3 48.7 15.6-28.8 5.4-66.3-21-65.7-77.7.4-40.7 20.3-66.3 54.9-91.5zm-55.9 146.4c1.1-1.3 4.2-4.5 4.5-4.5.2-.2-3.6 23.4-1.3 37.1.5 3.1 1.6 8.3 4.5 13.8-3.1-4-5.4-8.7-6.7-14.7-2-8.5-2.2-28.1-1-31.7zm116.3-134.7c15.1-6.1 48-18.1 94.7 14.1-17.6-1.4-31.1 2.3-51.4 12.3-8.5 4.2-19.4 12.5-26.4 19.4 14.2-6.5 46.1-12.8 91.5 37.7 3.6 4.1 12.1 14.1 18.3 27.2 2 3.8 7.6 15.2 10.3 30.2-12.7-18.1-29.9-34.8-63-42.5-12.1-2.9-23-4-37.1-2.5-6.5.7-18.5 3.8-29.3 10.7 12.7-.9 31.9-.9 51.4 6.7 41 16.3 54.5 40.7 58.7 54.7 3.6 11.6 5.4 34.6-2.5 54.1-8.5-30.8-26.6-59.5-73.4-68.4-35.7-7.2-57.1 11.8-82.7 44.2zm-22.1 154.5c.2 1.8 1.1 6.5 1.1 6.1 0-.2.5-24 5.6-35.7.9-2.2 3.6-7.6 6.9-12.3-4.5 2.5-8.3 5.4-11.2 9.4-4.2 6.5-2.9 28.8-2.4 32.5zm-72.2-27.5c6.3-13.8 24.6-43.1 78.4-45.6-4.9 17.1-3.6 30.9-.9 53.2.9 9.8 3.8 23 7.8 30.6-11.4-11.2-22.1-41.2-11.2-100.3.9-4.7 2.7-18.3 8.3-31.1.9-2.2 4-11.9 9.8-21.6-6.1 15.1-6.5 31.5-6.5 54.1 0 12.1 1.4 23.9 4.9 38 .7 2.7 2.2 12.1 7.4 22-11.6-6.1-27.9-14.7-41.2-34-11.6-17-15.1-40.9-10.7-61-.7 32.7 15.6 70.3 56.5 102.7 8.3 6.9 26.4 18.5 44.9 21.2-32.9-.4-68-30.6-88.7-82.3zm8.3 47.7c-.5-1.1-2-5.4-2-4.9 0 .2 15.2 11.6 28.1 10.7 2.9-.2 7.4-1.6 12.5-3.8-3.6.7-7.8 1.6-13.2 1.1-7.1-1.1-24.8-2-25.4-3.1zm115-46.1c-13.4-6.3-43.3-18.7-65.5 13.6 12.1 10.7 21.4 18.8 32 40 .4 1.8 2.2 6.7 5.6 11.6-5.8-13.2-11.2-41-45.7-81.8-2.7-3.4-13.8-16.1-28.4-23.7-2.9-1.3-12.5-5.6-26.8-9.4 12.1 3.6 32.4 8.7 50.7 21.6 11.8 8.1 20.3 16.3 27.5 28.4.9 1.6 5.8 12.1 9.6 24.4-.2-12.5-1.4-27.5-6.5-44-6.5-20.6-18.1-33.6-29.3-47.2 24 16.3 35.1 48.9 41.6 85.9 1.3 8.1 3.1 31.9-1.3 52 14.3-25.5 18.5-61.9 6.5-101.4zM315 253.3c-1.3.2-5.4.7-4.9.4.2 0 17.2-6.5 23.4-15.4 1.6-2.2 3.8-5.8 4.7-10.7-.7 3.8-2 7.1-4.7 10.3-3.6 4.7-17.6 15-18.5 15.4zm102.3-51.4c-8.7 12.3-22.1 35-5.4 78.4-5.4-15.6-7.4-28.4-8.7-52.9-1.1-11.4-.7-23.4 2.2-34.9-3.4 14.1 6.5 44 48.9 74.9 3.6 2.5 13.8 8.9 27.5 14.3 2.5 1.1 14.3 5.4 27.7 8.5-16.1-1.3-32.2-4.9-51.4-11.2-10.7-3.6-21.6-8.3-31.9-15.6.7 12.5 4.5 24.1 9.4 35.1 2.2 4.9 8.7 21.2 19 32.2-7.1-10.3-11.4-23.4-13.4-38.9-.7-16.1 2.5-28.6 7.4-42.5 1-13.8 5.6-35.1 22.1-42.5-16.5 12.1-23.7 44-18.1 91 1 8.7 7.4 34 16.1 48.7-27.5-15.6-39.1-42.7-48.2-89zm-13.4 34c.4 1.3 2.5 5.6 2.2 5.1-.2-.2-4.9-18.3-15.4-25.5-2.2-1.6-6.1-4.7-11-6.1 3.8.4 7.4 1.3 11.2 3.8 5.8 3.8 12.5 21 13 22.7z"/>
</svg>
`;

const SVG_FLAG_US = `
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
`;

const SVG_FLAG_KR = `
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
`;

const SVG_FLAG_SG = `
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
`;

const SVG_FLAG_AR = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#71b3e8" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#ffb81c" d="M338 240a18 18 0 1 1-36 0 18 18 0 0 1 36 0z"/>
</svg>
`;

const SVG_FLAG_AE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#00732f" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#000" d="M0 320h640v160H0z"/>
  <path fill="red" d="M0 0h160v480H0z"/>
</svg>
`;

const SVG_FLAG_IE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#169b62" d="M0 0h213.3v480H0z"/>
  <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
  <path fill="#ff883e" d="M426.7 0H640v480H426.7z"/>
</svg>
`;

const SVG_FLAG_EE = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#4891d9" d="M0 0h640v160H0z"/>
  <path fill="#000" d="M0 160h640v160H0z"/>
  <path fill="#fff" d="M0 320h640v160H0z"/>
</svg>
`;

const SVG_FLAG_AD = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag">
  <path fill="#001898" d="M0 0h213.3v480H0z"/>
  <path fill="#fed500" d="M213.3 0h213.4v480H213.3z"/>
  <path fill="#d50032" d="M426.7 0H640v480H426.7z"/>
  <path d="M280 200h80v80h-80z" fill="#ffb81c"/>
</svg>
`;

const SVG_FLAG_AT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#ed2939" d="M0 0h640v160H0zm0 320h640v160H0z"/></svg>`;
const SVG_FLAG_BE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000" d="M0 0h213.3v480H0z"/><path fill="#ff0" d="M213.3 0h213.4v480h-213.4z"/><path fill="red" d="M426.7 0H640v480h-213.3z"/></svg>`;
const SVG_FLAG_BR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#009739" d="M0 0h640v480H0z"/><path fill="#fedd00" d="M320 72L64 240l256 168 256-168z"/><circle cx="320" cy="240" r="88" fill="#012169"/></svg>`;
const SVG_FLAG_CA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#f00" d="M0 0h640v480H0z"/><path fill="#fff" d="M160 0h320v480H160z"/><path fill="#f00" d="M320 120l5 70 65-40-30 75 70 30-75 10 30 75-65-45-65 45 30-75-75-10 70-30-30-75 65 40z"/></svg>`;
const SVG_FLAG_DE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ffce00" d="M0 320h640v160H0z"/><path fill="#000" d="M0 0h640v160H0z"/><path fill="#d00" d="M0 160h640v160H0z"/></svg>`;
const SVG_FLAG_FR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M213.3 0h213.4v480h-213.4z"/><path fill="#002395" d="M0 0h213.3v480H0z"/><path fill="#ed2939" d="M426.7 0H640v480H426.7z"/></svg>`;
const SVG_FLAG_JP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="144" fill="#bc002d"/></svg>`;
const SVG_FLAG_NL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#21468b" d="M0 320h640v160H0z"/><path fill="#ae1c28" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/></svg>`;
const SVG_FLAG_TH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#f4f5f8" d="M0 0h640v480H0z"/><path fill="#2d2a4a" d="M0 160h640v160H0z"/><path fill="#a51931" d="M0 0h640v80H0zm0 400h640v80H0z"/></svg>`;
const SVG_FLAG_GR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#0d5eaf" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 53.3h640v53.4H0zm0 106.7h640v53.3H0zm0 106.7h640v53.3H0zm0 106.6h640v53.4H0zM240 0h53.3v266.7H240zM0 106.7h293.3v53.3H0z"/></svg>`;
const SVG_FLAG_IT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M213.3 0h213.4v480h-213.4z"/><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></svg>`;
const SVG_FLAG_ES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#c60b1e" d="M0 0h640v120H0zm0 360h640v120H0z"/><path fill="#ffc400" d="M0 120h640v240H0z"/><circle cx="160" cy="240" r="40" fill="#a50000"/></svg>`;
const SVG_FLAG_GB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#fff" d="m75 0 245 180L565 0h75v50L395 240l245 190v50h-75L320 300 75 480H0v-50l245-190L0 50V0z"/><path fill="#C8102E" d="m424 281 216 159v40L365 281zm-208 0-216 160v39l216-159zm0-82L0 39V0l216 160zm208 0L640 40V0L424 160z"/><path fill="#fff" d="M240 0v480h160V0zM0 160v160h640V160z"/><path fill="#C8102E" d="M267 0v480h106V0zM0 187v106h640V187z"/></svg>`;
const SVG_FLAG_MY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#cc0000" d="M0 0h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0zm0 68.5h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0zm0 68.6h640v34.3H0z"/><path fill="#000066" d="M0 0h320v240H0z"/><path fill="#fff" d="M160 180a60 60 0 1 1 0-120 70 70 0 1 0 0 120z"/><path fill="#ffcc00" d="M190 120l15 45 45-15-30 35 30 35-45-15-15 45-15-45-45 15 30-35-30-35 45 15z"/></svg>`;
const SVG_FLAG_ZA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#007a4d" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0v480h160L400 240 160 0H0z"/><path fill="#000" d="M0 40v400h120L320 240 120 40H0z"/><path fill="#ffb81c" d="M0 160v160h160L320 240 160 160H0z"/><path fill="#002395" d="M320 240L640 480H213L320 240z"/><path fill="#e03c31" d="M320 240L213 0h427L320 240z"/></svg>`;
const SVG_FLAG_BH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="red" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h160l100 48 100 48-100 48-100 48 100 48 100 48-100 48-100 48 100 48-100 48H0z"/></svg>`;
const SVG_FLAG_PL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#dc143c" d="M0 240h640v240H0z"/></svg>`;
const SVG_FLAG_DK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#c8102e" d="M0 0h640v480H0z"/><path fill="#fff" d="M176 0h64v480h-64zM0 208h640v64H0z"/></svg>`;
const SVG_FLAG_FI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#003580" d="M0 174.5h640v131H0zm174.5-174.5h131v480h-131z"/></svg>`;
const SVG_FLAG_SE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#006aa7" d="M0 0h640v480H0z"/><path fill="#fecc00" d="M0 192h640v96H0zm160-192h96v480h-96z"/></svg>`;
const SVG_FLAG_CH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="red" d="M0 0h640v480H0z"/><path fill="#fff" d="M280 120h80v240h-80zm-120 120h240v80h-240z"/></svg>`;
const SVG_FLAG_NO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ba0c2f" d="M0 0h640v480H0z"/><path fill="#fff" d="M180 0h120v480H180zM0 180h640v120H0z"/><path fill="#00205b" d="M210 0h60v480h-60zM0 210h640v60H0z"/></svg>`;
const SVG_FLAG_PT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#006600" d="M0 0h256v480H0z"/><path fill="red" d="M256 0h384v480H256z"/><circle cx="256" cy="240" r="80" fill="#ffde00"/></svg>`;
const SVG_FLAG_CO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fcd116" d="M0 0h640v240H0z"/><path fill="#003893" d="M0 240h640v120H0z"/><path fill="#ce1126" d="M0 360h640v120H0z"/></svg>`;
const SVG_FLAG_QA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#8d1b3d" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h160l60 26 60 27-60 27-60 26 60 27 60 26-60 27-60 26 60 27 60 26-60 27-60 26 60 27 60 26-60 27-60 26H0z"/></svg>`;
const SVG_FLAG_MT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h320v480H0z"/><path fill="#c00" d="M320 0h320v480H320z"/><path d="M40 40h40v40H40z" fill="#ddd"/></svg>`;
const SVG_FLAG_IS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#003897" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 174.5h640v131H0zm174.5-174.5h131v480h-131z"/><path fill="#d72828" d="M0 203.6h640v72.8H0zm203.6-203.6h72.8v480h-72.8z"/></svg>`;
const SVG_FLAG_IN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ff9933" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#128807" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="60" fill="none" stroke="#000080" stroke-width="2"/><circle cx="320" cy="240" r="10" fill="#000080"/></svg>`;
const SVG_FLAG_CY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#d47000" d="M220 140h200v200h-200z"/><path fill="#4e5b31" d="M280 360l80 40 80-40z"/></svg>`;
const SVG_FLAG_GE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#ff0000" d="M280 0h80v480h-80zM0 200h640v80H0z"/><path fill="#ff0000" d="M120 80h40v40h-40zM480 80h40v40h-40zM120 360h40v40h-40zM480 360h40v40h-40z"/></svg>`;
const SVG_FLAG_RO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#002b7f" d="M0 0h213.3v480H0z"/><path fill="#fcd116" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce1126" d="M426.7 0H640v480H426.7z"/></svg>`;
const SVG_FLAG_LU = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ed2939" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#00a1de" d="M0 320h640v160H0z"/></svg>`;
const SVG_FLAG_CZ = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#d7141a" d="M0 240h640v240H0z"/><path fill="#11457e" d="M0 0l320 240L0 480z"/></svg>`;
const SVG_FLAG_SK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#0b4ea2" d="M0 160h640v160H0z"/><path fill="#ee1c25" d="M0 320h640v160H0z"/><circle cx="160" cy="240" r="40" fill="#fff" stroke="#000"/></svg>`;
const SVG_FLAG_SI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#005293" d="M0 160h640v160H0z"/><path fill="#ed1c24" d="M0 320h640v160H0z"/><path d="M120 120a20 20 0 0 1 40 0h-40z" fill="#fff"/></svg>`;
const SVG_FLAG_PA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#005293" d="M0 240h320v240H0z"/><path fill="#ce1126" d="M320 0h320v240H320z"/><path d="M160 80l10 30 30 10-25 20 15 30-30-20-30 20 15-30-25-20 30-10z" fill="#005293"/><path d="M480 320l10 30 30 10-25 20 15 30-30-20-30 20 15-30-25-20 30-10z" fill="#ce1126"/></svg>`;
const SVG_FLAG_BG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v160H0z"/><path fill="#00966e" d="M0 160h640v160H0z"/><path fill="#d62612" d="M0 320h640v160H0z"/></svg>`;
const SVG_FLAG_KH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#032ea1" d="M0 0h640v120H0zm0 360h640v120H0z"/><path fill="#e00025" d="M0 120h640v240H0z"/><path fill="#fff" d="M320 160l20 40h-40zM280 200h80v40h-80z"/></svg>`;
const SVG_FLAG_HR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ff0000" d="M0 0h640v160H0z"/><path fill="#ffffff" d="M0 160h640v160H0z"/><path fill="#0000ff" d="M0 320h640v160H0z"/><path d="M280 140h80v80h-80z" fill="#f00"/></svg>`;
const SVG_FLAG_KE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000" d="M0 0h640v140H0z"/><path fill="#fff" d="M0 140h640v20H0zm0 180h640v20H0z"/><path fill="#922" d="M0 160h640v140H0z"/><path fill="#00843d" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="40" fill="#000"/></svg>`;
const SVG_FLAG_LV = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#9e3039" d="M0 0h640v192H0zm0 288h640v192H0z"/><path fill="#fff" d="M0 192h640v96H0z"/></svg>`;
const SVG_FLAG_LT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fdb913" d="M0 0h640v160H0z"/><path fill="#006a44" d="M0 160h640v160H0z"/><path fill="#c1272d" d="M0 320h640v160H0z"/></svg>`;
const SVG_FLAG_LI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000080" d="M0 0h640v240H0z"/><path fill="#ce1126" d="M0 240h640v240H0z"/><path d="M100 60c10 0 20 20 0 20z" fill="#ffde00"/></svg>`;
const SVG_FLAG_PE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#d91023" d="M0 0h213.3v480H0zm426.7 0H640v480H426.7z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/></svg>`;
const SVG_FLAG_MC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#ce1126" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 240h640v240H0z"/></svg>`;
const SVG_FLAG_MX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#114d4d" d="M0 0h213.3v480H0z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce1126" d="M426.7 0H640v480H426.7z"/><circle cx="320" cy="240" r="40" fill="#8b4513"/></svg>`;
const SVG_FLAG_KG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#e10000" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="100" fill="none" stroke="#ffde00" stroke-width="10"/><path d="M220 240h200M320 140v200" stroke="#ffde00" stroke-width="5"/></svg>`;
const SVG_FLAG_IL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#0038b8" d="M0 60h640v70H0zm0 290h640v70H0z"/><path d="M320 150l40 120-100-80h120l-100 80 40-120z" fill="none" stroke="#0038b8" stroke-width="8"/></svg>`;
const SVG_FLAG_ID = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="red" d="M0 0h640v240H0z"/><path fill="#fff" d="M0 240h640v240H0z"/></svg>`;
const SVG_FLAG_JO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#000" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#007a3d" d="M0 320h640v160H0z"/><path fill="#ce1126" d="M0 0l320 240L0 480z"/><path fill="#fff" d="M100 240l10-25 25 10-15 20 15 20-25-10-10 25-10-25-25 10 15-20-15-20 25 10z"/></svg>`;
const SVG_FLAG_NZ = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#00247d" d="M0 0h640v480H0z"/><path fill="#fff" d="m75 0 245 180L565 0h75v50L395 240l245 190v50h-75L320 300 75 480H0v-50l245-190L0 50V0z"/><path fill="#C8102E" d="m424 281 216 159v40L365 281zm-208 0-216 160v39l216-159zm0-82L0 39V0l216 160zm208 0L640 40V0L424 160z"/><path fill="#fff" d="M240 0v480h160V0zM0 160v160h640V160z"/><circle cx="480" cy="120" r="10" fill="red" stroke="#fff" stroke-width="2"/></svg>`;
const SVG_FLAG_HU = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#cd2a3e" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#436f4d" d="M0 320h640v160H0z"/></svg>`;
const SVG_FLAG_CL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#fff" d="M0 0h640v240H0z"/><path fill="#d52b1e" d="M0 240h640v240H0z"/><path fill="#0039a6" d="M0 0h240v240H0z"/><path fill="#fff" d="M120 160l15 45 45-15-30 35 30 35-45-15-15 45-15-45-45 15 30-35-30-35 45 15z"/></svg>`;
const SVG_FLAG_MO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><path fill="#00785e" d="M0 0h640v480H0z"/><circle cx="320" cy="240" r="80" fill="#fff" opacity="0.5"/><path d="M320 120l10 30 30 10-25 20 15 30-30-20-30 20 15-30-25-20 30-10z" fill="#ffde00"/></svg>`;

function renderFlag(flagKey: string): string {
  switch (flagKey) {
    case "AU": return SVG_FLAG_AU;
    case "CN": return SVG_FLAG_CN;
    case "VN": return SVG_FLAG_VN;
    case "HK": return SVG_FLAG_HK;
    case "US": return SVG_FLAG_US;
    case "KR": return SVG_FLAG_KR;
    case "SG": return SVG_FLAG_SG;
    case "AR": return SVG_FLAG_AR;
    case "AE": return SVG_FLAG_AE;
    case "EG": return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" class="flag">
        <rect width="900" height="600" fill="#ce1126"/>
        <rect width="900" height="400" y="200" fill="#fff"/>
        <rect width="900" height="200" y="400" fill="#000"/>
        <path d="M450 300l-15 15h30z" fill="#c09307"/>
      </svg>`;
    case "IE": return SVG_FLAG_IE;
    case "EE": return SVG_FLAG_EE;
    case "AD": return SVG_FLAG_AD;
    case "AT": return SVG_FLAG_AT;
    case "BE": return SVG_FLAG_BE;
    case "BR": return SVG_FLAG_BR;
    case "CA": return SVG_FLAG_CA;
    case "DE": return SVG_FLAG_DE;
    case "FR": return SVG_FLAG_FR;
    case "JP": return SVG_FLAG_JP;
    case "NL": return SVG_FLAG_NL;
    case "MY": return SVG_FLAG_MY;
    case "ZA": return SVG_FLAG_ZA;
    case "IT": return SVG_FLAG_IT;
    case "ES": return SVG_FLAG_ES;
    case "GB": return SVG_FLAG_GB;
    case "TH": return SVG_FLAG_TH;
    case "GR": return SVG_FLAG_GR;
    case "IL": return SVG_FLAG_IL;
    case "IN": return SVG_FLAG_IN;
    case "ID": return SVG_FLAG_ID;
    case "JO": return SVG_FLAG_JO;
    case "NZ": return SVG_FLAG_NZ;
    case "HU": return SVG_FLAG_HU;
    case "CL": return SVG_FLAG_CL;
    case "MO": return SVG_FLAG_MO;
    case "BH": return SVG_FLAG_BH;
    case "PL": return SVG_FLAG_PL;
    case "DK": return SVG_FLAG_DK;
    case "FI": return SVG_FLAG_FI;
    case "SE": return SVG_FLAG_SE;
    case "CH": return SVG_FLAG_CH;
    case "NO": return SVG_FLAG_NO;
    case "PT": return SVG_FLAG_PT;
    case "CO": return SVG_FLAG_CO;
    case "QA": return SVG_FLAG_QA;
    case "MT": return SVG_FLAG_MT;
    case "IS": return SVG_FLAG_IS;
    case "CY": return SVG_FLAG_CY;
    case "RO": return SVG_FLAG_RO;
    case "LU": return SVG_FLAG_LU;
    case "CZ": return SVG_FLAG_CZ;
    case "SK": return SVG_FLAG_SK;
    case "SI": return SVG_FLAG_SI;
    case "PA": return SVG_FLAG_PA;
    case "BG": return SVG_FLAG_BG;
    case "KH": return SVG_FLAG_KH;
    case "HR": return SVG_FLAG_HR;
    case "KE": return SVG_FLAG_KE;
    case "LV": return SVG_FLAG_LV;
    case "LT": return SVG_FLAG_LT;
    case "LI": return SVG_FLAG_LI;
    case "PE": return SVG_FLAG_PE;
    case "MC": return SVG_FLAG_MC;
    case "MX": return SVG_FLAG_MX;
    case "KG": return SVG_FLAG_KG;
    case "GE": return SVG_FLAG_GE;
    default:
      // Generic flag placeholder for remaining to avoid emptiness
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag"><rect width="640" height="480" fill="#f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="200" fill="#ccc">${flagKey}</text></svg>`;
  }
}

function screenClass(currentView: ViewName, view: ViewName): string {
  return currentView === view ? "screen is-active" : "screen";
}

function renderPrimaryButton(label: string, target: ViewName): string {
  return `
    <footer class="bottom-bar">
      <button class="primary-button" type="button" data-target="${target}">${label}</button>
    </footer>
  `;
}

function renderHeader(options: {
  title: string;
  centerTitle?: boolean;
  backTarget?: ViewName;
  iconTarget?: ViewName;
}): string {
  const { title, centerTitle = false, backTarget, iconTarget } = options;

  const left = backTarget
    ? `
        <button class="header-left-btn" type="button" data-target="${backTarget}" aria-label="返回上一页">
          ${SVG_BACK_ARROW}
        </button>
      `
    : ``;

  const right = iconTarget
    ? `
        <button class="header-right-btn" type="button" data-target="${iconTarget}" aria-label="进入个人中心">
          <span class="icon-help"></span>
        </button>
      `
    : ``;

  return `
    <header class="top-bar">
      <div class="top-bar__nav">
        <div class="header-col-left">${left}</div>
        <div class="header-col-center">
          <h1 class="header-title">${title}</h1>
        </div>
        <div class="header-col-right">${right}</div>
      </div>
    </header>
  `;
}

export function renderCountrySheetList(state: AppState): string {
  const query = state.countrySearchQuery.trim().toLowerCase();
  let filteredAllCountries: Record<string, Country[]> = allCountries;
  const isSearching = query.length > 0;

  if (isSearching) {
    filteredAllCountries = {};
    Object.entries(allCountries).forEach(([letter, list]) => {
      const filteredList = list.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.englishName.toLowerCase().includes(query) ||
          c.currency.toLowerCase().includes(query) ||
          (c.dialCode && c.dialCode.includes(query)),
      );
      if (filteredList.length > 0) {
        filteredAllCountries[letter] = filteredList;
      }
    });
  }

  const renderItem = (c: Country) => `
    <button class="sheet-country-item ${state.selectedCountry?.id === c.id ? "is-selected" : ""}" type="button" data-country-id="${c.id}">
      <div class="sheet-country-flag">${renderFlag(c.flagKey)}</div>
      <span class="sheet-country-name">${c.name} ${c.dialCode}</span>
    </button>
  `;

  return `
    ${!isSearching ? `
      <section class="sheet-section">
        <h4 class="sheet-section-title">热门国家/地区</h4>
        <div class="sheet-country-list">
          ${popularCountries.map(renderItem).join("")}
        </div>
      </section>
    ` : ""}

    ${Object.entries(filteredAllCountries)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([letter, list]) => `
        <section class="sheet-section" id="sheet-letter-${letter}">
          <h4 class="sheet-section-title">${letter}</h4>
          <div class="sheet-country-list">
            ${list.map(renderItem).join("")}
          </div>
        </section>
      `).join("")}
  `;
}

export function renderCountrySheetSidebar(state: AppState): string {
  const query = state.countrySearchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  if (isSearching) return "";

  return `
    <aside class="alphabet-index alphabet-index--sheet">
      ${"ABDFGHJKLMNPRSTXYZ".split("").map((char) => `<span data-sheet-letter="${char}">${char}</span>`).join("")}
    </aside>
  `;
}

export function renderCountrySheet(state: AppState): string {
  if (!state.showCountrySheet) return "";

  return `
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
            ${SVG_SEARCH_ICON}
            <input type="text" id="country-search-input" placeholder="请输入搜索关键字" value="${state.countrySearchQuery}" />
          </div>
        </div>

        <div class="country-sheet__body">
          ${renderCountrySheetList(state)}
        </div>
        
        <div id="country-sheet-sidebar-container">
          ${renderCountrySheetSidebar(state)}
        </div>
      </div>
    </div>
  `;
}

function getDocumentList(country: Country): string[] {
  // Japan Special
  if (country.id === "jp") {
    return [
      "个人编号卡 + 在留卡",
      "个人编号卡 (仅适用于日本人)",
      "住民票 + 在留卡"
    ];
  }
  
  // UK Special
  if (country.id === "gb") {
    return [
      "英国居留卡",
      "中国护照 + 英国签证",
      "英国身份证",
      "英国护照"
    ];
  }

  // Egypt Special
  if (country.id === "eg") {
    return [
      "埃及国家身份证",
      "埃及护照",
      "埃及驾照",
      "中国护照 + 埃及签证"
    ];
  }

  // Europe Region
  const europeanIds = ["ie", "ee", "ad", "at", "be", "bg", "dk", "de", "fr", "fi", "nl", "cz", "hr", "lv", "lt", "lu", "mt", "mc", "pt", "ro", "sk", "si", "es", "se", "gr", "it", "cy", "pl"];
  if (country.currency === "EUR" || europeanIds.includes(country.id)) {
    return [
      "欧洲居留卡",
      "欧洲身份证",
      "中国护照 + 欧洲签证",
      "欧洲护照"
    ];
  }

  // Default fallback
  return [
    "中国护照",
    `${country.name}护照`,
    `${country.name}驾照`,
    `${country.name} Photo Card`
  ];
}

function renderIdPrep(state: AppState): string {
  const country = state.selectedCountry || popularCountries[0];
  const documents = getDocumentList(country);

  return `
    <section class="${screenClass(state.view, "id-prep")}" data-view="id-prep">
      <div class="prep-header">
        <div class="header-col-left">
          <button class="header-left-btn" type="button" data-target="home" aria-label="返回">
            ${SVG_BACK_ARROW_WHITE}
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
              <div class="country-picker-flag">${renderFlag(country.flagKey)}</div>
              <span class="country-picker-name">${country.name}</span>
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
                  ${documents.map(doc => `<li>${doc}</li>`).join("")}
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
  `;
}

function renderRecipient(recipient: Recipient): string {
  return `
    <article class="recipient-card">
      <div class="recipient-avatar ${recipient.muted ? "recipient-avatar--muted" : ""}">
        ${recipient.avatarText}
      </div>
      <div class="recipient-name">${recipient.name}</div>
      <div class="recipient-note">${recipient.note}</div>
    </article>
  `;
}

function renderLogo(id: string): string {
  switch (id) {
    case "platform-panda":
      return `
        <div style="background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
          <div style="font-size: 20px;">🐼</div>
          <div style="font-size: 8px; font-weight: 800; color: #07c160; margin-top: -2px;">REMIT</div>
        </div>
      `;
    case "platform-wise":
      return `<div style="background: #9fe219; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #37513e; font-size: 24px; font-weight: 900;">${SVG_PLATFORM_WISE_BOLT}</div>`;
    case "platform-koula":
      return `<div style="background: #e65615; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px;">🐨</div>`;
    case "platform-lemfi":
      return `
        <div style="background: #eef7f2; border: 1px solid #73ba93; width: 100%; height: 100%; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #73ba93; font-weight: 800; font-size: 10px;">LEMFi</div>
      `;
    case "platform-wu":
      return `<div style="background: #000; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #ffda00; font-weight: 900; font-size: 20px; border-radius: 6px;">W</div>`;
    case "platform-remitly":
      return `<div style="background: #2b4291; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; border-radius: 50%;">🤝</div>`;
    default:
      return "🏦";
  }
}

const SVG_PLATFORM_WISE_BOLT = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 3L6 14H11L9.5 21L18 10H13L14.5 3Z" fill="currentColor"/>
</svg>
`;

function renderPlatform(platform: PlatformCard, state: AppState): string {
  const isRecommended = true;
  const currency = state.selectedCountry?.currency || "AUD";
  const amount = state.amount;
  const rate = platform.rateRaw || 4.7;
  const fee = platform.feeRaw || 0;
  const originalFee = platform.feeOriginalRaw;
  const coupon = platform.couponRaw || 0;

  // Real calculation: (Amount - Fee) * Rate + Coupon
  const afterFee = amount - fee;
  const afterRate = afterFee * rate;
  const total = afterRate + coupon;

  const formatAUD = (v: number) => v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " " + currency;
  const formatCNY = (v: number) => v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " CNY";
  const formatRate = (r: number) => r.toFixed(4);

  return `
    <article class="platform-card platform-card--recommended">
      <div class="premium-badge">${state.selectedPlatformId === platform.id ? "当前选择" : (state.platformSort === "cheapest" ? "汇率最优" : "到账最快") + "推荐"}</div>
      
      <div class="platform-card__header">
        <div class="platform-brand">
          <div class="platform-logo-img">
            ${renderLogo(platform.id)}
          </div>
          <div class="platform-meta">
            <h3 class="platform-name">${platform.name}</h3>
            <div class="platform-tags-row">
              ${(platform.tags || []).map(tag => `<span class="premium-tag">${tag.text}</span>`).join("")}
            </div>
          </div>
        </div>
        <button class="go-btn go-btn--primary" type="button" data-target="select-contact">
          立即汇款
        </button>
      </div>

      <div class="metrics-grid">
         <div class="metric-block">
            <span class="metric-label">预计实收</span>
            <div class="metric-value amount">${formatCNY(total)}</div>
         </div>
         <div class="metric-block align-right">
            <span class="metric-label">平均用时</span>
            <div class="metric-value speed">
               <span class="main">${platform.averageTime || "--"}</span>
            </div>
         </div>
      </div>

      <div class="luxury-calc-container">
        <label class="luxury-calc-label">实时算费细节</label>
        
        <div class="luxury-receipt">
          <div class="receipt-row">
            <div class="receipt-icon origin">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><circle cx="12" cy="12" r="5"></circle></svg>
            </div>
            <div class="receipt-body">
              <span class="label">本次汇款额</span>
              <span class="value">${formatAUD(amount)}</span>
            </div>
          </div>

          <div class="receipt-row">
            <div class="receipt-icon minus">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13H5v-2h14v2z"></path></svg>
            </div>
            <div class="receipt-body">
              <span class="label">平台服务费 ${fee === 0 ? '<span class="status-pill free">免</span>' : ""}</span>
              <div class="value-group">
                <span class="value ${fee === 0 ? "text-green" : ""}">${fee === 0 ? "0.00 " + currency : formatAUD(fee)}</span>
                ${originalFee ? `<span class="strike-value">${formatAUD(originalFee)}</span>` : ""}
              </div>
            </div>
          </div>

          <div class="receipt-row highlight">
            <div class="receipt-icon multiply">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
            </div>
            <div class="receipt-body">
              <span class="label">当前汇率 (1 ${currency})</span>
              <span class="value text-blue">${formatRate(rate)}</span>
            </div>
          </div>

          ${coupon > 0 ? `
          <div class="receipt-row benefit">
            <div class="receipt-icon plus">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
            </div>
            <div class="receipt-body">
              <span class="label">汇款专属优惠券</span>
              <span class="value text-red">+${formatCNY(coupon)}</span>
            </div>
          </div>
          ` : ""}

          <div class="receipt-footer">
            <div class="receipt-icon equal">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9.5H5v-2h14v2zm0 7H5v-2h14v2z"></path></svg>
            </div>
            <div class="receipt-body">
              <span class="label-bold">预计到账实收</span>
              <span class="value-total">${formatCNY(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderPlatformListItem(platform: PlatformCard, state: AppState): string {
  const currency = state.selectedCountry?.currency || "AUD";
  const amount = state.amount;
  const rate = platform.rateRaw || 4.7;
  const fee = platform.feeRaw || 0;
  const coupon = platform.couponRaw || 0;

  // Real calculation: (Amount - Fee) * Rate + Coupon
  const afterFee = amount - fee;
  const afterRate = afterFee * rate;
  const total = afterRate + coupon;

  const formatCNY = (v: number) => v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " CNY";

  return `
    <article class="platform-list-item" data-select-platform-id="${platform.id}">
      <div class="pli-left">
        <div class="pli-logo">${renderLogo(platform.id)}</div>
        <div class="pli-info">
          <div class="pli-name">${platform.name}</div>
          <div class="pli-tags">
            ${(platform.tags || []).slice(0, 1).map(tag => `<span class="mini-tag">${tag.text}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="pli-right">
        <div class="pli-amount">${formatCNY(total)}</div>
        <div class="pli-time">${platform.averageTime || "--"}</div>
      </div>
    </article>
  `;
}

function renderHistoryItem(record: HistoryRecord, expandedRecordIds: ReadonlySet<string>): string {
  const isExpanded = expandedRecordIds.has(record.id);

  return `
    <article class="history-item ${isExpanded ? "is-expanded" : ""}">
      <button class="history-summary" type="button" data-expand-id="${record.id}">
        <div class="history-summary__main">
          <div class="history-summary__title">${record.datetime}</div>
          <div class="history-summary__meta">${record.platform} · ${record.status}</div>
        </div>
        <div class="history-summary__amount">${record.amount}</div>
      </button>
      <div class="history-brief">
        <span>汇率 ${record.rate}</span>
        <span>手续费 ${record.fee}</span>
      </div>
      <div class="history-detail">
        <div class="detail-row">
          <span>收款人</span>
          <span>${record.recipient}</span>
        </div>
        <div class="detail-row">
          <span>平台收款账号</span>
          <span>${record.account}</span>
        </div>
        <div class="detail-row">
          <span>参考附言</span>
          <span>${record.remark}</span>
        </div>
        <div class="detail-row">
          <span>手续费明细</span>
          <span>${record.feeDetail}</span>
        </div>
      </div>
    </article>
  `;
}

function renderHome(state: AppState): string {
  return `
    <section class="${screenClass(state.view, "home")}" data-view="home">
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
          <div id="amount-field-underline" class="transfer-field transfer-field--highlight ${
            state.showAmountWarning ? "is-error" : state.isAmountFieldFocused ? "is-focused" : ""
          }">
            <div class="field-header">
              <span>汇出地 | 币种</span>
              <span>汇出金额</span>
            </div>
            <div class="field-input-row field-input-row--no-border">
            <div class="country-selector" data-target="select-country">
                ${state.selectedCountry ? renderFlag(state.selectedCountry.flagKey) : SVG_FLAG_VN}
                <span>${state.selectedCountry ? `${state.selectedCountry.name} | ${state.selectedCountry.currency}` : `${transferSummary.fromRegion} | ${transferSummary.fromCurrency}`} </span>
                <span class="arrow-down-icon"></span>
              </div>

              <div class="amount-display-container">
                <input 
                  type="text" 
                  id="transfer-amount-input" 
                  class="amount-display-input" 
                  value="${state.isAmountFieldFocused ? state.rawAmountInput : (state.amount > 0 ? state.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "")}" 
                  placeholder="请输入"
                />
              </div>
            </div>
          </div>
          
          <div id="amount-validation-note" class="validation-note ${state.showAmountWarning ? "visible" : ""}">
            单笔汇款的到账金额不低于50CNY
          </div>

          <div class="transfer-field" style="margin-top: 24px;">
            <div class="field-header">
              <span>收款地 | 币种</span>
              <span>预估可收到</span>
            </div>
            <div class="field-input-row">
              <div class="country-selector">
                ${SVG_FLAG_CN}
                <span>${transferSummary.toRegion} | ${transferSummary.toCurrency}</span>
              </div>
              <div id="received-amount-display" class="amount-display received ${state.isRateLoading && !state.exchangeRate ? "is-loading" : ""}">
                ${
                  (state.isRateLoading && !state.exchangeRate && !state.ratesCache[state.selectedCountry?.currency || transferSummary.fromCurrency])
                    ? "..."
                    : (() => {
                        const rate = state.exchangeRate || state.ratesCache[state.selectedCountry?.currency || transferSummary.fromCurrency] || 0.0002;
                        return (state.amount * rate).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        });
                      })()
                }
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
  `;
}


function renderAuthorize(): string {
  // Authorization is now a modal, standalone screen disabled.
  return "";
}

function renderAuthModal(state: AppState): string {
  if (!state.showAuthModal) return "";
  return `
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
              <span class="text-link">《汇率即时查智能助手服务协议》</span>、
              <span class="text-link">《个人信息使用授权书》</span>
            </span>
          </label>
          <div class="auth-sheet__footer">
            <button class="primary-button" type="button" data-target="id-prep">立即体验</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDatePicker(state: AppState): string {
  if (!state.showDatePicker) return "";

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 110 }, (_, i) => (currentYear - i).toString()); // 1916 to current
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  return `
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
                ${years.map(y => `<div class="picker-item ${y === state.datePickerYear ? "is-selected" : ""}" data-date-year="${y}">${y}</div>`).join("")}
             </div>
          </div>
          <div class="date-picker-column">
             <div class="date-picker-label">月</div>
             <div class="picker-options-list" id="month-scroll">
                ${months.map(m => `<div class="picker-item ${m === state.datePickerMonth ? "is-selected" : ""}" data-date-month="${m}">${m}</div>`).join("")}
             </div>
          </div>
          <div class="date-picker-column">
             <div class="date-picker-label">日</div>
             <div class="picker-options-list" id="day-scroll">
                ${days.map(d => `<div class="picker-item ${d === state.datePickerDay ? "is-selected" : ""}" data-date-day="${d}">${d}</div>`).join("")}
             </div>
          </div>
          <div class="picker-highlight-mask"></div>
        </div>
      </div>
    </div>
  `;
}

function renderPicker(state: AppState): string {
  if (!state.showPicker || !state.pickerOptions) return "";

  return `
    <div class="picker-overlay" data-picker-backdrop>
      <div class="picker-sheet">
        <div class="picker-header">
          <button class="picker-cancel" type="button" data-close-picker>取消</button>
          <div class="picker-title">${state.pickerTitle || "请选择"}</div>
          <button class="picker-confirm" type="button" data-confirm-picker>确定</button>
        </div>
        <div class="picker-body">
          <div class="picker-options-list">
            ${state.pickerOptions.map(opt => `
              <div class="picker-item ${opt === state.pickerValue ? "is-selected" : ""}" data-picker-option="${opt}">
                ${opt}
              </div>
            `).join("")}
          </div>
          <div class="picker-highlight-mask"></div>
        </div>
      </div>
    </div>
  `;
}

function renderConfirm(state: AppState): string {
  const isOcr = !!state.scanResults;

  const renderField = (labelEn: string, labelZh: string, value: string, id: string, showArrow = true) => `
    <div class="confirm-row">
      <div class="confirm-row__label-group">
        <div class="confirm-row__label-en">${labelEn}</div>
        <div class="confirm-row__label-zh">${labelZh}</div>
      </div>
      <div class="confirm-row__content">
        <input type="text" class="confirm-row__input" data-field-id="${id}" value="${value}" />
        ${showArrow ? `<div class="confirm-row__arrow">${SVG_EDIT_PENCIL}</div>` : ""}
      </div>
    </div>
  `;

  const renderSelectField = (labelEn: string, labelZh: string, value: string, id: string, options: string[]) => `
    <div class="confirm-row picker-trigger" data-field-id="${id}" data-picker-title="${labelZh}" data-picker-options='${JSON.stringify(options)}'>
      <div class="confirm-row__label-group">
        <div class="confirm-row__label-en">${labelEn}</div>
        <div class="confirm-row__label-zh">${labelZh}</div>
      </div>
      <div class="confirm-row__content">
        <div class="confirm-row__value-text">${value}</div>
        <div class="confirm-row__arrow">${SVG_CHEVRON_DOWN}</div>
      </div>
    </div>
  `;

  return `
    <section class="${screenClass(state.view, "confirm")}" data-view="confirm">
      ${renderHeader({ title: "信息确认", centerTitle: true, backTarget: "upload-id" })}
      <div class="screen__body screen__body--confirm">
        
        <div class="status-indicator">
           <div class="status-indicator__track">
              <div class="status-circle is-active">1</div>
              <div class="status-line is-active"></div>
              <div class="status-circle is-active">2</div>
              <div class="status-line"></div>
              <div class="status-circle">3</div>
           </div>
           <div class="status-text">核对信息</div>
        </div>

        <div class="confirm-panel-group">
          <div class="confirm-panel-title">
            <span>汇款人身份信息</span>
            <span class="title-meta-tag">自动识别</span>
          </div>
          <section class="confirm-panel">
            ${renderField("Last Name", "姓", state.scanResults?.lastName || "李", "lastName", false)}
            <div class="divider"></div>
            ${renderField("First Name", "名", state.scanResults?.firstName || "薇", "firstName", false)}
            <div class="divider"></div>
            ${renderSelectField("Birth Region", "出生国家/地区", state.scanResults?.region || "中国", "region", ["中国", "澳大利亚", "美国", "英国", "日本", "越南"])}
            <div class="divider"></div>
            ${renderSelectField("Gender", "性别", state.scanResults?.gender || "男", "gender", ["男", "女", "其他"])}
            <div class="divider"></div>
            <div class="confirm-row date-picker-trigger" data-current-dob="${state.scanResults?.dob || "1993-10-12"}">
              <div class="confirm-row__label-group">
            <div class="confirm-row__label-en">Birth Date</div>
                <div class="confirm-row__label-zh">出生年月</div>
              </div>
              <div class="confirm-row__content">
                <div class="confirm-row__value-text">${state.scanResults?.dob || "1993-10-12"}</div>
                <div class="confirm-row__arrow">${SVG_CHEVRON_DOWN}</div>
              </div>
            </div>
            <div class="divider"></div>
            ${renderSelectField("Source of Income", "收入来源", state.scanResults?.sourceOfIncome || "工资", "sourceOfIncome", ["工资", "储蓄", "兼职", "经营收入"])}
          </section>
        </div>

        <div class="confirm-panel-group">
          <div class="confirm-panel-title">居住地信息</div>
          <section class="confirm-panel">
            ${renderField("Street & No.", "街道地址", state.scanResults?.address || "北京市东城区长安街1号", "address", false)}
            <div class="divider"></div>
            ${renderField("Post Code", "邮编", state.scanResults?.postCode || "100010", "postCode", false)}
            <div class="divider"></div>
            ${renderField("City/Suburb", "城市或区", state.scanResults?.city || "北京市", "city", false)}
          </section>
        </div>

        <p class="confirm-disclaimer">信息仅用于汇款平台合规性验证，我们承诺尊重并保护您的隐私。</p>
      </div>
      ${renderPrimaryButton("确认并继续", "face-intro")}
    </section>
  `;
}

function renderPlatforms(state: AppState): string {
  const country = state.selectedCountry || popularCountries[0];
  const amountStr = state.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Sorting logic
  let sortedPlatforms = [...platforms];
  if (state.platformSort === "cheapest") {
    // Sort by descending ( (Amount - Fee) * Rate + Coupon )
    sortedPlatforms.sort((a, b) => {
      const totalA = (state.amount - (a.feeRaw || 0)) * (a.rateRaw || 0) + (a.couponRaw || 0);
      const totalB = (state.amount - (b.feeRaw || 0)) * (b.rateRaw || 0) + (b.couponRaw || 0);
      return totalB - totalA;
    });
  } else {
    // Sort by fastest arrival
    sortedPlatforms.sort((a, b) => {
      if (a.isFastest && !b.isFastest) return -1;
      if (!a.isFastest && b.isFastest) return 1;
      return 0;
    });
  }

  const bestPlatform = state.selectedPlatformId 
    ? (platforms.find(p => p.id === state.selectedPlatformId) || sortedPlatforms[0])
    : sortedPlatforms[0];
    
  const otherPlatforms = sortedPlatforms.filter(p => p.id !== bestPlatform.id);

  return `
    <section class="${screenClass(state.view, "platforms")}" data-view="platforms">
      <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="confirm" aria-label="返回">
              ${SVG_BACK_ARROW}
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
            ${renderFlag(country.flagKey)}
            <span>${country.name} | ${country.currency}</span>
            <span class="chevron-down-mini"></span>
          </div>
          <div class="ps-amount">${amountStr}</div>
        </div>
      </div>

      <div class="screen__body screen__body--platforms">
        <!-- Sort Toggle -->
        <div class="platform-sort-toggle">
          <button class="sort-btn ${state.platformSort === "cheapest" ? "is-active" : ""}" data-sort="cheapest">
            推荐最便宜
          </button>
          <button class="sort-btn ${state.platformSort === "fastest" ? "is-active" : ""}" data-sort="fastest">
            推荐最快
          </button>
        </div>

        <div class="recommended-section">
          ${renderPlatform(bestPlatform, state)}
        </div>
        
        <div class="other-channels-section">
          <h4 class="other-channels-title">其他渠道</h4>
          <div class="platform-list">
            ${otherPlatforms.map(p => renderPlatformListItem(p, state)).join("")}
          </div>
        </div>

        <p class="platforms-disclaimer">
          *实际汇率、手续费由汇款机构提供，收款金额以实际为准，信息仅供参考
        </p>
      </div>
    </section>
  `;
}

function renderGuide(state: AppState): string {
  return `
    <section class="${screenClass(state.view, "guide")}" data-view="guide" style="background: #f5f5f5;">
      ${renderHeader({ title: "收款名片", centerTitle: true, backTarget: "platforms" })}
      
      <div class="screen__body screen__body--guide">

        <div class="receiving-card-wrapper">
          <div class="receiving-card-top">
            <div class="receiving-card-top__title">
              收款指引
            </div>
          </div>

          <div class="grey-info-card">
            <div class="grey-info-card__avatar">${SVG_BANK}</div>
            <div class="card-section-title" style="font-size: 14px; color: #111; font-weight: 700; margin-bottom: 20px;">收款账户信息</div>
            
            <div class="grey-info-list">
              ${guideSteps.map((step, idx, arr) => `
                <div class="grey-info-item">
                  <span class="grey-info-item__label">${step.title}</span>
                  <div class="grey-info-item__value-group">
                    <span class="grey-info-item__value">${step.value}</span>
                    <span class="grey-info-item__icon grey-info-item__icon--copy" data-copy-value="${step.value}">${SVG_COPY}</span>
                  </div>
                </div>
                <div class="divider divider--dashed"></div>
              `).join("")}

              <div class="grey-info-item">
                <span class="grey-info-item__label">付款方式</span>
                <div class="grey-info-item__value-group">
                  <span class="grey-info-item__value">银行卡转账</span>
                  <span class="grey-info-item__icon">${SVG_CHEVRON_RIGHT}</span>
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
  `;
}

function renderSelectCountry(state: AppState): string {
  const alphabet = "ABDFGHJKLMNPRSTXYZ".split("");
  const query = state.countrySearchQuery.trim().toLowerCase();

  // Filter countries if search query exists
  let filteredAllCountries: Record<string, Country[]> = allCountries;
  let isSearching = query.length > 0;

  if (isSearching) {
    filteredAllCountries = {};
    Object.entries(allCountries).forEach(([letter, list]) => {
      const filteredList = list.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.englishName.toLowerCase().includes(query) ||
          c.currency.toLowerCase().includes(query),
      );
      if (filteredList.length > 0) {
        filteredAllCountries[letter] = filteredList;
      }
    });
  }

  return `
    <section class="${screenClass(state.view, "select-country")}" data-view="select-country">
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
            ${SVG_SEARCH_ICON}
            <input type="text" id="country-search-input" placeholder="搜索" value="${state.countrySearchQuery}" />
          </div>
        </div>

        <div class="select-country-content">
          <h2 class="section-title-large">${isSearching ? "搜索结果" : "选择汇出的国家/地区"}</h2>

          ${
            !isSearching
              ? `
          <section class="countries-popular">
            <h3 class="section-subtitle">热门国家及地区</h3>
            <div class="popular-grid">
              ${popularCountries
                .map(
                  (c) => `
                <button class="popular-btn" type="button" data-country-id="${c.id}" data-target="home">
                  ${c.name}
                </button>
              `,
                )
                .join("")}
            </div>
          </section>
          `
              : ""
          }
          
          <section class="countries-all">
            <h3 class="section-subtitle">${isSearching ? "" : "全部国家地区 (按照拼音顺序排序)"}</h3>
            
            ${Object.entries(filteredAllCountries)
              .map(
                ([letter, list]) => `
              <div class="letter-section" id="letter-${letter}">
                <div class="letter-heading">${letter}</div>
                <div class="country-list">
                  ${list
                    .map(
                      (c) => `
                    <button class="country-item-btn" type="button" data-country-id="${c.id}" data-target="home">
                      <div class="country-item-flag">${renderFlag(c.flagKey)}</div>
                      <div class="country-item-info">
                        <div class="country-item-label">
                          <span class="name-zh">${c.name}</span>
                          <span class="divider">|</span>
                          <span class="currency-code">${c.currency}</span>
                        </div>
                        <div class="name-en">${c.englishName}</div>
                      </div>
                    </button>
                  `,
                    )
                    .join("")}
                </div>
              </div>
            `,
              )
              .join("")}
              
            ${isSearching && Object.keys(filteredAllCountries).length === 0 ? '<div class="no-results">未找到相关国家或地区</div>' : ""}
          </section>
        </div>

        ${!isSearching ? `<aside class="alphabet-index">${alphabet.map((char) => `<span data-letter="${char}">${char}</span>`).join("")}</aside>` : ""}
      </div>
    </section>
  `;
}

function renderUploadId(state: AppState): string {
  const passportImg = "./passport.png";

  return `
    <section class="${screenClass(state.view, "upload-id")} screen--dark" data-view="upload-id">
      <header class="top-bar top-bar--dark no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn" type="button" data-target="id-prep" aria-label="返回">
              ${SVG_BACK_ARROW_WHITE}
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
          <img src="${passportImg}" alt="护照示例" />
          <div class="preview-label">护照示例</div>
          ${
            state.isScanning
              ? `
              <div class="scan-overlay">
                <div class="scan-line"></div>
                <div class="scan-text">正在识别中...</div>
              </div>
            `
              : ""
          }
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
  `;
}

function renderProfile(state: AppState): string {
  const savings = stats.find(s => s.label === "累计节省金额");

  return `
    <section class="${screenClass(state.view, "profile")}" data-view="profile">
      ${renderHeader({ title: "个人中心", centerTitle: true })}
      
      <div class="screen__body screen__body--profile">
        <!-- Hero Section -->
        <section class="minimal-profile-hero">
          <div class="minimal-avatar">林</div>
          <div class="minimal-details">
            <h2 class="minimal-name">林晓辰</h2>
            <p class="minimal-status">已完成实名认证</p>
          </div>
        </section>

        <!-- Focused Savings Card -->
        ${savings ? `
          <div class="savings-card-large">
            <div class="savings-card-label">${savings.label}</div>
            <div class="savings-card-main">
              <span class="currency-symbol">¥</span>
              <span class="value">${savings.value}</span>
            </div>
            <div class="savings-card-footer">
              累计通过微汇款智能优选路径获取
            </div>
          </div>
        ` : ""}

        <!-- Action Panel -->
        <section class="action-panel-minimal">
          <button class="action-row" type="button">
            <div class="action-row__label">个人信息管理</div>
            <div class="action-row__right">
              ${SVG_CHEVRON_RIGHT}
            </div>
          </button>
          <div class="minimal-divider"></div>
          <button class="action-row" type="button">
            <div class="action-row__label">证件管理</div>
            <div class="action-row__right">
              <span class="action-row__status">已上传</span>
              ${SVG_CHEVRON_RIGHT}
            </div>
          </button>
          <div class="minimal-divider"></div>
          <button class="action-row" type="button">
            <div class="action-row__label">通用设置</div>
            <div class="action-row__right">
              ${SVG_CHEVRON_RIGHT}
            </div>
          </button>
        </section>

        <!-- History Preview (Simpler) -->
        <section class="history-preview-minimal">
          <div class="section-title-small">历史汇款记录</div>
          <div class="minimal-history-list">
             ${historyRecords.slice(0, 2).map(record => `
                <div class="history-item-mini">
                   <div class="history-item-mini__left">
                      <div class="title">${record.platform}</div>
                      <div class="date">${record.datetime.split(" ")[0]}</div>
                   </div>
                   <div class="history-item-mini__right">
                      <div class="amount">${record.amount}</div>
                      <div class="status">${record.status}</div>
                   </div>
                </div>
             `).join("")}
          </div>
          <button class="view-all-btn">查看全部记录</button>
        </section>
      </div>
    </section>
  `;
}

function renderFaceIntro(state: AppState): string {
  const userName = state.scanResults?.lastName ? `${state.scanResults.lastName}${state.scanResults.firstName}` : "李薇";
  
  return `
    <section class="${screenClass(state.view, "face-intro")}" data-view="face-intro">
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
            人脸识别功能验证你的身份信息，请确保为 ${userName} 本人操作
          </h2>
        </div>

        <div class="face-intro__spacer"></div>

        <div class="face-intro__footer">
          <label class="checkbox-row checkbox-row--wrap">
            <button class="custom-checkbox ${state.faceAgreementChecked ? "custom-checkbox--checked" : ""}" type="button" id="toggle-face-agreement">
            </button>
            <span class="checkbox-row__text checkbox-row__text--gray">
              您知悉并同意服务提供者授权腾讯按照《个人信息处理规则》实施个人信息处理并用于身份核验，详见<span class="text-link">《个人信息处理规则》</span>
            </span>
          </label>
          <button class="primary-button primary-button--face ${state.faceAgreementChecked ? "is-active" : ""}" type="button" ${state.faceAgreementChecked ? 'data-target="face-scan"' : ""} id="face-next-btn">下一步</button>
          <div class="help-center-link">
            <button type="button" class="text-btn">帮助中心</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFaceScan(state: AppState): string {
  return `
    <section class="${screenClass(state.view, "face-scan")}" data-view="face-scan">
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
  `;
}

function renderFaceWaiting(state: AppState): string {
  return `
    <section class="${screenClass(state.view, "face-waiting")}" data-view="face-waiting">
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
  `;
}

function renderFaceSuccess(state: AppState): string {
  const ICON_SIZE = 72;
  const SUCCESS_CHECK = `
    <div style="width: ${ICON_SIZE}px; height: ${ICON_SIZE}px; background-color: #07c160; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  `;

  return `
    <section class="${screenClass(state.view, "face-success")}" data-view="face-success">
       <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left"></div>
        </div>
      </header>

      <div class="screen__body screen__body--face-scan">
        <div class="face-success-icon-box" style="margin-top: 60px; text-align: center;">
           ${SUCCESS_CHECK}
        </div>
        <div class="scan-instructions" style="margin-top: 32px;">验证成功</div>
      </div>
    </section>
  `;
}

function renderSelectContact(state: AppState): string {
  const ICON_SEARCH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;opacity:0.6;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
  const ICON_CHEVRON_RIGHT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;opacity:0.3;"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

  return `
    <section class="${screenClass(state.view, "select-contact")} select-contact-screen" data-view="select-contact">
      <header class="contact-header">
        <div class="contact-header-left">
          <button type="button" data-target="platforms" class="contact-cancel-btn">取消</button>
        </div>
        <div class="contact-header-center">选择联系人</div>
        <div class="contact-header-right"></div>
      </header>

      <div class="contact-search-container">
        <div class="contact-search-bar">
          ${ICON_SEARCH}
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
              <div class="contact-name">“自己”的零钱</div>
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
            ${ICON_CHEVRON_RIGHT}
          </div>
        </div>

        <div class="contact-divider-label">最近聊天</div>

        <div class="contact-group overflow-visible">
          ${recipients.map(r => `
            <div class="contact-item" data-target="confirm-recipient" data-recipient-id="${r.id}">
              <div class="contact-avatar">
                <span class="contact-avatar-text">${r.avatarText}</span>
              </div>
              <div class="contact-info">
                <div class="contact-name">${r.name}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderConfirmRecipient(state: AppState): string {
  const recipient = state.selectedRecipient || { name: "未知联系人", avatarText: "?", realName: "", wechatId: "" };
  const currency = state.selectedCountry?.currency || "AUD";
  const rate = state.exchangeRate || 4.70;
  const receivedValue = (state.amount * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const platform = platforms.find(p => p.id === (state.selectedPlatformId || "platform-wise")) || platforms[0];
  
  const SVG_MORE_HORIZONTAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`;

  return `
    <section class="${screenClass(state.view, "confirm-recipient")} confirm-recipient-screen" data-view="confirm-recipient">
      <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left">
            <button class="header-left-btn back-button" type="button" data-target="select-contact" aria-label="返回">
              <span class="back-icon-arrow"></span>
            </button>
          </div>
          ${renderCapsuleMenu(true)}
        </div>
      </header>

      <div class="screen__body screen__body--confirm-recipient">
        <div class="confirmation-layout">
          <div class="recipient-header-row">
            <div class="recipient-header-text">
               <div class="recipient-row-top">
                 <span class="label">转账给</span>
                 <span class="name">${recipient.name} ${recipient.realName || ""}</span>
               </div>
               <div class="recipient-row-sub">
                 微信号: ${recipient.wechatId || "---"}
               </div>
            </div>
            <div class="recipient-header-avatar">
              ${recipient.avatarText}
            </div>
          </div>

          <div class="amount-entry-block">
            <div class="amount-label">转账金额</div>
            <div class="amount-field-luxury">
              <span class="currency-symbol">¥</span>
              <span class="amount-value">${receivedValue}</span>
            </div>
            
            <div class="payment-detail-list">
              <div class="payment-detail-row">
                <span class="detail-label">本次汇出金额</span>
                <span class="detail-value">${state.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}</span>
              </div>
              <div class="payment-detail-row">
                <span class="detail-label">平台服务费</span>
                <span class="detail-value">${platform.feeRaw === 0 ? "免手续费" : (platform.feeRaw?.toFixed(2) + " " + currency)}</span>
              </div>
              <div class="payment-detail-row">
                <span class="detail-label">当前汇率</span>
                <span class="detail-value">1 ${currency} ≈ ${rate.toFixed(4)} CNY</span>
              </div>
              <div class="payment-detail-row">
                <span class="detail-label">服务商</span>
                <span class="detail-value">${platform.name}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="direct-payment-entry">
          <div class="payment-modal__header payment-modal__header--direct">
            <span class="payment-modal__title">请输入支付密码</span>
          </div>
          
          <div class="payment-modal__body">
            <div class="passcode-discrete-container">
              ${(Array(6).fill(0)).map((_, i) => `<div class="passcode-box ${ (state.paymentPassword || "").length > i ? "is-filled" : ""}"></div>`).join("")}
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
  `;
}

function renderPaymentKeypad(_state: AppState): string {
  // This is now redundant but kept to avoid errors if referenced elsewhere
  return "";
}

function renderCreateSuccess(state: AppState): string {
  const ICON_SIZE = 72;
  const SUCCESS_CHECK = `
    <div style="width: ${ICON_SIZE}px; height: ${ICON_SIZE}px; background-color: #07c160; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  `;

  return `
    <section class="${screenClass(state.view, "create-success")}" data-view="create-success">
       <header class="top-bar top-bar--white no-border">
        <div class="top-bar__nav">
          <div class="header-col-left"></div>
        </div>
      </header>

      <div class="screen__body screen__body--face-scan">
        <div class="face-success-icon-box" style="margin-top: 60px; text-align: center;">
           ${SUCCESS_CHECK}
        </div>
        <div class="scan-instructions" style="margin-top: 32px;">创建成功</div>
      </div>
    </section>
  `;
}

function renderOrderLoading(state: AppState): string {
  if (!state.showOrderLoading) return "";

  return `
    <div class="hud-overlay">
      <div class="hud-box">
        <div class="hud-spinner"></div>
        <div class="hud-text">创建订单中</div>
      </div>
    </div>
  `;
}

function renderCapsuleMenu(isDark: boolean = false): string {
  return `
    <div class="wechat-capsule-menu ${isDark ? "wechat-capsule-menu--dark" : ""}">
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
  `;
}

function renderTabBar(state: AppState): string {
  const isTabVisible = ["home", "profile"].includes(state.view);
  if (!isTabVisible) return "";

  const tabs = [
    { id: "home", label: "首页", icon: SVG_TAB_HOME },
    { id: "profile", label: "个人", icon: SVG_TAB_PROFILE },
  ];

  return `
    <nav class="tab-bar">
      ${tabs.map(tab => `
        <button class="tab-item ${state.view === tab.id ? "is-active" : ""}" type="button" data-target="${tab.id}">
          <div class="tab-icon">${tab.icon}</div>
          <span class="tab-label">${tab.label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

export function renderApp(state: AppState): string {
  const isHome = state.view === "home";
  const isContact = state.view === "select-contact";
  
  return `
    <main class="app-shell" style="color: ${isHome ? "#ffffff" : "#111111"}">
      <div class="phone-shell" style="background: #f5f5f5">
        ${renderCapsuleMenu(!["home", "upload-id", "confirm", "face-scan", "face-waiting", "face-success", "face-intro"].includes(state.view))}
        ${renderHome(state)}
        ${renderAuthorize()}
        ${renderConfirm(state)}
        ${renderPlatforms(state)}
        ${renderGuide(state)}
        ${renderProfile(state)}
        ${renderSelectCountry(state)}
        ${renderUploadId(state)}
        ${renderIdPrep(state)}
        ${renderFaceIntro(state)}
        ${renderFaceScan(state)}
        ${renderFaceWaiting(state)}
        ${renderFaceSuccess(state)}
        ${renderSelectContact(state)}
        ${renderConfirmRecipient(state)}
        ${renderCreateSuccess(state)}
        
        <!-- Tab Bar -->
        ${renderTabBar(state)}

        <!-- Bottom Sheet Modals -->
        ${renderAuthModal(state)}
        ${renderCountrySheet(state)}
        ${renderPicker(state)}
        ${renderDatePicker(state)}
        ${renderOrderLoading(state)}
      </div>
    </main>
  `;
}