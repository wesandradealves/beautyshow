<?php get_header(); ?>
<?php get_template_part('template_parts/_banner', null, array( 'class' => '')); ?>
<section id="primary">
    <div class="container content">
        <h1 class="title"><?php echo get_the_title(); ?></h1>
        <?php 
            if ( have_posts() ) :
                while ( have_posts() ) :
                    the_post(); 
                    the_content();
                endwhile; 
            endif;
        ?>
    </div>
</section>
<?php get_footer(); ?>