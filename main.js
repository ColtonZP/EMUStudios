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

function showUl(e) {
  e.preventDefault();
  if (showingUl === false) {
    ul.style.maxHeight = '100vh';
    showingUl = true;
    arrow.style.transform = 'rotate(-180deg)';
  } else {
    ul.style.maxHeight = '0px';
    showingUl = false;
    arrow.style.transform = 'rotate(0deg)';
  }
}

function isMobile() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    || navigator.userAgent.match(/Opera Mini/i)
    || navigator.userAgent.match(/IEMobile/i)
  ) {
    return true;
  }
}
eventType = isMobile() ? 'touchstart' : 'click';
console.log(eventType);

document.addEventListener('DOMContentLoaded', function () {
  toggleMenu.addEventListener(eventType, showUl)
  btn1.addEventListener(eventType, _ => { toggleDesc(btn1, desc1) })
  btn2.addEventListener(eventType, _ => { toggleDesc(btn2, desc2) })
})
