<section class="ingressos d-block">
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="text">
            <?php echo get_field('ingresso', 'option')['body']; ?>
        </div>
        <a href="<?php echo get_field('ingresso', 'option')['url']; ?>" class="btn helper mt-3">Compre seu ingresso</a>
    </div>
</section>