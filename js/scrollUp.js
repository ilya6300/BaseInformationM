const buttonUp = document.querySelector('#button-up');



  
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled >= 520)  {
        buttonUp.style.display = 'block';
    } else {
        buttonUp.style.display = 'none'; 
    }
    buttonUp.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
});
