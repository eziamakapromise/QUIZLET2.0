const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
 preloader.classList.add("hide-preloader");
});


// (A) SMOOTH SCROLL TO TOP
const cancel = document.getElementById('cancel')
function totop() {
 window.scroll({
  top: 0, left: 0, behavior: "smooth"
 });
}
function removecancel() {
 if (window.scrollX >= 100) {
  cancel.classList.remove("cancel-btn");
  document.querySelector('.fa-xmark').style.display = block;
 }
 else {
  document.querySelector('.fa-xmark').style.display = none;
 }
}

// (B) SHOW/HIDE BUTTON
function togtop() {
 if (window.scrollY >= 100) {
  document.getElementById("backtop").classList.add("show");
  // cancel.classList.remove('a')
 } else {
  document.getElementById("backtop").classList.remove("show");
  // cancel.classList.add('a')
 }
}
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);

window.addEventListener('scroll', function () {
 const scrollHeight = window.pageYOffset;
 if (scrollHeight < 100) {
  console.log("helo");
 } else {
  console.log("belo");

 }
})

