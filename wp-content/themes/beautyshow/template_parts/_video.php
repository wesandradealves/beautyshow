<section class="video" style="background-color: <?php echo $args['data']['background']; ?>">
    <div class="container flex-column <?php if($args['data']['reverso']) : ?> flex-lg-row-reverse <?php else : ?> flex-lg-row <?php endif; ?> d-flex align-items-center">
        <div class="col-12 col-lg-6">
            <div class="video-wrapper">
                <?php if($args['data']['video']) : ?>
                    <i data-id="<?php echo $args['data']['video']; ?>" class="fa-solid fa-play yu2fvl"></i>
                <?php endif; ?>
                <img <?php if(!$args['data']['video']) : ?> style="opacity: .9" <?php endif; ?> data-id="<?php echo $args['data']['video']; ?>" class="yu2fvl d-block img-fluid video w-100" src="<?php echo $args['data']['thumbnail'] ? $args['data']['thumbnail'] : 'https://i.ytimg.com/vi/'.$args['data']['video'].'/maxresdefault.jpg' ?>" />
            </div>
        </div>
        <div class="flex-fill info">
            <h2 class="d-block title"><?php echo $args['data']['titulo']; ?></h2>
            <div class="d-block text">
                <?php echo $args['data']['texto']; ?>
            </div>
            <?php if($args['data']['cta']['label']) : ?>
                <a href="<?php echo $args['data']['cta']['url']; ?>" class="mt-4 btn d-inline-block helper"><?php echo $args['data']['cta']['label']; ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>