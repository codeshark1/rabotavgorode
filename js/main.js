jQuery(document).ready(function($){

    function navigation_show(button, menu) {
        $(menu).hide();
        $(button).click(function(){
            if ( $(menu).is(':visible')){
                $(menu).slideUp();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $(menu).slideDown();
            }
        });
    }

    navigation_show('#nav-toggle','#nav-main');

    function menu_nested(menu_id) {
        $(menu_id).find('ul').hide();
        $(menu_id).find('.menu-item--has-children a').click(function(e){
            e.preventDefault();
            $(this).siblings('.sub-menu').slideDown();
            if ( $(this).parent().hasClass('menu-item--active') ) {
                $(this).siblings('.sub-menu').stop().slideUp();
                $(this).parent().removeClass('menu-item--active');
            } else {
                $(this).parent().addClass('menu-item--active').siblings('.menu-item--active').removeClass('expanded').find('.sub-menu').stop().slideUp();
                $(this).siblings('.sub-menu').stop().slideDown();
            }
        });
    }
    menu_nested('.menu-categs');

    function list_specializations() {
        $('#list-specializations').find('.list-sub').hide();
        $('#list-specializations').find('.field').click(function(){
            $(this).toggleClass('active').siblings().slideToggle('fast');
        });
    }
    list_specializations();
});