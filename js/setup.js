'use strict';

document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

//  Функция для генерации случайного элемента массива

var randomNumberFromArr = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// Функция для получения случайного имени волшебника

var getWizardName = function () {
  var wizardName;
  var similarName = names[randomNumberFromArr(names)];
  var similarSurname = surnames[randomNumberFromArr(surnames)];
  wizardName = similarName + ' ' + similarSurname;
  return wizardName;
};

// Функция для получения цвета мантии волшебника

var getWizardCoatColor = function () {
  var wizardCoatColor;
  wizardCoatColor = coatColors[randomNumberFromArr(coatColors)];
  return wizardCoatColor;
};

// Функция для получения цвета глаз волшебника

var getWizardEyesColor = function () {
  var wizardEyesColor;
  wizardEyesColor = eyesColors[randomNumberFromArr(eyesColors)];
  return wizardEyesColor;
};

var pers = [
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()},
  {
    name: getWizardName(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  }
];

var similarListElement = document.querySelector('.setup-similar-list');

//  Функция создания DOM-элемента

var createDOMElement = function (el) {
  return el.content;
};

var similarWizardTemplate = createDOMElement(document.querySelector('#similar-wizard-template'));

//  Функция заполнения блока DOM-элементами

for (var i = 0; i < pers.length; i++) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = pers[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = pers[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = pers[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');