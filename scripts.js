function verificar(who){
    var msg = document.getElementById(who);   
    if (msg.style.display!="block"){
        msg.style.display = 'block';
        msg.style.animation = 'entrando 0.5s ease-out 0s 1 normal forwards';
    } else { 
        msg.style.animation = 'saindo 0.5s ease-out 0s 1 normal forwards';
        setTimeout(() => { msg.style.display = 'none'; }, 500);   
    }
 }

 jQuery(document).ready(function ($) {
    const slide = $('.carousel-slide');
    const images = $('.carousel-slide img');
    let counter = 0;

    function updateSlide() {
        slide.css('transform', `translateX(-${counter * 100}%)`);
    }

    $('.carousel-control-prev').on('click', function () {
        if (counter > 0) {
            counter--;
            updateSlide();
        }
    });

    $('.carousel-control-next').on('click', function () {
        if (counter < images.length - 1) {
            counter++;
            updateSlide();
        }
    });

    slide.swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction === 'left' && counter < images.length - 1) {
                counter++;
                updateSlide();
            } else if (direction === 'right' && counter > 0) {
                counter--;
                updateSlide();
            }
        }
    });
});