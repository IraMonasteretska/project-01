$(document).ready((function(){new Swiper(".mySwiper",{direction:"vertical",speed:1400,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}});let e=($(window).width()-$(".container").width())/2;$(".swiper-pagination").css("right",e+"px"),$(".welcomescreen__socials").css("left",e+"px"),$(".reviews-sliderwrapper").css("padding-left",e+"px"),$(".contact-info").css("padding-left",e+"px"),$(window).resize((function(){let e=($(window).width()-$(".container").width())/2;$(".swiper-pagination").css("right",e+"px"),$(".welcomescreen__socials").css("left",e+"px"),$(".reviews-sliderwrapper").css("padding-left",e+"px"),$(".contact-info").css("padding-left",e+"px")}));new Swiper(".swiper-review",{slidesPerView:"auto",spaceBetween:30,loop:!0,speed:1400,autoplay:{delay:4e3},breakpoints:{320:{spaceBetween:16,slidesPerView:"auto"},640:{spaceBetween:30,slidesPerView:"auto"}}});$(window).scroll((function(){$(window).scrollTop()>20?$("header.header").addClass("small"):$("header.header").removeClass("small")})),$(".hamburger-slim").click((function(){$(this).toggleClass("active"),$("header.header nav").toggleClass("show")}));var i=$("#totop");$(window).scroll((function(){$(window).scrollTop()>100?i.addClass("show"):i.removeClass("show")})),i.on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")}))}));