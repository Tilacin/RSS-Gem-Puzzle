//Заполняем body
/*
let div = document.createElement("div");
const body = document.getElementsByTagName("body");
div.classList.add("wrapper");
const wrap = document.querySelector(".wrapper");
document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="wrapper">
<div class="menu">
    <botton class="btn_start">Shuffle and start</botton>
    <botton class="btn_stop">Stop</botton>
    <botton class="btn_save">Save</botton>
    <botton class="btn_results">Results</botton>
</div>
<div  id="elem" class="playing_field4">
   <div class="number1 number number_size4"></div>
   <div class="number2 number number_size4"></div>
   <div class="number3 number number_size4"></div>
   <div class="number4 number number_size4"></div>
   <div class="number5 number number_size4"></div>
   <div class="number6 number number_size4"></div>
   <div class="number7 number number_size4"></div>
   <div class="number8 number number_size4"></div>

   <div class="number9 number number_size4"></div>
   <div class="number10 number number_size4"></div>
   <div class="number11 number number_size4"></div>
   <div class="number12 number number_size4"></div>
   <div class="number13 number number_size4"></div>
   <div class="number14 number number_size4"></div>
   <div class="number15 number number_size4"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size5"></div>
   <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size6"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size7"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
    <div class="number number_size8"></div>
</div>
<div class="field_size">
    <div class="size size3">3x3</div>
    <div class="size size4">4x4</div>
    <div class="size size5">5x5</div>
    <div class="size size6">6x6</div>
    <div class="size size7">7x7</div>
    <div class="size size8">8x8</div>
</div>


</div>`
);
//размер поля 4x4
//Заполняем  числами из массива
let size4 = document.querySelector(".size4");
const start = document.querySelector(".btn_start");
const stop = document.querySelector(".btn_stop");
let number = document.querySelectorAll(".number");
let playing = document.querySelector("#elem");
//перемешиваем массив
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
//Заполняем  числами из массива

let arrShuffle = shuffle(arr);

function startGame() {
  number.forEach(function (div, i) {
    div.innerHTML = arrShuffle[i];
  });
  shuffle(arr); //каждый вызов перемешиваем массив
}

//вешаем обработчик на кнопку старт
start.addEventListener("click", startGame);
stop.addEventListener("click", function () {
  alert("Эту кнопку, по заданию, реализовывать не нужно");
});

//--размер поля 5x5-------------------------------------------------------------------------------

let size5 = document.querySelector(".size5");
let number5 = document.querySelectorAll(".number_size5");
size5.addEventListener("click", function () {
  number5.forEach((elem) => (elem.style.display = "block"));
  elem.classList.add("playing_field5");
  
  let arr1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  let arrShuffle = shuffle(arr1);
  function startGame() {
    number.forEach(function (div, i) {
      div.innerHTML = arrShuffle[i];
    })
  shuffle(arr1)
  }
  startGame()
});
*/
let div = document.createElement("div");
div.className = "playing";
document.body.prepend(div);
const playing = document.querySelector(".playing");
//координаты первой ячейки
let coordinates = {
  top: 0,
  left: 0,
};
let size = 100;
//создаём и заполняем цифрами ячейки
for (let i = 1; i <= 15; i++) {
  const number = document.createElement("div");
  number.className = "number";
  number.innerHTML = i;
  //задаём позиции для элементов
  let left = i % 4;
  let top = (i - left) / 4;
  number.style.left = `${left * size}px`;
  number.style.top = `${top * size}px`;
  playing.append(number);
  //изменяем положение ячейки при клике
  
  number.addEventListener("click", () => {
    number.style.left = `${coordinates.left * size}px`;
    number.style.top = `${coordinates.top * size}px`;
  });

  
}
