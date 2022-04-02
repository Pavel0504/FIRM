let item = document.querySelectorAll(".reviews_slider_items_item");
const itemLength = item.length;

const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");
let slider = [];
for (let i = 0; i < itemLength; i++) {
  slider[i] = item[i];
  item[i].remove();
}
let step = 0;
let offset = 0;

function burgerSlider() {
  let div = document.createElement("div");
  div = slider[slider.length - 1];
  div.classList.add("reviews_slider_items_item");

  document.querySelector(".reviews_slider_items").appendChild(div);

  div = slider[step];
  div.classList.add("reviews_slider_items_item");


  document.querySelector(".reviews_slider_items").appendChild(div);
  div = slider[step + 1];
  div.classList.add("reviews_slider_items_item");

  document.querySelector(".reviews_slider_items").appendChild(div);
  offset = 1;
}
function burgerSliderL() {
  if (step == slider.length - 1) {
    step = 1;
  } else {
    if (step == slider.length - 2) {
      step = 0;
    } else {
      step = step + 2;
    }
  }

  let div = document.createElement("div");
  div = slider[step];
  div.classList.add("reviews_slider_items_item");

  document.querySelector(".reviews_slider_items").appendChild(div);

  if (step == 0) {
    step = slider.length - 1;
  } else {
    step = step - 1;
  }

  offset = 1;
}

function left() {
  leftArrow.onclick = null;

  let slider2 = document.querySelectorAll(".reviews_slider_items_item");

  setTimeout(function () {
    slider2[0].remove();
    burgerSliderL();
    leftArrow.onclick = left;
  }, 600);
}

function burgerSliderR() {

  if (step == 0) {
    step = slider.length - 2;
  } else {
    if (step == 1) {
      step = slider.length - 1;
    } else {
      step = step - 2;
    }
  }

  let offset = -1;
  let div = document.createElement("div");
  div = slider[step];
  div.classList.add("reviews_slider_items_item");
  document.querySelector(".reviews_slider_items").insertBefore(div, items.firstElementChild);
  if (step == slider.length - 1) {
    step = 0;
  } else {
    step = step + 1;
  }

  offset = 1;
}

function right() {
  rightArrow.onclick = null;

  let slider2 = document.querySelectorAll(".reviews_slider_items_item");

  setTimeout(function () {
    slider2[slider2.length - 1].remove();
    burgerSliderR();
    rightArrow.onclick = right;
  }, 600);
}

burgerSlider();
step = 0;

leftArrow.onclick = left;
rightArrow.onclick = right;
