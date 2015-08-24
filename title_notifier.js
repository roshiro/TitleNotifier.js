/* ===========================================================
 * title_notifier.js
 * ===========================================================
 * Copyright 2014 Rafael Oshiro.
 * http://www.frontendjournal.com
 *
 * Lightweight, dependency-free javascript library to dynamically
 * show the number of unread notifications in your webpage title.
 *
 * https://github.com/roshiro/TitleNotifier.js
 * ========================================================== */

;(function() {
  var title = document.getElementsByTagName('title')[0],
      notificationTotal = 0,
      notificationMax = Number.MAX_VALUE,
      patt = /^\(\d*\+?\) /;
	
	
  var display=false;
  var tempTitle='';
  var ticktock;
  
  function flashTitle(){
  	title.text=display?tempTitle:title.text.replace(patt, "");
  	display=!display;
  }


  function updateTitle() {
  	 window.clearInterval(ticktock);
    if(notificationTotal === 0) {
      title.text = title.text.replace(patt, "");
      return;
    }

    notificationTotalstr = notificationTotal;

    if(notificationTotal > notificationMax) {
      notificationTotalstr = notificationMax + '+';
    }

	
    if(patt.exec(title.text)) {
      title.text = title.text.replace(patt, "("+ notificationTotalstr +") ");
    } else {
      title.text = "(" + notificationTotalstr + ") " + title.text;
    }
    
   
   
  	tempTitle=title.text;
   	ticktock=window.setInterval(flashTitle,500);
    
    
  };

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  /**
   * TitleNotifier Namespace.
   */
  window.titlenotifier = {

    /**
     * Adds 1 or {value} to total.
     *
     * @param {value} Number to be addeed to total. (Optional)
     */
    add: function(value) {
      if(typeof value === "undefined") {
        value = 1;
      }

      notificationTotal += parseInt(value,10);

      updateTitle();
    },

    /**
     * Subtracts 1 or {value} from total.
     *
     * @param {value} Number to be subtracted from total. (Optional)
     */
    sub: function(value) {
      if(typeof value === "undefined") {
        value = 1;
      }
      value = parseInt(value,10);

      if(notificationTotal === 0) {
        return;
      } else if(value > notificationTotal) {
        notificationTotal = 0;
      } else {
        notificationTotal -= parseInt(value,10);
      }

      updateTitle();
    },

    /**
     * Sets {value} to total.
     *
     * @param {value} Number to be set as total.
     */
    set: function(value) {
      if(!isNumber(value) || value < 0) {
        return;
      }

      notificationTotal = parseInt(value, 10);
      updateTitle();
    },

    /**
     * Resets total to zero and resets title to original version.
     */
    reset: function() {
      notificationTotal = 0;
      updateTitle();
    },

    /**
     * Returns the value of current notifications
     */
    get: function() {
      return notificationTotal;
    },

    /**
     * Sets {value} to total.
     *
     * @param {value} Number to be set as total.
     */
    max: function(value) {
      if(!isNumber(value) || value <= 0) {
        return;
      }

      notificationMax = parseInt(value, 10);
      updateTitle();
    }

  }

})();
