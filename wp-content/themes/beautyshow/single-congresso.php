<?php get_header(); ?>
<?php get_template_part('template_parts/_banner', null, array( 'class' => '')); ?>
<?php 
    if(get_field('video')) {
        get_template_part('template_parts/_video', null, array('data' => get_field('video'))); 
    }
?>

<section class="section programacao">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>
                Programação
            </span>
        </h2>
        <?php if(get_field('programacao')) : ?>
            <ul class="slide-nav d-flex align-items-center justify-content-end">
                <li>
                    <button class="programacao-prev">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </li>
                <li>
                    <button class="programacao-next">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </li>
            </ul>
            <ul class="programacao-slide list d-flex justify-content-center align-items-stretch">
                <?php foreach (get_field('programacao') as $item) : ?>
                    <li class="item ps-2 pe-2">
                        <div class="inner">
                            <img class="img-fluid w-100 d-block mb-2" src="<?php echo $item['imagem']; ?>" loading="lazy" alt="<?php echo $item['titulo']; ?>">
                            <h3 class="d-block title"><?php echo $item['titulo']; ?></h3>
                            <p class="d-block text mt-2"><?php echo $item['texto']; ?></p>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php else : ?>
            <p class="text-center mt-5 d-block em-breve">Em breve.</p>
        <?php endif; ?>
    </div>
    <?php get_template_part('template_parts/_breakingnews', null, array()); ?> 
    <?php get_template_part('template_parts/_breakingnews', null, array( 'reverse' => true, 'backgroundColor' => '#F2FE7F')); ?> 
</section>


<section class="section patrocinadores">
    <div class="container">
        <h2 class="section-title d-flex justify-content-center align-items-center">
            <span>
                Patrocinadores
            </span>
        </h2>
        <?php if(get_field('patrocinadores')) : ?>
        <ul class="patrocinadores-list d-flex align-items-stretch justify-content-center">
            <?php foreach (get_field('patrocinadores') as $item) : ?>
                <li class="item ps-2 pe-2">
                    <div class="inner d-flex justify-content-center align-items-center">
                        <a href="<?php echo $item['url']; ?>">
                            <img class="img-fluid" loading="lazy" src="<?php echo $item['imagem']; ?>" />
                        </a>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
        <?php else : ?>
            <p class="text-center mt-5 d-block em-breve">Em breve.</p>
        <?php endif; ?>
    </div>
</section>
<?php get_footer(); ?>