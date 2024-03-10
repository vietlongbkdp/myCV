function zoomImages(className) {
    $(`.${className}`).unbind("click").on("click", function() {
      $("#div-zoom-area").css("display", "block");
      $("#img-zoom-area-content").attr("src", $(this)[0].src);
  
      $("#div-zoom-area").on("click", function() {
        $(this).css("display", "none");
      });
    });
  }
  
  (function($) {
    "use strict";

    $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function() {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate({
            scrollTop: (target.offset().top)
          }, 500, "easeInOutExpo");
          return false;
        }
      }
    });
  
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
      target: "#sideNav"
    });
    
    if (window.innerWidth < 992) {
      alertify.success("Have A Nice Day Everyone! Wellcome to my CV", 5);
    } else {
      alertify.set("notifier","position", "top-right");
      alertify.success("Have A Nice Day Everyone! Wellcome to my CV", 5);
    }
  
    zoomImages("img-zoomable");
  
  })(jQuery);
  