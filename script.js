const closeBtn = document.querySelector(".ri-close-circle-line");
const openBtn = document.querySelector("nav i");

gsap.from("nav h1", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
gsap.from("nav i", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

var tl = gsap.timeline();
tl.to(openBtn, {
  display: "none",
});
tl.to(".sidebar", {
  right: 0,
  duration: 0.4,
});
tl.from(".sidebar h1", {
  x: 200,
  opacity: 0,
  duration: 0.2,
  stagger: 0.3,
});
tl.pause();
openBtn.addEventListener("click", function () {
  tl.play();
});
closeBtn.addEventListener("click", function () {
  tl.reverse();
});
