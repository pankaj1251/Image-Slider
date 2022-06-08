const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  //Get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");

  //check for next slide
  if (current.nextElementSibling) {
    //Add current to next sibling;
    current.nextElementSibling.classList.add("current");
  } else {
    //Add current to end;
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //Get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");

  //check for prev slide
  if (current.previousElementSibling) {
    //Add current to prev sibling;
    current.previousElementSibling.classList.add("current");
  } else {
    //Add current to end;
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

//Button events

next.addEventListener("click", (evnt) => {
  nextSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (evnt) => {
  prevSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//Auto slide (if auto is true)
if (auto) {
  //Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
