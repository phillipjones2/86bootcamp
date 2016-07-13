'use strict';

console.clear();

// Positioning
// Closures
// Debounce

// http://emberapp.com/

// http://flatinspire.com/style/one-page/

var thirdDiv = document.getElementById('third');
var image = document.getElementById('animateMe');

document.addEventListener('scroll', function () {
  var distanceFromBottom = image.getBoundingClientRect().bottom;

  if (distanceFromBottom <= 566) {
    image.classList.add('lightSpeedIn');
    image.classList.remove('lightSpeedOut');
  } else if (distanceFromBottom >= 566) {
    image.classList.remove('lightSpeedIn');
    image.classList.add('lightSpeedOut');
  }
});