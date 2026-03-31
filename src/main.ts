import "./styles.css";

import { allCountries, defaultExpandedRecordIds, popularCountries, recipients, staticFallbackRates, validViews } from "./data";
import type { AppState, ViewName } from "./types";
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

function getDefaultAmount(currency: string): number {
  const c = currency.toUpperCase();
  const rate = state.ratesCache[c] || staticFallbackRates[c] || 1.0;
  
  // Target at least 55 CNY to be safe
  const targetCNY = 55;
  const baseAmount = Math.ceil(targetCNY / rate);
  
  // If base amount is small, return 1000 as a clean default
  if (baseAmount <= 1000) return 1000;
  
  // Otherwise, round up to the nearest thousand
  return Math.ceil(baseAmount / 1000) * 1000;
}

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
  faceAgreementChecked: false,
  platformSort: "cheapest",
  paymentPassword: "",
  showPasswordInput: false,
  showOrderLoading: false,
  historyRecords: [...initialHistoryRecords],
  hasCompletedOnboarding: localStorage.getItem("wechat_onboarding_completed") === "true",
};

function updateAmountValidation(state: AppState): void {
  const rate = state.exchangeRate || state.ratesCache[state.selectedCountry?.currency || "AUD"] || 0.0002;
  // If rate is loading and we don't have a cache, hide warning to avoid false positive
  if (state.isRateLoading && !state.exchangeRate && !state.ratesCache[state.selectedCountry?.currency || "AUD"]) {
     state.showAmountWarning = false;
  } else {
     state.showAmountWarning = state.amount > 0 && (state.amount * rate < 50);
  }
}

function resolveViewFromHash(): ViewName {
  const hashValue = window.location.hash.replace("#", "");
  return validViewSet.has(hashValue as ViewName) ? (hashValue as ViewName) : "home";
}

function updateHash(view: ViewName): void {
  if (window.location.hash !== `#${view}`) {
    window.location.hash = view;
  }
}

async function startFaceScan() {
  // 1. Initial scanning state (handled by navigate('face-scan'))
  
  // 2. Wait 2.5 seconds then show 'waiting'
  setTimeout(() => {
    navigate("face-waiting");
    
    // 3. Wait another 1.5 seconds then show 'success'
    setTimeout(() => {
      navigate("face-success");

      // 4. Wait 1.5 seconds then finish and go to platforms
      setTimeout(() => {
          state.hasCompletedOnboarding = true;
          localStorage.setItem("wechat_onboarding_completed", "true");
          navigate("platforms");
      }, 1500);
    }, 1500);
  }, 2500);
}
function handlePickerScroll(list: HTMLElement) {
    if (!list) return;

    const items = list.querySelectorAll(".picker-item");
    const containerRect = list.getBoundingClientRect();
    const centerY = containerRect.top + containerRect.height / 2;

    let closestItem: HTMLElement | null = null;
    let minDistance = Infinity;

    items.forEach((item) => {
        const rect = (item as HTMLElement).getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);

        if (distance < minDistance) {
            minDistance = distance;
            closestItem = item as HTMLElement;
        }
    });

    if (closestItem) {
        const targetItem = closestItem as HTMLElement;
        
        // Remove old selected class from siblings
        items.forEach((item) => (item as HTMLElement).classList.remove("is-selected"));
        // Add new
        targetItem.classList.add("is-selected");

        // Sync to state without full re-render
        const ds = targetItem.dataset;
        if (ds.pickerOption && state.pickerValue !== ds.pickerOption) {
            state.pickerValue = ds.pickerOption;
        } else if (ds.dateYear && state.datePickerYear !== ds.dateYear) {
            state.datePickerYear = ds.dateYear;
        } else if (ds.dateMonth && state.datePickerMonth !== ds.dateMonth) {
            state.datePickerMonth = ds.dateMonth;
        } else if (ds.dateDay && state.datePickerDay !== ds.dateDay) {
            state.datePickerDay = ds.dateDay;
        }
    }
}

