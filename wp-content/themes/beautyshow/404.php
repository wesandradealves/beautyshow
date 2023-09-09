<?php get_header(); ?>
<section id="primary">
    <div class="container d-flex align-items-center justify-content-center flex-column">
        <?php 
            echo get_field('404_body', 'option');
        ?>
        <a href="<?php echo home_url(); ?>" class="btn helper">Voltar ao início</a>
    </div>
</section>
<?php get_footer(); ?>