burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')

navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
  rightnav.classList.toggle('visible-class');
  navList.classList.toggle('visible-class');
  navbar.classList.toggle('heightnav');

})