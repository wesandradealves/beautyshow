(function($){
    $(window).on("load",function(){
        let $this = $(this);

        $(this).scrollTop(0),
        $('body').removeClass('d-none');

        $(".menu-item-has-children").children('a').append('<i class="fa-solid fa-angle-down ps-2"></i>');

        $( ".menu-item-has-children" ).children(`a`).on( "click", function(e) {
            e.preventDefault();

            // $(this).parent().find("[class*='fa-']").toggleClass('fa-angle-down fa-angle-up'),
            $(this).parent().toggleClass('is-active'),
            $(this).parent().children('.sub-menu').toggleClass('is-active')
        });	
        
        $( "body" ).on( "click", ".hamburger", function(e) {
            $('.header').toggleClass('is-active');
            $('.hamburger, .navigation.mobile').toggleClass('is-active');  
        });	

        $('.porque-participar-slide').slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.porque-participar-prev'),
            nextArrow: $('.porque-participar-next'),
            dots: false,
            initialSlide: 0,
            speed: 300,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2
                    }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
              ]
        }), $('.porque-participar-slide').slick('refresh');      

        $('.programacao-slide').slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.programacao-prev'),
            nextArrow: $('.programacao-next'),
            dots: false,
            initialSlide: 0,
            speed: 300,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2
                    }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
              ]
        }), $('.programacao-slide').slick('refresh');       
        
        $('.depoimentos-slide').slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.depoimentos-prev'),
            nextArrow: $('.depoimentos-next'),
            dots: false,
            initialSlide: 0,
            speed: 300,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2
                    }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
              ]
        }), $('.depoimentos-slide').slick('refresh');      
        
        $('.destaques-slide').slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.destaques-prev'),
            nextArrow: $('.destaques-next'),
            dots: false,
            initialSlide: 0,
            speed: 300,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2
                    }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
              ]
        }), $('.destaques-slide').slick('refresh');

        $("header").before($("header").clone(true).addClass("sticky"));
    
        $(window).on("scroll", function() {
            $(".sticky").toggleClass("stuck", ($(window).scrollTop() > 49));
            $(".is-active").removeClass('is-active')
            if($(window).scrollTop() > 49) {
                $("header:not(.sticky").addClass('hidden')
            } else {
                $("header:not(.sticky").removeClass('hidden')
            }
        });

        $( "body" ).on( "click", ".accordion-item .title", function(e) {
            $(this).toggleClass('on'),
            $(this).find('.fa-solid').toggleClass('fa-plus fa-minus'),
            $(this).next().toggleClass('d-block d-none');
        });	 
    
        let events = ['scroll', 'resize'];
    
        events.forEach(event => {
            $(window).on(event, function () {
                $(".is-active").removeClass('is-active')
            });	  
        });

        // -

        $( "body" ).on( "click", ".yu2fvl", function(e) {
            $.yu2fvl({ vid: e.target.dataset.id, open: true });
        });	    
        
        setTimeout(function () {
            if (sessionStorage.getItem('name') !== "whatsappIconMessage") {
                $('.whatsapp-icon-message').addClass('active');
            }
        }, 12000);
    
        $('.whatsapp-icon-message-close').click(function () {
            sessionStorage.setItem('name', 'whatsappIconMessage');
            $('.whatsapp-icon-message').removeClass('active');
        });
    
        setTimeout(function() {
            $('#module-whatsapp').css('visibility', 'visible');
        }, 2000);
    
        $('.whatsapp-btn, [href*="https://api.whatsapp.com"]').click(function(e) {
            e.preventDefault();
    
            if ($('.whatsapp-btn').hasClass('active')) {
                $('.whatsapp-btn').addClass('not-active');
                $('.whatsapp-btn').removeClass('active');
                $('#module-whatsapp-container').removeClass('active');
                setTimeout(function() {
                    if (sessionStorage.getItem('name') !== "whatsappIconMessage") {
                        $('.whatsapp-icon-message').addClass('active');
                    }
                }, 2000);
            } else {
                $('.whatsapp-btn').addClass('active');
                $('.whatsapp-btn').removeClass('not-active');
                $('#module-whatsapp-container').addClass('active');
                $('.whatsapp-icon-message').removeClass('active');
            }
        });
    
        setTimeout(function() {
            $('#module-whatsapp').css('visibility', 'visible');
        }, 2000);
    
        var disableSubmit = false;
        
        jQuery('button.module-whatsapp-content-form-button').click(function() {
            jQuery('button.module-whatsapp-content-form-button').addClass("disabled");
            jQuery('button.module-whatsapp-content-form-button').text('INICIANDO...');
            if (disableSubmit == true) {
                return false;
            }
            disableSubmit = true;
            return true;
        })
        
        document.addEventListener('wpcf7submit', function(event) {
            jQuery('#' + event.detail.unitTag + ' button.module-whatsapp-content-form-button').removeClass("disabled");
            jQuery('#' + event.detail.unitTag + ' button.module-whatsapp-content-form-button').text('INICIAR CONVERSA');
            disableSubmit = false;
        }, false);            
    });
})(jQuery);