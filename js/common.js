// JavaScript Document
$(document).ready(function(){
    var highestBox = 0;
        $('.div_height').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height();  
        }
    });    
    $('.div_height').height(highestBox);
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 120) {
        $("#tp_sup").addClass("dis_blk");
		$(".tp_blk").addClass("pos_fix");
		$(".menu-opener").addClass("dis_blk");
		$(".menu").removeClass("active");
		$(".menu-opener-inner").removeClass("active");
    }else { $("#tp_sup").removeClass("dis_blk"); $(".tp_blk").removeClass("pos_fix"); $(".menu-opener").removeClass("dis_blk");}
});
$(document).ready(function(){
$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});

$('.menu-inner').on('click', 'li', function(){
    $('.nav li').removeClass('active_nav');
    $(this).addClass('active_nav');
});

});

// parallex scrool//
     jQuery(document).ready(function($) {
    $('.nav a[href^="#"], .menu a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        } );
    } );
} );
	 
	 $(document).ready(function () {
    //rotation speed and timer
    var speed = 5000;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    //if user clicked on prev button
    
    $('#buttons a').click(function (e) {
        //slide the item
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        //cancel the link behavior            
        return false;
        
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}


