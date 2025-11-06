let index = 0;
let slideInterval = setInterval(autoSlide, 5000); // In milliseconds ; Currently set to 5 seconds

const images = [
  "https://github.com/TwistedFury/MySite/blob/b3a16b429ba0ad6ee342ee2084530f8a59a30569/images/site_icon.ico",
  "https://github.com/TwistedFury/MySite/blob/b3a16b429ba0ad6ee342ee2084530f8a59a30569/images/site_icon.ico"
];

// ---- ADD: lightweight preloader (no path changes) ----
const _imgCache = new Map();

function preload(src) {
  if (!src || _imgCache.has(src)) return;
  const i = new Image();
  i.src = src;
  _imgCache.set(src, i);
}

function preloadAround(idx) {
  // Preload the next and previous images relative to the current index
  const next = images[(idx + 1) % images.length];
  const prev = images[(idx - 1 + images.length) % images.length];
  preload(next);
  preload(prev);
}
// ---- END ADD ----

// Preload all images ahead of time
const preloaded = [];
function preloadImages() {
  for (let src of images) {
    const img = new Image();
    img.src = src;
    preloaded.push(img);
  }
  console.log("Preloaded", preloaded.length, "images.");
}

function showImage(idx) {
  const imgElement = document.querySelector(".slideshow-image");
  imgElement.classList.remove("show");

  // Fetch from preloaded cache if available
  const nextSrc = preloaded[idx]?.src || images[idx];

  setTimeout(() => {
    imgElement.src = nextSrc;
    imgElement.classList.add("show");
  }, 1000); // matches your cooldown
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
  if (index === images.length - 1) {
    setTimeout(() => {
      clearInterval(slideInterval);
      console.log("Waiting...");
      slideInterval = setInterval(autoSlide, 5000);
    }, 10000); // 10s pause when wrapping around
    preloadAround(index);
  }
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
  if (index === images.length - 1) {
    setTimeout(() => {
      clearInterval(slideInterval);
      console.log("Waiting...");
      slideInterval = setInterval(autoSlide, 5000);
    }, 15000);
    preloadAround(index);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  preloadImages(); // Load everything up front
  showImage(index);
  preloadAround(index);
  document.getElementById("nextBtn").addEventListener("click", buttonNext);
  document.getElementById("prevBtn").addEventListener("click", buttonPrev);
});

function autoSlide() {
  console.log("Auto sliding to next image");
  nextImage();
}

function buttonNext() {
  nextImage();
  index++; // Adjust index since nextImage increments it
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 5000);
  console.log("Next button clicked");
}

function buttonPrev() {
  prevImage();
  index--; // Adjust index since prevImage increments it
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 5000);
  console.log("Previous button clicked");
}