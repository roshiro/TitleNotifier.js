/* ===========================================================
 * title_notifier.js
 * ===========================================================
 * Copyright 2014 Rafael Oshiro.
 * http://www.frontendjournal.com
 *
 * Lightweight, dependency-free javascript library to dinamically
 * show the number of unread notifications in your webpage title.
 *
 * https://github.com/roshiro/TitleNotifier.js
 * ========================================================== */

(function() {
  var title = document.getElementsByTagName('title')[0],
      notificationTotal = 0,
      patt = /\(\d*\) /;

  function updateTitle() {
    if(notificationTotal === 0) {
      title.text = title.text.replace(patt, "");
      return;
    }

    if(patt.exec(title.text)) {
      title.text = title.text.replace(patt, "("+ notificationTotal +") ");
    } else {
      title.text = "(" + notificationTotal + ") " + title.text;
    }
  };

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  window.titlenotifier = {

    add: function(value) {
      if(typeof value === "undefined") {
        value = 1;
      }

      notificationTotal += value;

      updateTitle();
    },

    sub: function(value) {
      if(typeof value === "undefined") {
        value = 1;
      }

      if(notificationTotal === 0) {
        return;
      }

      notificationTotal -= value;

      updateTitle();
    },

    set: function(value) {
      if(!isNumber(value) || value < 0) {
        return;
      }

      notificationTotal = value;
      updateTitle();
    },

    reset: function() {
      notificationTotal = 0;
      updateTitle();
    }

  }

})();
