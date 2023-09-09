
<?php $reverso =  $args['reverse'] || get_field('banner_reverso'); ?>
<section class="banner" style="background-color: <?php echo get_field('banner_cores_cor_2'); ?>;">
    <div class="container flex-column d-flex align-items-center <?php if($reverso) : ?> flex-lg-row-reverse <?php else : ?> flex-lg-row <?php endif; ?>">
        <?php if(get_the_post_thumbnail_url()) : ?>
            <div class="col-12 col-lg-auto d-flex align-items-center justify-content-center">
                <img class="img-fluid m-auto" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>" loading="lazy">
            </div>
        <?php endif; ?>
        <div class="flex-fill info">
            <h1 class="title d-block"><?php echo get_field('banner_titulo') ?  get_field('banner_titulo') : get_the_title(); ?></h1>
            <?php if(get_field('banner_texto')) : ?>
                <div class="text d-block mt-4">
                    <?php echo get_field('banner_texto'); ?>
                </div>
            <?php endif; ?>
            <?php if(get_field('banner_cta') && !is_single() && !is_home() && !is_front_page()) : ?>
                <a href="<?php echo get_field('banner_cta_texto'); ?>" class="d-inline-block mt-5 btn helper"><?php echo get_field('banner_cta_label'); ?></a>
            <?php endif; ?>
            <?php 
                setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
                if(is_single() || is_home() || is_front_page()) {
                    ?>
                    <?php if(get_field('countdown_dias', 'option')) : ?>
                    <div class="countdown">
                        <div class="d-flex align-items-stretch">
                            <?php 
                                foreach (get_field('countdown_dias', 'option') as $item) {
                                    # code...
                                    ?>
                                    <span class="d-flex flex-column justify-content-center align-items-center">
                                        <span class="d-block text-center"><?php echo $item['dia']; ?></span>
                                    </span>
                                    <?php 
                                }
                            ?>
                            <span class="d-flex flex-column justify-content-center align-items-center mes-ano">
                                <span class="d-block text-center"><?php echo get_field('countdown_mes', 'option'); ?></span>
                                <span class="d-block text-center"><?php echo get_field('countdown_ano', 'option'); ?></span>
                            </span>
                            <!-- <span class="d-flex flex-column justify-content-center align-items-center">
                                <span class="d-block text-center"><?php echo strftime('%d', strtotime(get_field('countdown_countdown','option'))); ?></span>
                            </span> -->
                            <!-- <span class="d-flex flex-column justify-content-center align-items-center">
                                <span class="d-block text-center"><?php echo strftime('%b', strtotime(get_field('countdown_countdown','option'))); ?></span>
                            </span>
                            <span class="d-flex flex-column justify-content-center align-items-center">
                                <span class="d-block text-center"><?php echo strftime('%H', strtotime(get_field('countdown_countdown','option'))); ?>h.</span>
                            </span> -->
                        </div>
                    </div>
                    <?php endif; ?>
                    <?php if(get_field('banner_cta')) : ?>
                        <a href="<?php echo get_field('banner_cta_texto'); ?>" class="d-inline-block mt-5 btn helper"><?php echo get_field('banner_cta_label'); ?></a>
                    <?php endif; ?>    
                    <?php 
                } else {
                    if(get_field('countdown_countdown','option') && $args['countdown']) {
                        get_template_part('template_parts/_countdown', null, array( 'class' => '')); 
                    }
                }
            ?>            
        </div>
    </div>
    <div class="breakingnews-group">
        <?php get_template_part('template_parts/_breakingnews', null, array()); ?> 
        <?php get_template_part('template_parts/_breakingnews', null, array( 'reverse' => true, 'backgroundColor' => '#F2FE7F')); ?> 
    </div>
</section>

<style>
    .banner .container::after {
        background-color: <?php echo get_field('banner_cores_cor_1'); ?>;
    }
</style>