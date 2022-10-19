//Заполняем body
/*
let div = document.createElement("div")
const body = document.getElementsByTagName('body')
div.classList.add('wrapper')
const wrap = document.querySelector('.wrapper')
document.body.insertAdjacentHTML("afterbegin", `<div class="wrapper"></div>`);*/
let number = document.querySelectorAll('.number').forEach(function(div, i) {
    div.innerHTML = i*1+1
})
