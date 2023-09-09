<?php get_header(); ?>
<section id="primary">
    <?php 
        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post(); 
        
            endwhile; 
        endif;
    ?>
</section>
<?php get_footer(); ?>