const requestURL = "/json/masters.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((data) => {
    information(0, data);
  });

function information(index, data) {
  const jsonObj = data[index];

  const h3 = document.querySelector(".master_main_right_title");
  h3.textContent = jsonObj["master"];

  const p = document.querySelector(".master_main_right_text");
  p.textContent = jsonObj["info"];

  const image = document.querySelector(".master_main_img");
  image.src = jsonObj["img"];

  const next = document.querySelector(".master_bottom_right_text")
  const prev = document.querySelector(".master_bottom_left_text")
  
  next.onclick = function nextPage() {
    information(index + 1, data);
  }

  prev.onclick = function prevPage() {
    information(index - 1, data);
  }
}
