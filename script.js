//Заполняем body

let div = document.createElement("div");
div.className = "playing";
document.body.prepend(div);
const playing = document.querySelector(".playing");
playing.insertAdjacentHTML(
  "afterend",
  `<div class="field_size">
<div class="size size3">3x3</div>
<div class="size size4">4x4</div>
<div class="size size5">5x5</div>
<div class="size size6">6x6</div>
<div class="size size7">7x7</div>
<div class="size size8">8x8</div>
</div>`
);

const field_size = document.querySelector(".field_size");

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="menu">
  <form name=MyForm class ="time">
  <input name=stopwatch size=5 value="00:00:00" disabled>
</form>
    <botton class="btn_save">Save</botton>
    <botton class="btn_results">Results</botton>
    <div class="counter">move</div>
</div>`
);

const start = document.querySelector(".btn_start");
const stop = document.querySelector(".btn_stop");
const counter = document.querySelector(".counter");




let size = 100;
//координаты нулевой ячейки
let coordinates = {
  top: 0,
  left: 0,
  value: 0,
};
let arr = [];
arr.push(coordinates);
function move(index) {
  let number = arr[index];
  let leftDiv = Math.abs(coordinates.left - number.left);
  let topDiv = Math.abs(coordinates.top - number.top);
  //если разница координат между ячейками 1, то это
  //ячейка соседняя с пустой ячейкой
  if (leftDiv + topDiv !== 1) {
    return;
  }
  number.element.style.left = `${coordinates.left * size}px`;
  number.element.style.top = `${coordinates.top * size}px`;
  //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
  //а пустой присваеваем координаты ячейки(взаимозаменяем)
  let coordinatesLeft = coordinates.left;
  let coordinatesTop = coordinates.top;
  coordinates.left = number.left;
  coordinates.top = number.top;
  number.left = coordinatesLeft;
  number.top = coordinatesTop;
  //проверка на выигрыш
  let isVictory = arr.every((number) => {
    return number.value === number.top * 4 + number.left;
  });
  if (isVictory) {
    alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
  }
}
//замешиваем массив
function fift() {
  const result = [];
  for (let i = 1; i <= 15; i++) {
    result.push(i);
  }
  return result;
}
let arr1 = fift();

function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return arr;
}

let arrShuffle = shuffle(arr1);

//создаём и заполняем цифрами ячейки
for (let i = 1; i <= 15; i++) {
  const number = document.createElement("div");
  let value = arrShuffle[i - 1];
  number.className = "number";
  number.innerHTML = value;
  //задаём позиции для элементов
  let left = i % 4; //номер колонки
  let top = (i - left) / 4; //номер ряда

  arr.push({
    value: value,
    left: left,
    top: top,
    element: number,
  });
  number.style.left = `${left * size}px`;
  number.style.top = `${top * size}px`;
  playing.append(number);
  //изменяем положение ячейки при клике

  number.addEventListener("click", () => {
    move(i);
  });
 
}

///////////////////  8x8  /////////////////////////////////
var numbers = document.getElementsByClassName("number");
function eightRows() {
  counter.textContent = 0
  playing.innerHTML = "";
  playing.style.width = "400px";
  playing.style.height = "400px";
  size = 50;
  

  let coordinates = {
    top: 0,
    left: 0,
    value: 0,
  };
  let arr = [];
  arr.push(coordinates);
  function move(index) {
    let number = arr[index];
    let leftDiv = Math.abs(coordinates.left - number.left);
    let topDiv = Math.abs(coordinates.top - number.top);
    //если разница координат между ячейками 1, то это
    //ячейка соседняя с пустой ячейкой
    if (leftDiv + topDiv !== 1) {
      return;
    }
    number.element.style.left = `${coordinates.left * size}px`;
    number.element.style.top = `${coordinates.top * size}px`;
    //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
    //а пустой присваеваем координаты ячейки(взаимозаменяем)
    let coordinatesLeft = coordinates.left;
    let coordinatesTop = coordinates.top;
    coordinates.left = number.left;
    coordinates.top = number.top;
    number.left = coordinatesLeft;
    number.top = coordinatesTop;
    //проверка на выигрыш
    let isVictory = arr.every((number) => {
      return number.value === number.top * 8 + number.left;
    });
    if (isVictory) {
      alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
    }
  }

  function eight() {
    const result = [];
    for (let i = 1; i < 64; i++) {
      result.push(i);
    }
    return result;
  }
  arr1 = eight();
  arrSort = arr1.sort(() => Math.random() - 0.5);

  console.log(arrSort);

  for (let i = 1; i < 64; i++) {
    const number = document.createElement("div");
    let value = arrSort[i - 1];
    number.className = "number";
    number.innerHTML = value;
    //задаём позиции для элементов
    let left = i % 8; //номер колонки
    let top = (i - left) / 8; //номер ряда
    arr.push({
      value: value,
      left: left,
      top: top,
      element: number,
    });
    number.style.left = `${left * size}px`;
    number.style.top = `${top * size}px`;
    playing.append(number);
    number.addEventListener("click", () => {
      move(i);
    });
  }
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.fontSize = "20px";
  }
  count = 0
  counterMove ()
  ClearСlock()
  StartStop()
}

const size8 = document.querySelector(".size8");
size8.addEventListener("click", eightRows);

////////////////////////  4x4  /////////////////////////////
function four() {
  counter.textContent = 0
  playing.innerHTML = "";
  playing.style.width = "400px";
  playing.style.height = "400px";
  let size = 100;
  //координаты нулевой ячейки
  let coordinates = {
    top: 0,
    left: 0,
    value: 0,
  };
  let arr = [];
  arr.push(coordinates);
  function move(index) {
    let number = arr[index];
    let leftDiv = Math.abs(coordinates.left - number.left);
    let topDiv = Math.abs(coordinates.top - number.top);
    //если разница координат между ячейками 1, то это
    //ячейка соседняя с пустой ячейкой
    if (leftDiv + topDiv !== 1) {
      return;
    }
    number.element.style.left = `${coordinates.left * size}px`;
    number.element.style.top = `${coordinates.top * size}px`;
    //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
    //а пустой присваеваем координаты ячейки(взаимозаменяем)
    let coordinatesLeft = coordinates.left;
    let coordinatesTop = coordinates.top;
    coordinates.left = number.left;
    coordinates.top = number.top;
    number.left = coordinatesLeft;
    number.top = coordinatesTop;
    //проверка на выигрыш
    let isVictory = arr.every((number) => {
      return number.value === number.top * 4 + number.left;
    });
    if (isVictory) {
      alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
    }
  }
  //замешиваем массив
  function fift() {
    const result = [];
    for (let i = 1; i <= 15; i++) {
      result.push(i);
    }
    return result;
  }
  let arr1 = fift();

  function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    console.log(arr);
    return arr;
  }

  let arrShuffle = shuffle(arr1);

  //создаём и заполняем цифрами ячейки
  for (let i = 1; i <= 15; i++) {
    const number = document.createElement("div");
    let value = arrShuffle[i - 1];
    number.className = "number";
    number.innerHTML = value;
    //задаём позиции для элементов
    let left = i % 4; //номер колонки
    let top = (i - left) / 4; //номер ряда

    arr.push({
      value: value,
      left: left,
      top: top,
      element: number,
    });
    number.style.left = `${left * size}px`;
    number.style.top = `${top * size}px`;
    playing.append(number);
    //изменяем положение ячейки при клике

    number.addEventListener("click", () => {
      move(i);
    });
  
  }
  count = 0
  counterMove ()
  ClearСlock()
  StartStop()
}
const size4 = document.querySelector(".size4");
size4.addEventListener("click", four);
////////////////////////////  3x3  /////////////////////////////
function threeRows() {
  counter.textContent = 0
  playing.innerHTML = "";
  playing.style.width = "300px";
  playing.style.height = "300px";
  size = 100;
  

  let coordinates = {
    top: 0,
    left: 0,
    value: 0,
  };
  let arr = [];
  arr.push(coordinates);
  function move(index) {
    let number = arr[index];
    let leftDiv = Math.abs(coordinates.left - number.left);
    let topDiv = Math.abs(coordinates.top - number.top);
    //если разница координат между ячейками 1, то это
    //ячейка соседняя с пустой ячейкой
    if (leftDiv + topDiv !== 1) {
      return;
    }
    number.element.style.left = `${coordinates.left * size}px`;
    number.element.style.top = `${coordinates.top * size}px`;
    //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
    //а пустой присваеваем координаты ячейки(взаимозаменяем)
    let coordinatesLeft = coordinates.left;
    let coordinatesTop = coordinates.top;
    coordinates.left = number.left;
    coordinates.top = number.top;
    number.left = coordinatesLeft;
    number.top = coordinatesTop;
    //проверка на выигрыш
    let isVictory = arr.every((number) => {
      return number.value === number.top * 3 + number.left;
    });
    if (isVictory) {
      alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
    }
  }

  function eight() {
    const result = [];
    for (let i = 1; i < 9; i++) {
      result.push(i);
    }
    return result;
  }
  arr1 = eight();
  arrSort = arr1.sort(() => Math.random() - 0.5);

  console.log(arrSort);
  //for (let i = 0; i < arrSort.length; i++) {
  for (let i = 1; i < 9; i++) {
    const number = document.createElement("div");
    let value = arrSort[i - 1];
    number.className = "number";
    number.innerHTML = value;
    //задаём позиции для элементов
    let left = i % 3; //номер колонки
    let top = (i - left) / 3; //номер ряда
    arr.push({
      value: value,
      left: left,
      top: top,
      element: number,
    });
    number.style.left = `${left * size}px`;
    number.style.top = `${top * size}px`;
    playing.append(number);
    number.addEventListener("click", () => {
      move(i);
    });
  }
  count = 0
  counterMove ()
  ClearСlock()
  StartStop()
}

const size3 = document.querySelector(".size3");
size3.addEventListener("click", threeRows);
/////////////  6x6  ///////////////
function sixRows() {
  counter.textContent = 0
  playing.innerHTML = "";
  playing.style.width = "300px";
  playing.style.height = "300px";
  size = 50;
  

  let coordinates = {
    top: 0,
    left: 0,
    value: 0,
  };
  let arr = [];
  arr.push(coordinates);
  function move(index) {
    let number = arr[index];
    let leftDiv = Math.abs(coordinates.left - number.left);
    let topDiv = Math.abs(coordinates.top - number.top);
    //если разница координат между ячейками 1, то это
    //ячейка соседняя с пустой ячейкой
    if (leftDiv + topDiv !== 1) {
      return;
    }
    number.element.style.left = `${coordinates.left * size}px`;
    number.element.style.top = `${coordinates.top * size}px`;
    //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
    //а пустой присваеваем координаты ячейки(взаимозаменяем)
    let coordinatesLeft = coordinates.left;
    let coordinatesTop = coordinates.top;
    coordinates.left = number.left;
    coordinates.top = number.top;
    number.left = coordinatesLeft;
    number.top = coordinatesTop;
    //проверка на выигрыш
    let isVictory = arr.every((number) => {
      return number.value === number.top * 6 + number.left;
    });
    if (isVictory) {
      alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
    }
  }

  function eight() {
    const result = [];
    for (let i = 1; i < 36; i++) {
      result.push(i);
    }
    return result;
  }
  arr1 = eight();
  arrSort = arr1.sort(() => Math.random() - 0.5);

  console.log(arrSort);
  
  for (let i = 1; i < 36; i++) {
    const number = document.createElement("div");
    let value = arrSort[i - 1];
    number.className = "number";
    number.innerHTML = value;
    //задаём позиции для элементов
    let left = i % 6; //номер колонки
    let top = (i - left) / 6; //номер ряда
    arr.push({
      value: value,
      left: left,
      top: top,
      element: number,
    });
    number.style.left = `${left * size}px`;
    number.style.top = `${top * size}px`;
    playing.append(number);
    number.addEventListener("click", () => {
      move(i);
    });
  }
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.fontSize = "20px";
  }
  count = 0
  counterMove ()
  ClearСlock()
  StartStop()
}
const size6 = document.querySelector(".size6");
size6.addEventListener("click", sixRows);
///////////  7x7  //////////////////////

function sevenRows() {
  counter.textContent = 0
  playing.innerHTML = "";
  playing.style.width = "350px";
  playing.style.height = "350px";
  size = 50;
  

  let coordinates = {
    top: 0,
    left: 0,
    value: 0,
  };
  let arr = [];
  arr.push(coordinates);
  function move(index) {
    let number = arr[index];
    let leftDiv = Math.abs(coordinates.left - number.left);
    let topDiv = Math.abs(coordinates.top - number.top);
    //если разница координат между ячейками 1, то это
    //ячейка соседняя с пустой ячейкой
    if (leftDiv + topDiv !== 1) {
      return;
    }
    number.element.style.left = `${coordinates.left * size}px`;
    number.element.style.top = `${coordinates.top * size}px`;
    //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
    //а пустой присваеваем координаты ячейки(взаимозаменяем)
    let coordinatesLeft = coordinates.left;
    let coordinatesTop = coordinates.top;
    coordinates.left = number.left;
    coordinates.top = number.top;
    number.left = coordinatesLeft;
    number.top = coordinatesTop;
    //проверка на выигрыш
    let isVictory = arr.every((number) => {
      return number.value === number.top * 7 + number.left;
    });
    if (isVictory) {
      alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
    }
  }

  function eight() {
    const result = [];
    for (let i = 1; i < 49; i++) {
      result.push(i);
    }
    return result;
  }
  arr1 = eight();
  arrSort = arr1.sort(() => Math.random() - 0.5);

  console.log(arrSort);
  
  for (let i = 1; i < 49; i++) {
    const number = document.createElement("div");
    let value = arrSort[i - 1];
    number.className = "number";
    number.innerHTML = value;
    //задаём позиции для элементов
    let left = i % 7; //номер колонки
    let top = (i - left) / 7; //номер ряда
    arr.push({
      value: value,
      left: left,
      top: top,
      element: number,
    });
    number.style.left = `${left * size}px`;
    number.style.top = `${top * size}px`;
    playing.append(number);
    number.addEventListener("click", () => {
      move(i);
    });
  }
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.fontSize = "20px";
  }
  count = 0
  counterMove ()
  ClearСlock()
  StartStop()
}

const size7 = document.querySelector(".size7");
size7.addEventListener("click", sevenRows);
//////////////  5x5  //////////////////////////
function fiveRows() {
  counter.textContent = 0
  playing.innerHTML = "";
  playing.style.width = "350px";
  playing.style.height = "350px";
  size = 50;
  

  let coordinates = {
    top: 0,
    left: 0,
    value: 0,
  };
  let arr = [];
  arr.push(coordinates);
  function move(index) {
    let number = arr[index];
    let leftDiv = Math.abs(coordinates.left - number.left);
    let topDiv = Math.abs(coordinates.top - number.top);
    //если разница координат между ячейками 1, то это
    //ячейка соседняя с пустой ячейкой
    if (leftDiv + topDiv !== 1) {
      return;
    }
    number.element.style.left = `${coordinates.left * size}px`;
    number.element.style.top = `${coordinates.top * size}px`;
    //координатам ячейки(number.left) присваеваем координаты пустой ячейки(coordinates.left ),
    //а пустой присваеваем координаты ячейки(взаимозаменяем)
    let coordinatesLeft = coordinates.left;
    let coordinatesTop = coordinates.top;
    coordinates.left = number.left;
    coordinates.top = number.top;
    number.left = coordinatesLeft;
    number.top = coordinatesTop;
    //проверка на выигрыш
    let isVictory = arr.every((number) => {
      return number.value === number.top * 7 + number.left;
    });
    if (isVictory) {
      alert("Ура! Вы решили головоломку за ##: ## и N ходов!");
    }
  }

  function eight() {
    const result = [];
    for (let i = 1; i < 49; i++) {
      result.push(i);
    }
    return result;
  }
  arr1 = eight();
  arrSort = arr1.sort(() => Math.random() - 0.5);

  console.log(arrSort);

  for (let i = 1; i < 49; i++) {
    const number = document.createElement("div");
    let value = arrSort[i - 1];
    number.className = "number";
    number.innerHTML = value;
    //задаём позиции для элементов
    let left = i % 7; //номер колонки
    let top = (i - left) / 7; //номер ряда
    arr.push({
      value: value,
      left: left,
      top: top,
      element: number,
    });
    number.style.left = `${left * size}px`;
    number.style.top = `${top * size}px`;
    playing.append(number);
    number.addEventListener("click", () => {
      move(i);
    });
  }
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.fontSize = "20px";
  }
  count = 0
    counterMove ()
    ClearСlock()
  StartStop()
}


const size5 = document.querySelector(".size5");
size5.addEventListener("click", fiveRows);

//счётчик ходов

let count = 0
function counterMove () {
  document.querySelectorAll(".number").forEach(function(element) {
    
      element.addEventListener("click", function() {
      counter.innerHTML = 'moves:'+' '+(count = count + 1)
    });
  
  });
  }
  counterMove ()

  window.onload = () => {
    StartStop();
  }
  
  //объявляем переменные
  var base = 60;
  var clocktimer, dateObj, dh, dm, ds, ms;
  var readout = '';
  var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;
  
  //функция для очистки поля
  function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00';
    document.MyForm.stopwatch.value = readout;
  }
  
  //функция для старта секундомера
  function StartTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
      s++;
    }
    if (s >= (m * base)) {
      ts = 0;
      m++;
    } else {
      ts = parseInt((ms / 100) + s);
      if (ts >= base) {
        ts = ts - ((m - 1) * base);
      }
    }
    if (m > (h * base)) {
      tm = 1;
      h++;
    } else {
      tm = parseInt((ms / 100) + m);
      if (tm >= base) {
        tm = tm - ((h - 1) * base);
      }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
      ms = 0;
    }
    if (ms == 0) {
      ms = '00';
    }
    if (ms > 0 && ms <= 9) {
      ms = '0' + ms;
    }
    if (ts > 0) {
      ds = ts;
      if (ts < 10) {
        ds = '0' + ts;
      }
    } else {
      ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
      if (dm < 10) {
        dm = '0' + dm;
      }
    } else {
      dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
      if (dh < 10) {
        dh = '0' + dh;
      }
    } else {
      dh = '00';
    }
    readout = dh + ':' + dm + ':' + ds;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
  }
  
  //Функция запуска и остановки
  function StartStop() {
    if (init == 0) {
      ClearСlock();
      dateObj = new Date();
      StartTIME();
      init = 1;
    } else {
      clearTimeout(clocktimer);
      init = 0;
    }
  }