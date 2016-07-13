console.clear();

// Positioning
// Closures
// Debounce

// http://emberapp.com/

// http://flatinspire.com/style/one-page/


const thirdDiv = document.getElementById('third');
const image = document.getElementById('animateMe');

document.addEventListener('scroll', () => {
  const distanceFromBottom = image.getBoundingClientRect().bottom;
  
  if (distanceFromBottom <= 566) {
    image.classList.add('lightSpeedIn');
    image.classList.remove('lightSpeedOut');
    
  } else if (distanceFromBottom >= 566) {
    image.classList.remove('lightSpeedIn');
    image.classList.add('lightSpeedOut');
  }
});