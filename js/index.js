let darkMode = localStorage.getItem('darkMode');
let toggle = document.querySelector(".dark-mode-btn");

const enableDarkMode = () => {
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
    enableDarkMode();
}

toggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 

    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {  
      disableDarkMode(); 
    }
  });
