$(window).on("load", function () {

    "use strict";

/* ===================================
        Loading Timeout
 ====================================== */
$('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);
});

jQuery(function ($) {

    "use strict";

/* ===================================
    Side Menu
====================================== */

if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-menu .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}

/* ===================================
    Bottom Nav Appear
====================================== */

$(function () {
    var $win = $(window);
    jQuery(function($) {
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
                // alert("near bottom!");
                $('.sidenav-bottom').css('opacity','1');
                $('.sidenav-bottom').addClass('sidenav-bottom-fixed');
            }
            if($(window).scrollTop() + $(window).height() < $(document).height() - 300 && $(window).scrollTop() + $(window).height() > $(document).height() - 400 )  {
                $('.sidenav-bottom').css('opacity','0');
                $('.sidenav-bottom').removeClass('sidenav-bottom-fixed');
            }
        });
    });
});

if ($(window).width() <= 991) {
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40
        }, 200);
    });
}

/* ===================================
    Header Appear
====================================== */

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 260) { // Set position from top to add class
        $('.sidenav-bottom').css('opacity','0');
        $('header .inner-header').addClass('header-appear');
    }
    if($(this).scrollTop() < 260) {
        $('.sidenav-bottom').css('opacity','1');
        $('header .inner-header').removeClass('header-appear');
    }
});

/*===================================
    Go Top Scroll
====================================== */
$(function(){
    // Scroll Event
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 260) $('.go-top').addClass('active');
        if (scrolled < 260) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  100);
    });
});

/* ===================================
    Portfolio Carousel
====================================== */

$('.portfolio-carousel').owlCarousel({
    loop:true,
    margin:10,
    slideSpeed: 5000,
    slideTransition:'linear',
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
    }
});

$('.portfolio-right-arr').click(function() {
    var owl = $('.portfolio-carousel');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
});
$('.portfolio-left-arr').click(function() {
    var owl = $('.portfolio-carousel');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel');
});

/* ===================================
    Banner Carousel
====================================== */

$('.slider-carousel').owlCarousel({
    loop: true,
    margin: 10,
    slideSpeed: 5000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 450,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
    }
});

/* ===================================
    Testimonial Carousel
====================================== */

$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    slideSpeed: 5000,
    slideTransition:'linear',
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
    }
});

/* ===================================
     Wow Effects
======================================*/

var wow = new WOW(
    {
        boxClass:'wow',      // default
        animateClass:'animated', // default
        offset:0,          // default
        mobile:false,       // default
        live:true        // default
    }
);
    wow.init();
});


/* ===================================
     The Web Lab - Custom Scripts
======================================*/

// const btn = document.getElementById('contact_btn');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'the_web_lab_templateID';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

function sendMail(contact) {
    // emailjs.send("serviceID", "templateID", {
    emailjs.send("service_fyfx4bd_EMAT", "EMAT_2023", {
        "message": form.message.value,
        "from_name": form.from_name.value,
        "from_email": form.from_email.value,
        "phone_number": form.phone_number.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS - Message Sent", response);
                // alert('Message Sent!'); // the user will know that their message was sent successfully and is given feedback.
                setTimeout("location.href = 'MessageSent.html';", 10);
                document.getElementById("form").reset() // the form is reset after submit button is hit
            },
            function (error) {
                console.log("FAILED - Message NOT Sent!", error);
                alert(JSON.stringify(error))
            }
        );
    return false; // To block from loading a new page...
}

// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//   .fadeOut(1000)
//   .next()
//   .fadeIn(1000)
//   .end()
//   .appendTo('#slideshow');
// }, 3000);