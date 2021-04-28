//cart popup
$('.cart-btn').click(function(){
    if ($('.cart-popup').hasClass('show')) {
        $('.cart-popup').fadeOut('slow');
        $('.cart-popup').removeClass('show');
    }
    else {
        $('.cart-popup').fadeIn('slow');
        $('.cart-popup').addClass('show');
    }
});

//mobile-menu open
$('.mobile-menu-btn').click(function(){
    $('.mobile-menu-window').fadeIn('slow');
});
$('.mobile-close').click(function(){
    $('.mobile-menu-window').fadeOut('slow');
});

//dropdown-menu open on category page

$('.menu-item-dropdown').click(function(){
    if ($('.item-dropdown').hasClass('item-show')) {
        $('.item-dropdown').removeClass('item-show');
    }
    else {
        $('.item-dropdown').addClass('item-show');
    }
});

//open and close menu on category page
$('.menu-btn').click(function(){
    $('.menu-list').addClass('show-category');
    $(this).closest('.menu-title').find('.burger-left-btn').fadeOut('slow');
    $(this).closest('.menu-title').find('.burger-close').fadeIn('slow');
    $(this).closest('.menu-title').find('.burger-close').click(function(){
        $('.menu-list').removeClass('show-category');
        $(this).closest('.menu-title').find('.burger-left-btn').fadeIn('slow');
        $(this).closest('.menu-title').find('.burger-close').fadeOut('slow');
    });
});
$('.news-btn').click(function(){
    $('.news-block').addClass('show-news');
    $(this).closest('.category-news__title').find('.burger-left-btn').fadeOut('slow');
    $(this).closest('.category-news__title').find('.burger-close').fadeIn('slow');
    $(this).closest('.category-news__title').find('.burger-close').click(function(){
        $('.news-block').removeClass('show-news');
        $(this).closest('.category-news__title').find('.burger-left-btn').fadeIn('slow');
        $(this).closest('.category-news__title').find('.burger-close').fadeOut('slow');
    });
});

//sort-dropdown open-close
$('.sort-value').click(function(){
    $('.sort-value').parent().toggleClass('option-active-dropdown');
    $('.sort-dropdown > p').click(function(){
        
    });
});
$('.param-value').click(function(){
    $('.param-value').parent().toggleClass('option-active-dropdown');
});

//change view 
$('.view-net').click(function(){
    $('.subcategory-horizontal-view').css('display','none');
    $('.subcategory-net-view').css('display','block');
    $('.view-net').addClass('view-btn-active');
    $('.view-horizontal').removeClass('view-btn-active');
    $('.page-count-horizontal').css('display','none');
    $('.page-count-net').css('display','block');
});
$('.view-horizontal').click(function(){
    $('.subcategory-net-view').css('display','none');
    $('.subcategory-horizontal-view').css('display','block');
    $('.view-net').removeClass('view-btn-active');
    $('.view-horizontal').addClass('view-btn-active');
    $('.page-count-horizontal').css('display','block');
    $('.page-count-net').css('display','none');
});

//mobile-item dropdown
$('.arrow-down-mobile').click(function(){
    $(this).parents().closest('.subcategory-item').find('.mobile-content-dropdown').toggleClass('mobile-dropdown-show');
    $(this).find('img').toggleClass('rotate-arrow');
});

//cart radio buttons change
$('#add-address').click(function(){
    if ($(this).prop('checked')) {
        $(this).parent().find('.select-menu').show(100);
    }
    $(this).parents().find('.step-checkboxes').find('.radio-box').find('#address').parent().find('.select-menu').hide(100);
});

$('#address').click(function(){
    if ($(this).prop('checked')) {
        $(this).parent().find('.select-menu').show(100);
    }
    $(this).parents().find('.step-checkboxes').find('.radio-box').find('#add-address').parent().find('.select-menu').hide(100);
});

$('#delivery').click(function(){
    if ($(this).prop('checked')) {
        $(this).parent().find('.select-menu').show(100);
    }
    $(this).parents().find('.step-checkboxes').find('.radio-box').find('#add-delivery').parent().find('.select-menu').hide(100);
});

$('#add-delivery').click(function(){
    if ($(this).prop('checked')) {
        $(this).parent().find('.select-menu').show(100);
    }
    $(this).parents().find('.step-checkboxes').find('.radio-box').find('#delivery').parent().find('.select-menu').hide(100);
});

