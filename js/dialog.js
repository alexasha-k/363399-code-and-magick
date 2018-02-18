'use strict';

(function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  //  Открытие/закрытие окна настройки персонажа

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  //  Изменение цвета мантии персонажа по нажатию

  var wizardCoatColorNumber = 0;
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

  wizardCoat.addEventListener('click', function () {
    if (wizardCoatColorNumber < window.data.coatColors.length - 1) {
      wizardCoatColorNumber++;
    } else {
      wizardCoatColorNumber = 0;
    }
    wizardCoat.style.fill = window.data.coatColors[wizardCoatColorNumber];
    document.querySelector('input[name="coat-color"]').value = window.data.coatColors[wizardCoatColorNumber];
  });

  //  Изменение цвета глаз персонажа по нажатию

  var wizardEyesColorNumber = 0;
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  wizardEyes.addEventListener('click', function () {
    if (wizardEyesColorNumber < window.data.eyesColors.length - 1) {
      wizardEyesColorNumber++;
    } else {
      wizardEyesColorNumber = 0;
    }
    wizardEyes.style.fill = window.data.eyesColors[wizardEyesColorNumber];
    document.querySelector('input[name="eyes-color"]').value = window.data.eyesColors[wizardEyesColorNumber];
  });

  //  Изменение цвета фаерболов по нажатию

  var wizardFireballColorNumber = 0;
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  setupFireballWrap.addEventListener('click', function () {
    if (wizardFireballColorNumber < window.data.fireballColors.length - 1) {
      wizardFireballColorNumber++;
    } else {
      wizardFireballColorNumber = 0;
    }
    setupFireballWrap.style.background = window.data.fireballColors[wizardFireballColorNumber];
    document.querySelector('input[name="fireball-color"]').value = window.data.fireballColors[wizardFireballColorNumber];
  });

  //  Валидауция формы инпута имени на ввод минимально допустимого значения
  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов!');
    } else {
      target.setCustomValidity('');
    }
  });
})();
