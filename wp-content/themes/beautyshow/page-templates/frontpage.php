<?php /* Template Name: Frontpage */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_banner', null, array( 'class' => '')); ?>
<?php 
    $id = get_page_by_path('credenciamento')->ID;
    if(get_field('video', $id)) {
        get_template_part('template_parts/_video', null, array('data' => get_field('video', $id))); 
    }
?>
<?php if(get_field('destaques')) : ?>
<section class="section destaques">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>Destaques</span>
        </h2>         
    </div>
    <div class="d-block slider-wrapper">
        <div class="container">
            <ul class="slide-nav pt-5 d-flex d-lg-none align-items-center justify-content-end">
                <li>
                    <button class="destaques-prev">
                        ⯇
                    </button>
                </li>
                <li>
                    <button class="destaques-next">
                        ⯈
                    </button>
                </li>
            </ul> 
            <div class="destaques-slide col-12 d-flex align-items-stretch justify-content-center">
                <?php foreach (get_field('destaques') as $item) : ?>
                    <div class="item ps-2 pe-2">
                        <div class="inner">
                            <img src="<?php echo $item['imagem']; ?>" loading="lazy" class="d-block img-fluid" />
                            <h3 class="d-block mt-4 title text-center">
                                <a class=" text-center" href="<?php echo $item['url']; ?>">
                                    <?php echo $item['titulo']; ?>
                                </a>
                            </h3>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>
<section class="section congresso">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>Congressos</span>
        </h2>        
        <ul class="congresso-list d-flex align-items-stretch justify-content-center">
            <?php 
                $query = new WP_Query( array(
                    'post_type' => 'congresso',
                    'posts_per_page' => -1,
                    'order' => 'ASC'
                ) );

                $query = new WP_Query( $args ); 

                if($query->post_count) :
                    while ( $query->have_posts() ) : 
                        $query->the_post(); 
                        ?>
                        <li class="item col-6 ps-2 pe-2 pb-4">
                            <div class="inner d-flex justify-content-center align-items-center">
                                <a href="<?php echo get_field('url'); ?>">
                                    <img class="img-fluid" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" />
                                </a>
                            </div>
                        </li>
                        <?php 
                    endwhile; 
                    wp_reset_query();
                    wp_reset_postdata();                       
                endif;
            ?>
        </ul>
    </div>
</section>
<?php if(get_field('depoimentos', 'option')) : ?>
<section class="section depoimentos">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>Depoimentos</span>
        </h2>     
        <ul class="slide-nav d-flex align-items-center justify-content-end">
            <li>
                <button class="depoimentos-prev">
                    ⯇
                </button>
            </li>
            <li>
                <button class="depoimentos-next">
                    ⯈
                </button>
            </li>
        </ul>   
        <ul class="depoimentos-slide d-flex align-items-stretch justify-content-center">
            <?php 
                foreach (get_field('depoimentos', 'option') as $item) {
                    # code...
                    ?>
                    <li class="item">
                        <div class="inner">
                            <img loading="lazy" class="d-block img-fluid mb-2" src="<?php echo get_template_directory_uri().'/img/quote.svg'; ?>" />
                            <h3 class="title mt-3 d-block"><?php echo $item['titulo']; ?></h3>
                            <p class="text d-block mt-3"><?php echo $item['texto']; ?></p>
                        </div>
                    </li>
                    <?php 
                }
            ?>
        </ul>
    </div>
</section>
<?php endif; ?>
<section class="section expositores">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>Expositores</span>
        </h2>        
        <ul class="expositores-list d-flex align-items-stretch justify-content-center">
            <?php 
                $query = new WP_Query( array(
                    'post_type' => 'expositor',
                    'posts_per_page' => -1,
                    'order' => 'ASC'
                ) );

                $query = new WP_Query( $args ); 

                if($query->post_count) :
                    while ( $query->have_posts() ) : 
                        $query->the_post(); 
                        ?>
                        <li class="item col-6 col-md-4 col-lg-3 ps-2 pe-2 pb-4">
                            <div class="inner d-flex justify-content-center align-items-center">
                                <a href="<?php echo get_field('url'); ?>">
                                    <img class="img-fluid" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" />
                                </a>
                            </div>
                        </li>
                        <?php 
                    endwhile; 
                    wp_reset_query();
                    wp_reset_postdata();                       
                endif;
            ?>
        </ul>
    </div>
</section>
<?php get_template_part('template_parts/_porque-participar', null, array()); ?> 
<?php get_footer(); ?>