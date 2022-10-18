const menuBtn = document.querySelector('.nav_bar_toggle');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.nav_bar_list').classList.add('show_nav');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    document.querySelector('.nav_bar_list').classList.remove('show_nav');
    menuOpen = false;
  }
});