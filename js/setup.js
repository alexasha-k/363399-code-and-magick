'use strict';

(function () {

  //  Функция создания DOM-элемента

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var getWizards = function (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      var obj = {
        name: window.util.getRandomArrElement(window.data.names) + ' ' + window.util.getRandomArrElement(window.data.surnames),
        coatColor: window.util.getRandomArrElement(window.data.coatColors),
        eyesColor: window.util.getRandomArrElement(window.data.eyesColors)
      };
      arr.push(obj);
    }
    return arr;
  };

  var pers = getWizards(4);

  //  Функция заполнения блока DOM-элементами
  var similarListElement = document.querySelector('.setup-similar-list');

  for (var i = 0; i < pers.length; i++) {

    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = pers[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = pers[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = pers[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
})();
