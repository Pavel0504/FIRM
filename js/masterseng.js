const requestURL = "/json/masters.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((data) => {
    information(0, data);
  });

function information(index, data) {
  const jsonObj = data[index];

  const h = document.querySelector(".master_main_right_title");
  h.textContent = jsonObj["eng"];

  const ps = document.querySelector(".master_main_right_text");
  ps.textContent = jsonObj["info"];

  const images = document.querySelector(".master_main_img");
  images.src = jsonObj["img"];

  const next = document.querySelector(".master_bottom_right_text")
  const prev = document.querySelector(".master_bottom_left_text")
  
  next.onclick = function nextPage() {
    information(index + 1, data);
  }

  prev.onclick = function prevPage() {
    information(index - 1, data);
  }
}
