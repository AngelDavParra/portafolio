import '../sass/main.scss';
console.log('About page loaded');


const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('change', function() {
  document.body.style.overflow = this.checked ? 'hidden' : '';
});

const linkActive = document.querySelector('.active a');
linkActive.addEventListener('click', (e) => {
    e.preventDefault();
})