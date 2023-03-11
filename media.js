let largeImg1 = document.getElementById("img1");
let largeImg2 = document.getElementById("img2");
let largeImg3 = document.getElementById("img3");
let largeImg4 = document.getElementById("img4");

function Img1() {
  largeImg1.style.transform = "scale(2)";
  largeImg1.style.transition = "transform 0.25s ease";
  setTimeout(() => {
    largeImg1.style.transform = "scale(1)";
  }, 5000);
}
function Img2() {
  largeImg2.style.transform = "scale(2)";
  largeImg2.style.transition = "transform 0.25s ease";
  setTimeout(() => {
    largeImg2.style.transform = "scale(1)";
  }, 5000);
}
function Img3() {
  largeImg3.style.transform = "scale(2)";
  largeImg3.style.transition = "transform 0.25s ease";
  setTimeout(() => {
    largeImg3.style.transform = "scale(1)";
  }, 5000);
}
function Img4() {
  largeImg4.style.transform = "scale(2)";
  largeImg4.style.transition = "transform 0.25s ease";
  setTimeout(() => {
    largeImg4.style.transform = "scale(1)";
  }, 5000);
}
