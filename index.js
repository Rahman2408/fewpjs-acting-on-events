// Your code here
const board = document.getElementById("game");
let dodger = document.getElementById("dodger");



function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers);
if (left > 0) {
  dodger.style.left = `${left - 10}px`;
}
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers);
if (left < 760) {
  dodger.style.left = `${left + 10}px`;
}
}

function moveDodgerDown() {
  let bottomNumbers = dodger.style.bottom.replace('px', '');
  let bottom = parseInt(bottomNumbers);
if (bottom > 0) {
  dodger.style.bottom = `${bottom - 10}px`;
}
}

function moveDodgerUp() {
  let bottomNumbers = dodger.style.bottom.replace('px', '');
  let bottom = parseInt(bottomNumbers);
if (bottom < 780) {
  dodger.style.bottom = `${bottom + 10}px`;
}
}

document.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'ArrowLeft':
      moveDodgerLeft()
      break;
    case 'ArrowRight':
      moveDodgerRight()
      break;
    case 'ArrowUp':
      moveDodgerUp()
      break;
    case 'ArrowDown':
      moveDodgerDown()
      break;
  }
});