//select dropdown
$('.select-dropdown').click(function(){
    if ($(this).find('.dropdown-list').hasClass('select-dropdown-show')) {
        $(this).find('.dropdown-list').fadeOut('slow');
        $('.dropdown-list').toggleClass('select-dropdown-show');
        $(this).toggleClass('select-active');
    }
    else {
        $(this).find('.dropdown-list').fadeIn('slow');
        $('.dropdown-list').toggleClass('select-dropdown-show');
        $(this).toggleClass('select-active');
    }
});
//select selected
$('.dropdown-list > p').click(function(){
    console.log($(this).parents().closest('.select-dropdown').find('.dropdown-selected').find('.text').text());
    $(this).parents().closest('.select-dropdown').find('.dropdown-selected').find('.text').text($(this).text());
});

//checkbox-validity popup
$('.form-button').click(function(){
    if ($(this).closest('.step-checkboxes').find('.agree-check').prop('checked') == 'checked') {
        return;
    }
    else {
        $('.alert-agreement').show(100);
    }
});
$('.profile-button').click(function(){
    if ($(this).parent().find('.agree-check').prop('checked')) {
        $('.alert-agreement').hide(100);
        return;
    }
    else {
        $('.alert-agreement').show(100);
    }
    console.log($(this).parent().find('.agree-check').prop('checked'));
});

//mobile nav open in profile pages
$('.menu-btn').click(function(){
    $('.nav-list').css('display','block');
    $(this).closest('.profile-mobile-title').find('.burger-left-btn').fadeOut('slow');
    $(this).closest('.profile-mobile-title').find('.burger-close').fadeIn('slow');
    $(this).closest('.profile-mobile-title').find('.burger-close').click(function(){
        $('.nav-list').css('display','none');
        $(this).closest('.profile-mobile-title').find('.burger-left-btn').fadeIn('slow');
        $(this).closest('.profile-mobile-title').find('.burger-close').fadeOut('slow');
    });
});

//select dropdown in profile pages
$('.form-select').click(function(){
    if ($(this).find('.dropdown-list').hasClass('select-dropdown-show')) {
        $(this).find('.dropdown-list').fadeOut('slow');
        $('.dropdown-list').toggleClass('select-dropdown-show');
        $(this).toggleClass('select-active');
    }
    else {
        $(this).find('.dropdown-list').fadeIn('slow');
        $('.dropdown-list').toggleClass('select-dropdown-show');
        $(this).toggleClass('select-active');
    }
});
$('.dropdown-list > p').click(function(){
    console.log($(this).parents().closest('.select-dropdown').find('.dropdown-selected').find('.text').text());
    $(this).parents().closest('.form-select').find('.option-selected').find('.text').text($(this).text());
});

//tabs script
$('.tab-btn').click(function(){
    if ($(this).hasClass('description-btn')) {
        $(this).addClass('active-tab');
        $(this).siblings().removeClass('active-tab');
        $('.description').addClass('active-content');
        $('.description').siblings().removeClass('active-content');
    }
    if ($(this).hasClass('characteristic-btn')) {
        $(this).addClass('active-tab');
        $(this).siblings().removeClass('active-tab');
        $('.characteristic').addClass('active-content');
        $('.characteristic').siblings().removeClass('active-content');
    }
    if ($(this).hasClass('review-btn')) {
        $(this).addClass('active-tab');
        $(this).siblings().removeClass('active-tab');
        $('.review').addClass('active-content');
        $('.review').siblings().removeClass('active-content');
    }
    if ($(this).hasClass('pay-btn')) {
        $(this).addClass('active-tab');
        $(this).siblings().removeClass('active-tab');
        $('.pay').addClass('active-content');
        $('.pay').siblings().removeClass('active-content');
    }
});

//favourites popup
$('.in-favourites').click(function(){
    $('.add-error-popup').css('display','block');
    //$('.add-error-popup').fadeIn('slow');
    $('.close-btn').click(function(){
        $('.add-error-popup').css('display','none');
    });
});

//compare popup
$('.in-compare').click(function(){
    $('.compare-popup').css('display','block');
    //$('.add-error-popup').fadeIn('slow');
    $('.close-btn').click(function(){
        $('.compare-popup').css('display','none');
    });
});

//cart-add popup
$('.buy-btn').click(function(){
    $('.add-to-cart-popup').css('display','block');
    //$('.add-error-popup').fadeIn('slow');
    $('.close-btn').click(function(){
        $('.add-to-cart-popup').css('display','none');
    });
});

//call back popup 
$('.call-back-btn').click(function(){
    $('.call-back-popup').css('display','block');
    $('.close-btn').click(function(){
        $('.call-back-popup').css('display','none');
    });
});
$('.write-btn').click(function(){
    $('.call-back-popup').css('display','block');
    $('.close-btn').click(function(){
        $('.call-back-popup').css('display','none');
    });
})