<?php get_header(); ?>
<section id="primary" class="section">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>
                <?php echo get_queried_object()->label; ?>
            </span>
        </h2>        
        <?php get_search_form(); ?>
        <ul class="expositores-list d-flex align-items-stretch justify-content-center">
            <?php 
                if ( have_posts() ) :
                    while ( have_posts() ) :
                        the_post(); 
                        ?>
                        <li class="item col-4 col-lg-3 ps-2 pe-2 pb-4">
                            <div class="inner d-flex justify-content-center align-items-center">
                                <a href="<?php echo get_field('url'); ?>">
                                    <img class="img-fluid" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" />
                                </a>
                            </div>
                        </li>
                        <?php 
                    endwhile; 
                endif;
            ?>
        </ul>
    </div>
</section>
<?php get_footer(); ?>