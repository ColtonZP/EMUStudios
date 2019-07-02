const toggleMenu = document.querySelector('.toggleMenu');
const ul = document.querySelector('UL');
const arrow = toggleMenu.querySelector('SVG');
const desc1 = document.querySelector('.desc1');
const btn1 = document.querySelector('.btn1');
const desc2 = document.querySelector('.desc2');
const btn2 = document.querySelector('.btn2');

let showingUl = false;

function toggleDesc(btn, des) {
  if (btn.innerHTML === 'Show more') {
    des.style.maxHeight = '100vh';
    btn.innerHTML = 'Show less';
  } else {
    des.style.maxHeight = '0px';
    btn.innerHTML = 'Show more';
  }
}

function showUl() {
  if (showingUl === false) {
    arrow.style.transform = 'rotate(-180deg)';
    ul.style.maxHeight = '100vh';
    showingUl = true;
  } else {
    arrow.style.transform = 'rotate(0deg)';
    ul.style.maxHeight = '0px';
    showingUl = false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  toggleMenu.addEventListener('click', showUl)
  btn1.addEventListener('click', _ => { toggleDesc(btn1, desc1) })
  btn2.addEventListener('click', _ => { toggleDesc(btn2, desc2) })
})
