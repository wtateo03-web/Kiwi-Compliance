/* ==========================================================================
   Kiwi Compliance — interaction
   Motion is deliberately small: a few pixels, one pass, never looping.
   Everything degrades to a fully readable static page.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canObserve = 'IntersectionObserver' in window;

  /* ---------------------------------------------------------------- year */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ------------------------------------------------------- nav: scrolled */
  var nav = document.getElementById('nav');
  if (nav) {
    var setScrolled = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  /* --------------------------------------------------- nav: mobile menu */
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    var closeMenu = function () {
      toggle.setAttribute('aria-expanded', 'false');
      mobile.hidden = true;
    };
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobile.hidden = open;
    });
    mobile.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  /* ------------------------------------------------------------- reveals */
  var revealables = document.querySelectorAll('[data-reveal]');
  var staggered = document.querySelectorAll('[data-stagger]');

  var showAll = function (nodes) {
    Array.prototype.forEach.call(nodes, function (el) { el.classList.add('is-visible'); });
  };

  if (reduceMotion || !canObserve) {
    showAll(revealables);
    showAll(staggered);
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.1 });

    Array.prototype.forEach.call(revealables, function (el) { revealObserver.observe(el); });
    Array.prototype.forEach.call(staggered, function (el) { revealObserver.observe(el); });
  }

  /* ------------------------------------------------------------ counters */
  var formatNumber = function (n) {
    return n.toLocaleString('en-GB');
  };

  var runCount = function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;

    if (reduceMotion) {
      el.textContent = formatNumber(target);
      return;
    }

    var duration = 1000;
    var started = null;

    var frame = function (now) {
      if (started === null) started = now;
      var progress = Math.min(1, (now - started) / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNumber(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  };

  var counters = document.querySelectorAll('.count');

  if (reduceMotion || !canObserve) {
    Array.prototype.forEach.call(counters, runCount);
  } else {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCount(entry.target);
        countObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    Array.prototype.forEach.call(counters, function (el) { countObserver.observe(el); });
  }

  /* ------------------------------------------------------ proportion bar */
  var barSegments = document.querySelectorAll('.bar span[data-width]');
  var fillBar = function () {
    Array.prototype.forEach.call(barSegments, function (seg) {
      seg.style.width = seg.getAttribute('data-width') + '%';
    });
  };
  if (reduceMotion || !canObserve) {
    fillBar();
  } else {
    var bar = document.querySelector('.bar');
    if (bar) {
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          fillBar();
          barObserver.disconnect();
        });
      }, { threshold: 0.5 });
      barObserver.observe(bar);
    }
  }

  /* ----------------------------------------------------- dashboard tabs */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));

    var selectTab = function (tab, setFocus) {
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        t.setAttribute('tabindex', selected ? '0' : '-1');

        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        panel.hidden = !selected;

        if (selected) {
          // Replay the row stagger each time a panel is opened.
          var table = panel.querySelector('[data-stagger]');
          if (table && !reduceMotion) {
            table.classList.remove('is-visible');
            requestAnimationFrame(function () {
              requestAnimationFrame(function () { table.classList.add('is-visible'); });
            });
          } else if (table) {
            table.classList.add('is-visible');
          }
        }
      });
      if (setFocus) tab.focus();
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () { selectTab(tab, false); });

      tab.addEventListener('keydown', function (e) {
        var index = tabs.indexOf(tab);
        var next = null;

        if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];

        if (next) {
          e.preventDefault();
          selectTab(next, true);
        }
      });
    });

    /* Site rows drill through to the site view. */
    var openSiteView = function () {
      var target = document.getElementById('tab-sites');
      if (target) selectTab(target, true);
    };

    Array.prototype.forEach.call(document.querySelectorAll('[data-goto="sites"]'), function (row) {
      row.addEventListener('click', openSiteView);
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openSiteView();
        }
      });
    });
  }
})();
