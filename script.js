let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
dayNight.addEventListener("click", () => {
  banner.classList.toggle("banner-dark");
});
let typeEffect = new Typed("#text", {
  strings: ["Gaurav", "Software Developer", "Team Lead"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});
