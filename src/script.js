module.exports = function winners(wait, pushResult, STREET_RACERS, N) {
  //конвертируем массив гонщиков в объект для более простой работы с ними
  let streetRacers = {};
  STREET_RACERS.forEach((el) => {
    streetRacers[el] = 1;
  });
  let disqualifiedList = new Set();
  let winnersList = [];

  //добавляем каждому гонщику callback на каждую контрольную точку, чтобы добавить возможность проверки жульничества
  for (let [name, controlPoint] of Object.entries(streetRacers)) {
    for (let i = 1; i < N; i++) {
      wait(name, controlPoint + 1, waitCallbackHandle(name, controlPoint));
    }
  }

  function waitCallbackHandle(name, controlPoint) {
    return function (message) {
      //если не было сообщения о потере соединения, если гонщик не дисквалифицирован и если еще есть призовые места, то...
      if (!message && !disqualifiedList.has(name) && winnersList <= 3) {
        //...проверяем, если гонщик прибыл на верную контрольную точку, то...
        if (streetRacers[name] + 1 == controlPoint) {
          //...засчитываем ему контрольную точку и проверяем, не финальная ли это была контрольная точка...
          streetRacers[name] += 1;
          if (streetRacers[name] >= N) {
            //...если финальная, то засчитываем ему победу и...
            winnersList.push(name);
            //...проверяем, если количество победителей достаточно - возвращаем победителей
            if (winnersList.length >= 3) {
              pushResult(winnersList);
            }
          }
        } else {
          disqualify(name);
        }
      }
    };
  }

  function disqualify(name) {
    disqualifiedList.add(name);
  }
};
