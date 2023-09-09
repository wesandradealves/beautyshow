    </main>
    <?php get_template_part('template_parts/_ingressos', null, array()); ?> 
    <?php get_template_part('template_parts/_breakingnews', null, array()); ?> 
    <?php get_template_part('template_parts/_breakingnews', null, array( 'reverse' => true, 'backgroundColor' => '#F2FE7F')); ?> 
    <footer class="footer">
        <div class="container">
            <?php get_template_part('template_parts/_logo', null, array( 'class' => '')); ?>
            <nav  class="navigation">
                <?php 
                    wp_nav_menu( 
                        array( 
                            'theme_location' => 'footer', 
                            'menu_class' => 'd-flex flex-column flex-lg-row align-items-center justify-content-center ps-5 pe-5 text-center',   
                            'container' => false, 
                        ) 
                    ); 
                ?>
            </nav>           
            <?php get_template_part('template_parts/_socialnetworks', null, array( 'class' => 'd-flex align-items-center justify-content-center')); ?> 
            <p class="d-block text-center">
                © Beauty Show - <?php echo date('Y'); ?>. Todos os direitos reservados.
            </p>              
        </div>
    </footer>
    <?php get_template_part('template_parts/_whatsapp'); ?> 
</div>
<?php wp_footer(); ?>
</body>
</html>