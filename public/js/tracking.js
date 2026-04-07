/**
 * tracking.js
 * Click-area tracking: any click anywhere on the page (or specific zones)
 * auto-triggers the hidden button #hiddenTrackBtn and increments a counter.
 *
 * HOW IT WORKS:
 *  - A global click listener fires on every user click on the document.
 *  - It dispatches a programmatic click on #hiddenTrackBtn (the hidden button).
 *  - The hidden button's own listener increments the counter and fires analytics.
 *  - The counter badge is updated in the UI for demo visibility.
 *
 * In production, replace the console.log inside onHiddenBtnClick with your
 * real GA4 / GTM dataLayer push or pixel call.
 */

(function () {
  'use strict';

  /* ---- Config ---- */
  const DEBOUNCE_MS = 300;          // ignore rapid duplicate clicks
  const TRACK_ZONES = null;         // null = entire page; or selector e.g. '#calcCard, .who-section'

  /* ---- State ---- */
  let clickCount = 0;
  let lastClickTime = 0;

  /* ---- Elements ---- */
  const hiddenBtn   = document.getElementById('hiddenTrackBtn');
  const counterEl   = document.getElementById('trackCount');
  const counterBadge = document.getElementById('trackCounter');

  if (!hiddenBtn) {
    console.warn('[tracking.js] #hiddenTrackBtn not found. Tracking disabled.');
    return;
  }

  /* ---- Hidden button handler ---- */
  hiddenBtn.addEventListener('click', onHiddenBtnClick);

  function onHiddenBtnClick() {
    clickCount++;
    updateCounterUI();

    // =====================================================
    // 🔴 REPLACE THIS BLOCK with your real analytics call
    // =====================================================
    console.log('[TRACK] Hidden button fired. Total clicks:', clickCount);

    // Example: GA4 gtag event
    // if (typeof gtag === 'function') {
    //   gtag('event', 'page_interaction', {
    //     event_category: 'engagement',
    //     value: clickCount
    //   });
    // }

    // Example: GTM dataLayer push
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: 'hidden_btn_click',
    //   click_count: clickCount
    // });
  }

  /* ---- Global / Zone click listener ---- */
  function handleDocClick(e) {
    const now = Date.now();
    if (now - lastClickTime < DEBOUNCE_MS) return;  // debounce
    lastClickTime = now;

    // If zone filtering is enabled, check if click is inside a tracked zone
    if (TRACK_ZONES) {
      const zones = document.querySelectorAll(TRACK_ZONES);
      const insideZone = Array.from(zones).some(z => z.contains(e.target));
      if (!insideZone) return;
    }

    // Don't re-trigger if the hidden button itself was clicked (would loop)
    if (e.target === hiddenBtn) return;

    // Programmatically click the hidden button
    hiddenBtn.click();
  }

  document.addEventListener('click', handleDocClick, true);  // capture phase

  /* ---- UI update ---- */
  function updateCounterUI() {
    if (counterEl) counterEl.textContent = clickCount;
    if (counterBadge) {
      counterBadge.classList.add('track-counter--pulse');
      setTimeout(() => counterBadge.classList.remove('track-counter--pulse'), 400);
    }
  }

})();
