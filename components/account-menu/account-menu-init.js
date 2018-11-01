(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
  (factory());
}(this, (function () { 'use strict';

  if (document.querySelector('[data-module="hmrc-account-menu"]')) {
    window.HMRC.accountMenu.init();
  }

})));
