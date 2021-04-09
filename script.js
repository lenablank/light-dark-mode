const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image2');
const textBox = document.getElementById('text-box');

// dark or light images
function imageMode(color) {
    image1.src = `img/undraw_Nature_fun_re_${color}.svg`;
    image2.src = `img/undraw_adventure_map_${color}.svg`;
}

// dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// light mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// switch theme dynamically
function switchTheme(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}
// event listener
toggleSwitch.addEventListener('change', switchTheme);