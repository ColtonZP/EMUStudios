const toggleMenu = document.querySelector('.toggleMenu');
const ul = document.querySelector('UL');
const arrow = toggleMenu.querySelector('SVG');
const desc1 = document.querySelector('.desc1');
const but1 = document.querySelector('.but1');
const desc2 = document.querySelector('.desc2');
const but2 = document.querySelector('.but2');

let showingUl = false;
let showingDesc1 = false;
let showingDesc2 = false;

document.addEventListener('DOMContentLoaded', function () {
  toggleMenu.addEventListener('click', (e) => {
    if (showingUl === false) {
      arrow.style.transform = 'rotate(-180deg)';
      ul.style.maxHeight = '100vh';
      showingUl = true;
    } else {
      arrow.style.transform = 'rotate(0deg)';
      ul.style.maxHeight = '0px';
      showingUl = false;
    }
  })
  but1.addEventListener('click', (e) => {
    if (showingDesc1 === false) {
      but1.innerHTML = 'Show less';
      desc1.style.maxHeight = '100vh';
      showingDesc1 = true;
    } else {
      but1.innerHTML = 'Show more';
      desc1.style.maxHeight = '0px';
      showingDesc1 = false;
    }
  })
  but2.addEventListener('click', (e) => {
    if (showingDesc2 === false) {
      but2.innerHTML = 'Show less';
      desc2.style.maxHeight = '100vh';
      showingDesc2 = true;
    } else {
      but2.innerHTML = 'Show more';
      desc2.style.maxHeight = '0px';
      showingDesc2 = false;
    }
  })
});