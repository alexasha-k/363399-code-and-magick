'use strict';

(function () {

  window.renderStatistics = function (ctx, names, times) {

    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    var CLOUD_START_X = 100;
    var CLOUD_START_Y = 10;
    var GAP = 10;
    //  var CLOUD_ROUND = 30;
    var CLOUD_PADDING = 20;

    //  Поле для вывода результатов
    //  Тень
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';

    ctx.fillRect(CLOUD_START_X + GAP, CLOUD_START_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

    //  Основное поле
    ctx.fillStyle = '#fff';

    ctx.fillRect(CLOUD_START_X, CLOUD_START_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_START_X + CLOUD_PADDING, CLOUD_START_Y + 20);
    ctx.fillText('Список результатов:', CLOUD_START_X + CLOUD_PADDING, CLOUD_START_Y + 38);
    //  Гистограмма вывода результатов
    var BAR_HEIGHT = 150;
    var BAR_COLUMN_WIDTH = 40;
    var BAR_GAP_WIDTH = 50;
    var YOUR_BAR_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';
    var BAR_COLUMN_COLOR = '#2b5cfc';
    var YOUR = 'Вы';

    var getMaxElement = function (arr) {

      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    };
    var maxTime = getMaxElement(times);
    var barHeight = BAR_HEIGHT / maxTime;

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], (CLOUD_START_X + CLOUD_PADDING + (BAR_COLUMN_WIDTH * i) + (BAR_GAP_WIDTH * i)), CLOUD_HEIGHT - CLOUD_PADDING - 5);
      ctx.font = '14px PT Mono';
      ctx.fillText(Math.floor(times[i]), (CLOUD_START_X + CLOUD_PADDING + (BAR_COLUMN_WIDTH * i) + (BAR_GAP_WIDTH * i)), CLOUD_HEIGHT - 48 - barHeight * times[i]);
      if (names[i] === YOUR) {
        ctx.fillStyle = YOUR_BAR_COLUMN_COLOR;

      } else {
        ctx.globalAlpha = (Math.random() * 9 + 1) / 10; //  Специально сделала, чтобы прозрачность не была слишком бледной или яркой
        ctx.fillStyle = BAR_COLUMN_COLOR;
      }

      ctx.fillRect(CLOUD_START_X + CLOUD_PADDING + (BAR_COLUMN_WIDTH * i) + (BAR_GAP_WIDTH * i), CLOUD_HEIGHT - 30 - barHeight * times[i], BAR_COLUMN_WIDTH, barHeight * times[i]);
      ctx.globalAlpha = 1; // Иначе во втором раунде само поле и Гендальф станут полупрозрачными
    }

  };
})();