function render(): void {
  // Save current scroll positions if needed or skip global reset for specific views
  const isConfirm = state.view === "confirm";
  
  app.innerHTML = renderApp(state);
  
    // If picker is open, ensure the selected item is centered (instantly to avoid jump)
    if (state.showPicker || state.showDatePicker) {
        requestAnimationFrame(() => {
            const selectedItems = document.querySelectorAll(".picker-item.is-selected");
            selectedItems.forEach(selected => {
                // Instant center on full render (like open) to avoid "sliding from top"
                selected.scrollIntoView({ block: "center", behavior: "auto" });
            });

            // Attach scroll and wheel listeners to picker lists
            const lists = document.querySelectorAll(".picker-options-list");
            lists.forEach(list => {
                const l = list as HTMLElement;
                l.addEventListener("scroll", () => handlePickerScroll(l), { passive: true });
                
                // Scroll wheel step: one tick = one adjacent item (48px)
                l.addEventListener("wheel", (e: WheelEvent) => {
                    e.preventDefault();
                    const direction = e.deltaY > 0 ? 1 : -1;
                    l.scrollBy({ top: direction * 48, behavior: "smooth" });
                }, { passive: false });
            });
        });
    } else if (!isConfirm) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
}

function navigate(view: ViewName): void {
  state.view = view;
  updateHash(view);
  render();
}

function toggleRecord(recordId: string): void {
  const nextExpandedIds = new Set(state.expandedRecordIds);

  if (nextExpandedIds.has(recordId)) {
    nextExpandedIds.delete(recordId);
  } else {
    nextExpandedIds.add(recordId);
  }

  state.expandedRecordIds = nextExpandedIds;
  render();
}

