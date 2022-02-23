var images = [
  "./dkkimg/c.png",
  "./dkkimg/a1.jpg",
  "./dkkimg/b2.jpg",
  "./dkkimg/d.jpg",
  "./dkkimg/e.jpg",
  "./dkkimg/f.jpg",
  "./dkkimg/g.jpg",
  "./dkkimg/h.jpg",
  "./dkkimg/i.jpg",
];

var imageHead = document.getElementById("image-head");
var i = 0;

setInterval(function () {
  imageHead.style.transition = "all 2.3s ease";
  imageHead.style.backgroundImage = "url(" + images[i] + ")";
  i = i + 1;
  if (i == images.length) {
    i = 0;
  }
}, 2500);

// navbar  color change

const navBar = document.querySelector(".navBar");

window.onscroll = function () {
  let top = window.scrollY;

  if (top >= 100) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
};

// end navBar color change
