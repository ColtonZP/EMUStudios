const desc1 = document.querySelector(".desc1");
const but1 = document.querySelector(".but1");
const desc2 = document.querySelector(".desc2");
const but2 = document.querySelector(".but2");

let showingDesc1 = false;
let showingDesc2 = false;

document.addEventListener('DOMContentLoaded', function () {
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