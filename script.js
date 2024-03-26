document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[n].classList.add("active");
  }

  function prevSlide() {
    if (currentSlide === 0) {
      return;
    }
    currentSlide--;
    showSlide(currentSlide);
    updateButtons();
  }

  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      return;
    }
    currentSlide++;
    showSlide(currentSlide);
    updateButtons();
  }

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(currentSlide);
  updateButtons();

  function updateButtons() {
    if (currentSlide === 0) {
      prevButton.style.display = "none";
      nextButton.style.display = "block";
    } else if (currentSlide === slides.length - 1) {
      prevButton.style.display = "block";
      nextButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
      nextButton.style.display = "block";
    }
  }
});
