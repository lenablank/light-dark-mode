const toggleSwitch = document.querySelector('input[type="checkbox"]');

// switch theme dynamically
function switchTheme(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
// event listener
toggleSwitch.addEventListener('change', switchTheme);