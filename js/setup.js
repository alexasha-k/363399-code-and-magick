'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

//  Функция для генерации случайного элемента массива

var randomNumberFromArr = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// Функция для получения случайного имени волшебника

var getWizardName = function () {
  var similarName = names[randomNumberFromArr(names)];
  var similarSurname = surnames[randomNumberFromArr(surnames)];
  return similarName + ' ' + similarSurname;
};

// Функция для получения цвета мантии волшебника

var getWizardCoatColor = function () {
  return coatColors[randomNumberFromArr(coatColors)];
};

// Функция для получения цвета глаз волшебника

var getWizardEyesColor = function () {
  return eyesColors[randomNumberFromArr(eyesColors)];
};


var similarListElement = document.querySelector('.setup-similar-list');

//  Функция создания DOM-элемента

var createDOMElement = function (el) {
  return el.content;
};

var similarWizardTemplate = createDOMElement(document.querySelector('#similar-wizard-template'));

var getWizards = function (num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    var obj = {
      name: getWizardName(),
      coatColor: getWizardCoatColor(),
      eyesColor: getWizardEyesColor()
    };
    arr.push(obj);
  }
  return arr;
};

var pers = getWizards(4);

//  Функция заполнения блока DOM-элементами

for (var i = 0; i < pers.length; i++) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = pers[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = pers[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = pers[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');

//  Открытие/закрытие окна настройки персонажа

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');

//  В этой функции пришлось убрать || evt.keyCode === 27
//  иначе при открытии окна с клавтатуры по enter оно сразу закрывается
var hideSetup = function (evt) {
  if (evt.keyCode === 27) {
    setup.classList.add('hidden');
  }
};

//  Открытие окна по клику
setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', hideSetup);
});

//  Закрытие окна по клику

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', hideSetup);
});

//  Открытие окна по нажатию Enter на клавиатуре

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', hideSetup);
  }
});

//  Закрытие окна по нажатию Enter на клавиатуре

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', hideSetup);
  }
});

//  Изменение цвета мантии персонажа по нажатию

var wizardCoatColorNumber = 0;
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

wizardCoat.addEventListener('click', function () {
  if (wizardCoatColorNumber < coatColors.length - 1) {
    wizardCoatColorNumber++;
  } else {
    wizardCoatColorNumber = 0;
  }
  wizardCoat.style.fill = coatColors[wizardCoatColorNumber];
  document.querySelector('input[name="coat-color"]').value = coatColors[wizardCoatColorNumber];
});

//  Изменение цвета глаз персонажа по нажатию

var wizardEyesColorNumber = 0;
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

wizardEyes.addEventListener('click', function () {
  if (wizardEyesColorNumber < eyesColors.length - 1) {
    wizardEyesColorNumber++;
  } else {
    wizardEyesColorNumber = 0;
  }
  wizardEyes.style.fill = eyesColors[wizardEyesColorNumber];
  document.querySelector('input[name="eyes-color"]').value = eyesColors[wizardEyesColorNumber];
});

//  Изменение цвета фаерболов по нажатию

var wizardFireballColorNumber = 0;
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

setupFireballWrap.addEventListener('click', function () {
  if (wizardFireballColorNumber < fireballColors.length - 1) {
    wizardFireballColorNumber++;
  } else {
    wizardFireballColorNumber = 0;
  }
  setupFireballWrap.style.background = fireballColors[wizardFireballColorNumber];
  document.querySelector('input[name="fireball-color"]').value = fireballColors[wizardFireballColorNumber];
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
