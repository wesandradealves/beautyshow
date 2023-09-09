<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php echo bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta content="<?php echo get_bloginfo('blogdescription'); ?>" name="description">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="true">
    <link rel="canonical" href="<?php echo site_url(); ?>" />
    <?php 
        wp_meta(); 
        wp_head();
    ?>
</head>

<body <?php body_class('d-none'); ?>>
    <div id="wrap" class="d-block overflow-hidden">
        <a class="skip-link screen-reader-text" href="#content">
            <?php
                /* translators: Hidden accessibility text. */
                esc_html_e( 'Skip to content', 'twentytwentyone' );
            ?>
        </a>
        <header class="header d-block">
            <?php
                if(get_field('headline', 'option')) {
                    get_template_part('template_parts/_topbar'); 
                } 
            ?>    
            <div class="header-top">
                <div class="container d-flex align-items-center justify-content-between">
                    <nav  class="navigation">
                        <?php 
                            wp_nav_menu( 
                                array( 
                                    'theme_location' => 'main', 
                                    'menu_class' => 'd-none d-xl-flex align-items-center justify-content-between',   
                                    'container' => false, 
                                ) 
                            ); 
                        ?>
                    </nav>
                    <?php get_template_part('template_parts/_logo', null, array( 'class' => '')); ?>
                    <nav  class="navigation">
                        <?php 
                            wp_nav_menu( 
                                array( 
                                    'theme_location' => 'shortcuts', 
                                    'menu_class' => 'd-none d-xl-flex align-items-center justify-content-between',   
                                    'container' => false, 
                                ) 
                            ); 
                        ?>
                    </nav>            
                    <button class="hamburger hamburger--collapse d-xl-none p-0 m-0" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>    
                </div>
            </div>
            <nav  class="navigation mobile flex-column justify-content-between">
                <?php get_template_part('template_parts/_logo', null, array( 'class' => '', 'alt' => true)); ?>

                <?php 
                    wp_nav_menu( 
                        array( 
                            'theme_location' => 'mobile', 
                            'menu_class' => '',   
                            'container' => false, 
                        ) 
                    ); 
                ?>
                <?php get_template_part('template_parts/_socialnetworks', null, array( 'class' => 'd-flex align-items-center justify-content-center')); ?> 
            </nav>  
        </header>
        <main>