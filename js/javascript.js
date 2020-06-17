window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.play-video').addEventListener('click',function(){
        document.querySelector('.modal-video').classList.add('show');
    });
    document.querySelector('.close-modal').addEventListener('click',function(){
        document.querySelector('.modal-video').classList.remove('show');
        let src = document.querySelector('.modal-video iframe').getAttribute('src');
        document.querySelector('.modal-video iframe').setAttribute('src',src);
    });
    document.querySelector('.open-menu').addEventListener('click',function(){
        document.querySelector('ul.list-menu').classList.add('show');
    });
    document.querySelector('.close-menu').addEventListener('click',function(){
        document.querySelector('ul.list-menu').classList.remove('show');
    });
    window.onscroll = function(){
        if (document.documentElement.scrollTop > 350) {
            document.querySelector("nav.nav-header").classList.add("active");
        }
        else{
            document.querySelector("nav.nav-header").classList.remove("active");
        }
    }
});