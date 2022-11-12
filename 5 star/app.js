const allStars = document.querySelectorAll('.star')
let current_rating = document.querySelector('.current_rating')
let rating = document.querySelector('.star_rating')
const submit = document.getElementById('submit')
let cancel = document.querySelector('.cancel.cta')
allStars.forEach((star, i) => {
 star.addEventListener('click', function () {
  let current_star_level = i + 1;
  current_rating.innerHTML = `${current_star_level} of 5`
  allStars.forEach((star, j) => {
   if (current_star_level >= j + 1) {
    star.innerHTML = '&#9733'
   }
   else {
    star.innerHTML = '&#9734'
   }
  })
  if (current_star_level === 5) {

   window.location.href = '/startquiz/start.html';
   alert('Thank You!!!')
  }
  if (current_star_level === '') {

   // window.location.href = '/start.html';
   alert('Empty')
  }
  // if (current_star_level === 4) {

  //  window.location.href = '/start.html';
  //  alert('Thank You!!!')
  // }
  // if (current_star_level === 3) {

  //  window.location.href = '/start.html';
  //  alert('Thank You!!!')
  // }
  // if (current_star_level === 2) {

  //  window.location.href = '/start.html';
  //  alert('Thank You!!!')
  // }
  // if (current_star_level === 1) {


  // }

 })
});

submit.addEventListener('click', function () {
 window.location.href = '/startquiz/start.html';
 alert('Thank You!!!')


})