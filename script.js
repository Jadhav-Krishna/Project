const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function video_hover_Animation() {
  var videodiv = document.querySelector("#video-div");
  var play = document.querySelector("#play");

  videodiv.addEventListener("mousemove", function (elem) {
    gsap.to(play, {
      scale: 1,
      opacity: 1,
      left: elem.x,
      top: elem.y,
    });
  });
  videodiv.addEventListener("mouseleave", function () {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
  });
}
video_hover_Animation();

function loader_animation() {
  gsap.from("#page1 h1", {
    y: 40,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.25,
  });
  gsap.from("#page1 #video-div", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity: 0,
  });
}
loader_animation();

var cursor = document.querySelector("cursor");
var product = document.querySelector("#page3 .product img");
product.addEventListener("mousemove", function (elem) {
  gsap.to(cursor, {
    left: elem.x,
    top: elem.y,
    opacity:1
  });
});
product.addEventListener("mouseleave", function (elem) {
  gsap.to(cursor, {
    left: elem.x,
    top: elem.y,
    opacity:0
  });
});
