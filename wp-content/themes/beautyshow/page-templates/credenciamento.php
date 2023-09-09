<?php /* Template Name: Credenciamento */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_banner', null, array('countdown' => TRUE)); ?>
<?php 
    if(get_field('video')) {
        get_template_part('template_parts/_video', null, array('data' => get_field('video'))); 
    }
?>
<section class="credenciamento section">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>
                Credenciamento
            </span>
        </h2>
        <div class="d-flex row-wrap flex-column flex-md-row align-items-center">
            <?php if(get_field('credenciamento_informacoes')) : ?>
                <div class="col-12 col-md-6 order-2 order-md-1">
                    <ul class="info">
                        <?php foreach (get_field('credenciamento_informacoes') as $item) : ?>
                            <li class="d-flex text-center flex-column align-items-center justify-content-center">
                                <img class="img-fluid d-block mb-2" loading="lazy" src="<?php echo $item['icone']; ?>" alt="<?php echo $item['titulo']; ?>">
                                <h3 class="d-block title mb-2"><?php echo $item['titulo']; ?></h3>
                                <p class="d-block text"><?php echo $item['texto']; ?></p>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
            <div class="order-1 order-md-2 ps-md-5 flex-fill gmaps d-flex justify-content-center align-items-center">
                <?php echo get_field('credenciamento_google_maps') ?>
            </div> 
        </div>
    </div>
    <div class="breakingnews-group d-none d-md-block">
        <?php get_template_part('template_parts/_breakingnews', null, array()); ?> 
        <?php get_template_part('template_parts/_breakingnews', null, array( 'reverse' => true, 'backgroundColor' => '#F2FE7F')); ?> 
    </div>
</section>
<?php get_template_part('template_parts/_porque-participar', null, array()); ?> 
<?php if(get_field('faq')) : ?>
    <section class="faq section">
        <div class="container">
            <h2 class="section-title d-flex justify-content-center align-items-center">
                <span>
                    FAQ
                </span>
            </h2>
            <ul class="faq-list accordion">
                <?php foreach (get_field('faq') as $item) : ?>
                    <li class="item accordion-item">
                        <div class="inner">
                            <h3 class="d-flex align-items-center justify-content-between col-12 title"><?php echo $item['titulo']; ?> <i class="fa-solid fa-plus"></i></h3>
                            <p class="d-none col-12 text mt-2"><?php echo $item['texto']; ?></p>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>
<?php endif; ?>
<?php get_footer(); ?>