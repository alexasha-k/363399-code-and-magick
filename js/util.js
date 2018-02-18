'use strict';

window.util = (function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  //  Функция для генерации случайного элемента массива
  var randomNumber = function (num) {
    return Math.floor(Math.random() * num);
  };

  return {
    getRandomArrElement: function (arr) {
      return arr[randomNumber(arr.length)];
    },

    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();

      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };

})();
