<?php get_header(); ?>
<section id="primary" class="section">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span><?php echo get_queried_object()->name; ?></span>
        </h2>        
        <?php get_search_form(); ?>
        <ul class="expositores-list d-flex align-items-stretch justify-content-center">
            <?php 
                if ( have_posts() ) {
                    while ( have_posts() ) :
                        the_post(); 
                        ?>
                        <li class="item col-6 col-md-4 col-lg-3 ps-2 pe-2 pb-4">
                            <div class="inner d-flex justify-content-center align-items-center">
                                <a href="<?php echo get_field('url'); ?>">
                                    <img class="img-fluid" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
                                </a>
                            </div>
                        </li>
                        <?php 
                    endwhile; 
                } else {
                    ?>
                    <li>
                        <p class="d-block text text-center search-result">Não encontramos nenhum resultado.</p>
                    </li>
                    <?php 
                }
            ?>
        </ul>
    </div>
</section>
<?php get_footer(); ?>