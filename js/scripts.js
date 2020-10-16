/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $(".plus-icon").click(function() {
        console.log(this)

        var id = $(this).attr("id");
        if(id.includes("Minus")){
            
            id = id.substring(0, id.length-5);
            console.log(id)
            var text = $(`#${id}T`)
            text.slideUp(200);  
            var plus = $(`#${id}`)
            plus.show();
            $(this).hide(); 
        }else{
            var text = $(`#${$(this).attr("id")}T`)
            text.slideDown(600);
            var minus = $(`#${$(this).attr("id")}Minus`)
            minus.show();
            $(this).hide();
        }

        
    });

    $(".plus-icon-down").click(function() {
        console.log(this)

        var id = $(this).attr("id");
        if(id.includes("Minus")){
            
            id = id.substring(0, id.length-5);
            console.log(id)
            var text = $(`#${id}T`)
            text.slideUp(200);  
            var plus = $(`#${id}`)
            plus.show();
            $(this).hide(); 
        }else{
            var text = $(`#${$(this).attr("id")}T`)
            text.slideDown(600);
            var minus = $(`#${$(this).attr("id")}Minus`)
            minus.show();
            $(this).hide();
        }
    });
})(jQuery); // End of use strict

