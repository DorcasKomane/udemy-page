window.onload = function(){
    window.addEventListener('scroll', function(e){
        if(window.scrollY > 100){
            this.document.querySelector('header').classList.add('is-scrolling');
        }else{
            this.document.querySelector('header').classList.remove('is-scrolling');
        }
    });

    const menuBtn = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('is-active');
        sideMenu.classList.toggle('is-active');
    });
}