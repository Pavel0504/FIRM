var modal = document.getElementById("menu");
var btn = document.getElementById("link");
var close = document.getElementsByClassName("menu_main_close_img")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
