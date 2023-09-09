<style>

</style>
<section class="breakingnews d-block <?php if($args['reverse']) : ?> reverse <?php endif; ?>" <?php if($args['backgroundColor']): ?> style="background-color: <?php echo $args['backgroundColor']; ?>" <?php endif; ?>>
    <div class="container-fluid d-flex overflow-hidden align-items-center">
        <?php 
            for ($i=0; $i < 10; $i++) { 
                echo get_field('headline_scroll', 'option').' ';
            }
        ?>
    </div>
</section>