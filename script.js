const hemubergerMenu = document.querySelector('.hemburger-menu');
const hemburgerclick = document.querySelector('.hemburger-click');



hemburgerclick.addEventListener('click',()=>{
    hemubergerMenu.classList.toggle('show');
    console.log("click")
})