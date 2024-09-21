let mode = 'dark';

const themeSwitcher = document.querySelector('.toggle');
const container = document.body;

themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.classList.add('light');
    container.classList.remove('dark');
  }else {
    mode = 'dark';
    container.classList.add('dark');
    container.classList.remove('light');
  }
});