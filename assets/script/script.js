var typed = new Typed(".d-1", {
    strings:["WEB Developer", "Técnico de Informática", "WEB Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
});

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}
