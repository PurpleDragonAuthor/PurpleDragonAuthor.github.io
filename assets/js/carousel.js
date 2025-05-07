const images = ["01", "02", "03", "04"];
let currentIndex = 0;

const imageElements = document.querySelectorAll(".carousel-image");
const dotsContainer = document.getElementById("dots-container");

images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

function updateCarousel() {
  imageElements.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
  });
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

let interval = setInterval(showNextImage, 5000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextImage, 5000);
}

document.querySelector('.carousel').addEventListener("click", (e) => {
  if (e.target.classList.contains('carousel-image')) {
    showNextImage();
    resetInterval();
  }
});