async function fetchExchangeRate(targetCurrency: string): Promise<void> {
  // Reset rate
  state.exchangeRate = undefined;
  
  // Skip if it's CNY itself (though usually it's from foreign to CNY)
  if (targetCurrency === "CNY") {
    state.exchangeRate = 1;
    render();
    return;
  }

  state.isRateLoading = true;
  render();

  try {
    // Frankfurter API: https://api.frankfurter.app/latest?from=USD&to=CNY
    const response = await fetch(`https://api.frankfurter.app/latest?from=${targetCurrency}&to=CNY`);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    const data = await response.json();
    if (data.rates && data.rates.CNY) {
      const rate = data.rates.CNY;
      state.exchangeRate = rate;
      // Update cache
      state.ratesCache[targetCurrency] = rate;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Failed to fetch exchange rate:", error);
  } finally {
    state.isRateLoading = false;
    updateAmountValidation(state);
    render();
  }
}

/** Utility to show a simple toast message */
function showToast(message: string): void {
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Trigger entry animation
  setTimeout(() => toast.classList.add("visible"), 10);
  
  // Remove after duration
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

async function syncAllRates(): Promise<void> {
  try {
    // latest?base=CNY gives rates for all currencies relative to CNY
    const response = await fetch("https://api.frankfurter.app/latest?base=CNY");
    if (!response.ok) return;
    const data = await response.json();
    if (data.rates) {
      Object.entries(data.rates).forEach(([curr, val]) => {
        // Invert to get [Foreign] to CNY
        state.ratesCache[curr] = 1 / (val as number);
      });
      // Update current rate if it matches the selected country
      if (state.selectedCountry && state.ratesCache[state.selectedCountry.currency]) {
        state.exchangeRate = state.ratesCache[state.selectedCountry.currency];
        updateAmountValidation(state);
      }
      render();
    }
  } catch (e) {
    console.error("Batch sync failed", e);
  }
}


function startScan(): void {
  state.isScanning = true;
  render();

  // Simulate scanning for 2.5 seconds
  setTimeout(() => {
    state.isScanning = false;
    state.scanResults = {
      lastName: "张",
      firstName: "伟平",
      region: "中国",
      gender: "男",
      dob: "1990-01-01",
      sourceOfIncome: "工资",
      address: "上海市浦东新区世纪大道1号",
      postCode: "200000",
      city: "上海市",
    };
    navigate("confirm");
  }, 2500);
}

window.addEventListener("hashchange", () => {
  const nextView = resolveViewFromHash();
  if (nextView !== state.view) {
    state.view = nextView;
    render();
  }
});

app.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement | null;
  if (target && target.id === "country-search-input") {
    state.countrySearchQuery = target.value;
    
    // Targeted DOM updates for country search to avoid re-triggering the slide-up animation
    const body = document.querySelector(".country-sheet__body");
    const sidebarContainer = document.getElementById("country-sheet-sidebar-container");
    
    if (body) {
      body.innerHTML = renderCountrySheetList(state);
    }
    if (sidebarContainer) {
      sidebarContainer.innerHTML = renderCountrySheetSidebar(state);
    }
    
    return;
  }

  if (target && target.id === "transfer-amount-input") {
    // Keep it as raw as possible for real-time typing
    const val = target.value.replace(/[^0-9.]/g, "");
    state.rawAmountInput = val;
    
    const num = parseFloat(val);
    state.amount = !isNaN(num) ? num : 0;
    
    // Validation: Min 50 CNY
    updateAmountValidation(state);
    
    // Targeted DOM updates for zero-lag typing
    const receivedDisplay = document.getElementById("received-amount-display");
    const validationNote = document.getElementById("amount-validation-note");
    const underline = document.getElementById("amount-field-underline");
    
    const rate = state.exchangeRate || state.ratesCache[state.selectedCountry?.currency || "AUD"] || 0.0002;
    const receivedStr = state.isRateLoading && !state.exchangeRate 
      ? "..." 
      : (state.amount * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    if (receivedDisplay) receivedDisplay.textContent = receivedStr;
    
    if (validationNote) {
      if (state.showAmountWarning) validationNote.classList.add("visible");
      else validationNote.classList.remove("visible");
    }
    
    if (underline) {
      if (state.showAmountWarning) {
        underline.classList.add("is-error");
        underline.classList.remove("is-focused");
      } else {
        underline.classList.remove("is-error");
        if (state.isAmountFieldFocused) underline.classList.add("is-focused");
      }
    }
    
    // No full render() here!
    return;
  }

  if (target && target.id === "ps-amount-input") {
     const val = target.value.replace(/[^0-9.]/g, "");
     const num = parseFloat(val);
     if (!isNaN(num) && num > 0) {
        state.amount = num;
        
        // Re-render only the core parts of the platforms view to avoid focus loss if possible
        // But since the sort might change best platform, a full render() is simpler if we restore focus
        const currentFocus = document.activeElement as HTMLInputElement;
        const selectionStart = currentFocus?.selectionStart;
        const selectionEnd = currentFocus?.selectionEnd;
        
        render();
        
        // Restore focus
        const newFocus = document.getElementById("ps-amount-input") as HTMLInputElement;
        if (newFocus) {
           newFocus.focus();
           if (selectionStart !== null && selectionEnd !== null) {
              newFocus.setSelectionRange(selectionStart, selectionEnd);
           }
        }
     }
  }
});

app.addEventListener("keydown", (event) => {
  const target = event.target as HTMLInputElement | null;
  if (target && (target.id === "transfer-amount-input" || target.id === "ps-amount-input") && event.key === "Enter") {
    target.blur();
  }
});

app.addEventListener("focusin", (event) => {
  const target = event.target as HTMLInputElement | null;
  if (target && (target.id === "transfer-amount-input" || target.id === "ps-amount-input")) {
    state.isAmountFieldFocused = true;
    state.rawAmountInput = state.amount > 0 ? state.amount.toString() : "";
    
    // Targeted Update 1: Change value to raw
    target.value = state.rawAmountInput;
    
    // Targeted Update 2: Add focused class to underline if it exists
    const underline = document.getElementById("amount-field-underline");
    if (underline) {
      underline.classList.add("is-focused");
    }
    
    // Targeted Update 3: Cursor position
    target.setSelectionRange(target.selectionStart || target.value.length, target.selectionEnd || target.value.length);
    
    // NO render() here!
  }
});

app.addEventListener("focusout", (event) => {
  const target = event.target as HTMLInputElement | null;
  if (target && (target.id === "transfer-amount-input" || target.id === "ps-amount-input")) {
    state.isAmountFieldFocused = false;
    state.rawAmountInput = "";
    
    // Targeted Update 1: Change value to formatted
    target.value = state.amount > 0 
      ? state.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
      : "";
    
    // Targeted Update 2: Remove focused class
    const underline = document.getElementById("amount-field-underline");
    if (underline) {
      underline.classList.remove("is-focused");
    }
    
    // Call render() once done to sync global state
    render();
  }
});

app.addEventListener("click", (event) => {
  const target = event.target as HTMLElement | null;
  if (!target) {
    return;
  }

  // Handle country selection
  const countryTrigger = target.closest<HTMLElement>("[data-country-id]");
  if (countryTrigger?.dataset.countryId) {
    const countryId = countryTrigger.dataset.countryId;
    // Find country in allData or popular
    let found: any = popularCountries.find(c => c.id === countryId);
    if (!found) {
      Object.values(allCountries).forEach((list: any[]) => {
          const c = list.find(x => x.id === countryId);
          if (c) found = c;
      });
    }

    if (found) {
      state.selectedCountry = found;
      state.countrySearchQuery = "";
      
      const defaultAmount = getDefaultAmount(found.currency);
      state.amount = defaultAmount;
      state.rawAmountInput = defaultAmount.toString();
      
      // Recalculate warning
      const rate = state.exchangeRate || 0.0002624;
      state.showAmountWarning = state.amount > 0 && (state.amount * rate < 50);

      fetchExchangeRate(found.currency);
      
      // If we were in id-prep (with bottom sheet), close the sheet
      if (state.showCountrySheet) {
          state.showCountrySheet = false;
          state.countrySearchQuery = "";
          render();
          return;
      }

      // If we were in select-country view, return to the page that opened it
      if (state.view === "select-country") {
          navigate(state.selectCountryBackTarget || "home");
      }
    }
  }

  const navigationTrigger = target.closest<HTMLElement>("[data-target]");
  if (navigationTrigger?.dataset.target) {
    const targetView = navigationTrigger.dataset.target as ViewName | "start-scan";
    const isHeaderBack = navigationTrigger.classList.contains("header-left-btn");

    if (isHeaderBack && state.view === "platforms" && state.hasCompletedOnboarding && targetView === "confirm") {
      navigate("home");
      return;
    }

    if (isHeaderBack && state.view === "guide" && targetView === "platforms") {
      navigate(state.guideBackTarget || "platforms");
      return;
    }

    if (isHeaderBack && state.view === "select-country" && targetView === "home") {
      navigate(state.selectCountryBackTarget || "home");
      return;
    }

    if (targetView === "start-scan") {
      startScan();
      return;
    }

    // Capture platform selection if navigating from a platform card
    if (navigationTrigger.dataset.platformId) {
      state.selectedPlatformId = navigationTrigger.dataset.platformId;
    }

    if (navigationTrigger.dataset.recordId) {
      state.selectedRecordId = navigationTrigger.dataset.recordId;
      state.orderDetailsBackTarget = state.view;
    }

    // Reset search query when navigating away from select-country (or to it)
    if (targetView !== "select-country") {
        state.countrySearchQuery = "";
    }

    if (targetView === "select-country") {
      state.selectCountryBackTarget = state.view;
    }

    if (targetView === "guide") {
      state.guideBackTarget = state.view;
    }

    // Handle Skip Onboarding for returning users
    if (targetView === "authorize" || targetView === "id-prep") {
      if (state.hasCompletedOnboarding) {
        navigate("platforms");
        return;
      }
    }

    // Handle Auth Modal special logic - Moved to upload-id step
    if (targetView === "authorize") {
      navigate("id-prep");
      return;
    }

    if (targetView === "upload-id" && state.view === "id-prep" && !state.showAuthModal) {
      state.showAuthModal = true;
      render();
      return;
    }

    if (targetView === "upload-id") {
      if (state.isAuthorized) {
        navigate("upload-id");
        return;
      }
      state.showAuthModal = true;
      render();
      return;
    }

    if (validViewSet.has(targetView)) {
      if (state.showAuthModal) {
        state.isAuthorized = true;
        localStorage.setItem("wechat_auth_completed", "true");
        // Swap: go to upload-id after auth modal since it's now triggered from id-prep
        state.showAuthModal = false;
        navigate("upload-id");
        return;
      }
      
      // Handle face scan simulation
      if (targetView as string === "face-scan") {
        navigate("face-scan");
        startFaceScan();
        return;
      }

      // Handle contact selection state update
      const contactItem = navigationTrigger.closest<HTMLElement>("[data-recipient-id]");
      if (contactItem?.dataset.recipientId) {
        const rid = contactItem.dataset.recipientId;
        if (rid === "self-balance") {
          state.selectedRecipient = { id: "self-balance", name: "零钱", avatarText: "¥", wechatId: "current_user", realName: "", note: "" };
        } else if (rid === "self-card") {
          state.selectedRecipient = { id: "self-card", name: "银行卡", avatarText: "🏦", wechatId: "current_user", realName: "", note: "" };
        } else {
          state.selectedRecipient = recipients.find((r: any) => r.id === rid);
        }
      }

      state.showAuthModal = false; // Ensure modal is closed when navigating
      navigate(targetView);
      return;
    }
  }

  // Handle platform sort toggle
  const sortTrigger = target.closest<HTMLElement>("[data-sort]");
  if (sortTrigger?.dataset.sort) {
    state.platformSort = sortTrigger.dataset.sort as "cheapest" | "fastest";
    state.selectedPlatformId = undefined; // Reset selection on sort change
    render();
    return;
  }

  // Handle platform selection from list
  const platformSelectTrigger = target.closest<HTMLElement>("[data-select-platform-id]");
  if (platformSelectTrigger?.dataset.selectPlatformId) {
    state.selectedPlatformId = platformSelectTrigger.dataset.selectPlatformId;
    render();
    return;
  }

  // Handle face agreement toggle
  if (target.closest("#toggle-face-agreement")) {
    state.faceAgreementChecked = !state.faceAgreementChecked;
    render();
    return;
  }

  // Handle closing modal
  if (target.closest("[data-close-auth]")) {
    state.showAuthModal = false;
    render();
    return;
  }

  // Handle Bottom Sheet Logic
  if (target.closest("[data-open-country-sheet]")) {
    state.showCountrySheet = true;
    render();
    return;
  }

  if (target.hasAttribute("data-close-country-sheet-overlay") || target.closest("[data-close-country-sheet-btn]")) {
    state.showCountrySheet = false;
    state.countrySearchQuery = "";
    render();
    return;
  }

  const expandTrigger = target.closest<HTMLElement>("[data-expand-id]");
  if (expandTrigger?.dataset.expandId) {
    toggleRecord(expandTrigger.dataset.expandId);
  }

  // Handle Copy Actions
  const copyTrigger = target.closest<HTMLElement>("[data-copy-value]");
  if (copyTrigger) {
    const textToCopy = copyTrigger.getAttribute("data-copy-value");
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("复制成功");
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    }
    return;
  }

  // Handle gallery action
  const actionTrigger = target.closest<HTMLElement>("[data-action]");
  if (actionTrigger?.dataset.action === "open-gallery") {
    const input = document.getElementById("id-photo-input") as HTMLInputElement;
    if (input) input.click();
    return;
  }

  // Handle alphabet index click
  const letterTrigger = target.closest<HTMLElement>("[data-letter]");
  if (letterTrigger?.dataset.letter) {
    const letter = letterTrigger.dataset.letter;
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }


  // Picker Logic
  const pickerTrigger = target.closest<HTMLElement>(".picker-trigger");
  if (pickerTrigger) {
    state.showPicker = true;
    state.pickerFieldId = pickerTrigger.dataset.fieldId;
    state.pickerTitle = pickerTrigger.dataset.pickerTitle;
    state.pickerOptions = JSON.parse(pickerTrigger.dataset.pickerOptions || "[]");
    
    // Set initial value based on current state
    const fieldId = state.pickerFieldId;
    if (fieldId === "region") state.pickerValue = state.scanResults?.region || "中国";
    else if (fieldId === "gender") state.pickerValue = state.scanResults?.gender || "男";
    else if (fieldId === "sourceOfIncome") state.pickerValue = state.scanResults?.sourceOfIncome || "工资";
    
    render();
    return;
  }

  const pickerOption = target.closest<HTMLElement>("[data-picker-option]");
  if (pickerOption) {
    const val = pickerOption.dataset.pickerOption;
    if (val) {
        state.pickerValue = val;
        // Targeted Update: Toggle selection class without full re-render to avoid jump
        document.querySelectorAll(".picker-item").forEach(el => el.classList.remove("is-selected"));
        pickerOption.classList.add("is-selected");
        
        // Smooth scroll to target
        pickerOption.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    return;
  }

  if (target.closest("[data-close-picker]") || target.closest("[data-close-date-picker]") || target.hasAttribute("data-picker-backdrop")) {
    state.showPicker = false;
    state.showDatePicker = false;
    render();
    return;
  }

  if (target.closest("[data-confirm-picker]")) {
    if (state.pickerFieldId && state.pickerValue) {
        if (!state.scanResults) {
            state.scanResults = {
                lastName: "", firstName: "", region: "", gender: "", dob: "", sourceOfIncome: "", address: "", postCode: "", city: ""
            };
        }
        (state.scanResults as any)[state.pickerFieldId] = state.pickerValue;
    }
    state.showPicker = false;
    render();
    return;
  }

  // Date Picker Logic
  const dateTrigger = target.closest<HTMLElement>(".date-picker-trigger");
  if (dateTrigger) {
    const dob = dateTrigger.dataset.currentDob || "2002-01-01";
    const [y, m, d] = dob.split("-");
    state.showDatePicker = true;
    state.datePickerYear = y;
    state.datePickerMonth = m;
    state.datePickerDay = d;
    render();
    return;
  }

  const yearOpt = target.closest<HTMLElement>("[data-date-year]");
  if (yearOpt) {
    state.datePickerYear = yearOpt.dataset.dateYear;
    yearOpt.parentElement?.querySelectorAll(".picker-item").forEach(el => el.classList.remove("is-selected"));
    yearOpt.classList.add("is-selected");
    yearOpt.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }

  const monthOpt = target.closest<HTMLElement>("[data-date-month]");
  if (monthOpt) {
    state.datePickerMonth = monthOpt.dataset.dateMonth;
    monthOpt.parentElement?.querySelectorAll(".picker-item").forEach(el => el.classList.remove("is-selected"));
    monthOpt.classList.add("is-selected");
    monthOpt.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }

  const dayOpt = target.closest<HTMLElement>("[data-date-day]");
  if (dayOpt) {
    state.datePickerDay = dayOpt.dataset.dateDay;
    dayOpt.parentElement?.querySelectorAll(".picker-item").forEach(el => el.classList.remove("is-selected"));
    dayOpt.classList.add("is-selected");
    dayOpt.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  if (target.closest("[data-confirm-date-picker]")) {
    const newDob = `${state.datePickerYear}-${state.datePickerMonth}-${state.datePickerDay}`;
    if (!state.scanResults) {
        state.scanResults = {
            lastName: "", firstName: "", region: "", gender: "", dob: "", sourceOfIncome: "", address: "", postCode: "", city: ""
        };
    }
    state.scanResults.dob = newDob;
    state.showDatePicker = false;
    render();
    return;
  }

  if (target.closest("#trigger-payment")) {
    state.showPasswordInput = true;
    state.paymentPassword = "";
    render();
    return;
  }

  if (target.closest("#close-payment") || target.classList.contains("payment-modal-overlay")) {
    state.showPasswordInput = false;
    render();
    return;
  }

  const keypadBtn = target.closest<HTMLElement>(".key-cell");
  if (keypadBtn?.dataset.key) {
    const key = keypadBtn.dataset.key;
    let pwd = state.paymentPassword || "";
    
    if (key === "backspace") {
      state.paymentPassword = pwd.slice(0, -1);
    } else if (pwd.length < 6) {
      state.paymentPassword = pwd + key;
    }

    render();

    // Auto navigate on 6 digits
    if (state.paymentPassword?.length === 6) {
        setTimeout(() => {
          state.showPasswordInput = false;
          state.paymentPassword = "";
          state.showOrderLoading = true;
          render();

          // Simulate "Creating Order" for 2.5s
          setTimeout(() => {
            // Create a new order record
            const now = new Date();
            const dateStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            
            const currency = state.selectedCountry?.currency || "AUD";
            const platform = (state.selectedPlatformId ? initialHistoryRecords.find(p => p.id === state.selectedPlatformId) : null) || initialHistoryRecords[0]; 
            // Wait, initialHistoryRecords are HistoryRecords, not PlatformCards.
            // I should use state.selectedPlatformId to get the platform name.
            
            // Re-fetch platform name
            const platformObj = platforms.find((p: any) => p.id === (state.selectedPlatformId || "platform-wise"));
            
            state.showOrderLoading = false;
            
            // Success! Add to history
            const newRecordId = `record-${Date.now()}`;
            
            // Calculate final amount as it was in Confirm Recipient
            const baseRate = state.exchangeRate || state.ratesCache[currency] || 4.7059;
            const rateMultiplier = (platformObj?.rateRaw || 4.7059) / 4.7059;
            const rate = baseRate * rateMultiplier;
            const finalCNY = (state.amount - (platformObj?.feeRaw || 0)) * rate + (platformObj?.couponRaw || 0);

            const newRecord = {
              id: newRecordId,
              datetime: dateStr,
              platform: platformObj?.name || "微汇款",
              status: "处理中",
              amount: `¥ ${finalCNY.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              rate: rate.toFixed(4),
              fee: `¥ ${(platformObj?.feeRaw || 0).toFixed(2)}`,
              recipient: `${state.selectedRecipient?.name} ${state.selectedRecipient?.realName || ""}`,
              account: state.selectedRecipient?.wechatId || "---",
              remark: `WX-HK-${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${Math.floor(Math.random() * 900) + 100}`,
              feeDetail: `平台服务费 ¥${(platformObj?.feeRaw || 0).toFixed(2)} / 汇率差额 ¥0.00`,
              recipientId: state.selectedRecipient?.id,
            };
            
            state.historyRecords.unshift(newRecord);
            
            navigate("create-success");

            // Success screen for 1.5s
            setTimeout(() => {
              navigate("guide");
            }, 1500);
          }, 2500);
        }, 300);
    }
    return;
  }
});

// Sync input changes to state
document.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const fieldId = target.dataset.fieldId;
  
  if (fieldId) {
    if (!state.scanResults) {
        state.scanResults = {
            lastName: "", firstName: "", region: "", gender: "", dob: "", sourceOfIncome: "", address: "", postCode: "", city: ""
        };
    }
    (state.scanResults as any)[fieldId] = target.value;
  }
});

app.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;
  if (target && target.id === "id-photo-input") {
    if (target.files && target.files.length > 0) {
      startScan();
    }
  }
});

render();
syncAllRates();

// Fetch initial rate for the default country AU
if (state.selectedCountry) {
  fetchExchangeRate(state.selectedCountry.currency);
}
