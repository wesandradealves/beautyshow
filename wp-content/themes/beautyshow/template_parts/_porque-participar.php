<?php 
    $id = get_page_by_path('credenciamento')->ID;
?>

<?php if(get_field('por_que_participar', $id)) : ?>
    <section class="por-que-participar section">
        <div class="container">
            <h2 class="section-title d-flex justify-content-center align-items-center">
                <span>
                    Por que participar?
                </span>
            </h2>
            <ul class="slide-nav mb-4 d-flex d-lg-none align-items-center justify-content-end">
                <li>
                    <button class="porque-participar-prev">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </li>
                <li>
                    <button class="porque-participar-next">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </li>
            </ul>
            <ul class="porque-participar-slide list d-flex justify-content-center align-items-stretch">
                <?php foreach (get_field('por_que_participar', $id) as $item) : ?>
                    <li class="item ps-2 pe-2">
                        <div class="inner">
                            <h3 class="d-block title"><?php echo $item['titulo']; ?></h3>
                            <p class="d-block text mt-2"><?php echo $item['texto']; ?></p>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>
<?php endif; ?>