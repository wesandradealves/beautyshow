<?php if(get_field('countdown_countdown', 'option')) : ?>
    <div class="countdown" id="countdown"></div>
    <script>
        (function($){
            $(window).on("load",function(){
                $("#countdown").countdown("<?php echo get_field('countdown_countdown', 'option'); ?>", function(event) {
                    $(this).html(
                        event.strftime(`
                            <div class="d-flex align-items-stretch">
                                <span class="d-flex flex-column justify-content-center align-items-center">
                                    <span class="d-block text-center">%D</span> 
                                    <span class="d-block text-center">dias</span> 
                                </span>
                                <span class="d-flex flex-column justify-content-center align-items-center">
                                    <span class="d-block text-center">%H</span> 
                                    <span class="d-block text-center">horas</span>
                                </span>
                                <span class="d-flex flex-column justify-content-center align-items-center">
                                    <span class="d-block text-center">%M</span> 
                                    <span class="d-block text-center">minutos</span>    
                                </span>                             
                            </div> 
                        `)
                    );
                });             
            });
        })(jQuery);    
    </script>
<?php endif; ?>