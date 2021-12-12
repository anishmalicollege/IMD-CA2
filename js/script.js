$(document).ready(function(){
    $(window).scroll(function(){
        // Reactive navbar follow parameters
        if(this.scrollY > 150){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll up button parameters
        if(this.scrollY > 700){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // Scroll to top Button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Tab for windowed menu Script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text Script
    var typed = new Typed(".typing-a", {
        strings: ["Student", "Learner", "Developer"],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing-b", {
        strings: ["Student", "Learner", "Developer"],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true
    });

    // Carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-left"></i>'],
        responsive: {
            0:{
                items: 1,
                nav: false
            }
        }
    });
});