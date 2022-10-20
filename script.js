//Заполняем body

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
<div class="playing_field4">
   <div class="number1 number"></div>
   <div class="number2 number"></div>
   <div class="number3 number"></div>
   <div class="number4 number"></div>
   <div class="number5 number"></div>
   <div class="number6 number"></div>
   <div class="number7 number"></div>
   <div class="number8 number"></div>

   <div class="number9 number"></div>
   <div class="number10 number"></div>
   <div class="number11 number"></div>
   <div class="number12 number"></div>
   <div class="number13 number"></div>
   <div class="number14 number"></div>
   <div class="number15 number"></div>
  
  
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
const start = document.querySelector(".btn_start");
const stop = document.querySelector(".btn_stop");
let number = document.querySelectorAll(".number");
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
let playing4 = document.querySelector(".playing_field4");
let playing5 = document.querySelector(".playing_field5");
let size5 = document.querySelector(".size5");
size5.addEventListener("click", function () {
  playing4.classList.toggle("playing_field5");
  document.body.insertAdjacentHTML(
    "beforeEnd",
    `<div class="number15 number"></div>
    <div class="number16 number"></div>
    <div class="number17 number"></div>
    <div class="number18 number"></div>
    <div class="number19 number"></div>
    <div class="number10 number"></div>
    <div class="number21 number"></div>
    <div class="number22 number"></div>
    <div class="number23 number"></div>
    <div class="number24 number"></div>`
  );
});
