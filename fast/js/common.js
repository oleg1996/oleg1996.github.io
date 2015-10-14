$(document).ready(function() { 


$(".forum_group_ul>li").click(function(){
    if($(this).find("ul").size()){
        $(this).find("ul").toggle(500) ;
        $(this).toggleClass('actives'); 
    }

});  
$(".forum_group_ul>li>ul").click(function(){return false;})

$(".header_menu_layout ul li a").click(function(){ 
$(".header_menu_layout ul li").find('a').removeClass('actives_layout_menu')
$(this).addClass('actives_layout_menu'); 
});

$(".favourite_artists_user_profile,.subscriptions_user_profile,.dialogs_content_user_profile,.dialog_content_user_profile,.nutif_content_user_profile").hide();
$(".favourite_user_profile").click(function(){
    $(".favourite_artists_user_profile").show();
    $(".account_settings_user_profile,.subscriptions_user_profile,.dialogs_content_user_profile,.dialog_content_user_profile,.nutif_content_user_profile").hide();
});

$(".settings_user_profile").click(function(){
    $(".account_settings_user_profile").show();
    $(".favourite_artists_user_profile,.subscriptions_user_profile,.dialogs_content_user_profile,.dialog_content_user_profile").hide();
});

$(".subscription_user_profile").click(function(){
    $(".subscriptions_user_profile").show();
    $(".favourite_artists_user_profile,.account_settings_user_profile,.dialogs_content_user_profile, .dialog_content_user_profile,.nutif_content_user_profile").hide();
});
$(".dialogs_user_profile").click(function(){
    $(".dialogs_content_user_profile").show();
    $(".favourite_artists_user_profile,.account_settings_user_profile,.subscriptions_user_profile,.dialog_content_user_profile,.nutif_content_user_profile").hide();
});
$(".dialogs_content_user_profile").click(function(){
    $(".dialog_content_user_profile").show();
    $(".favourite_artists_user_profile,.account_settings_user_profile,.subscriptions_user_profile,.dialogs_content_user_profile,.nutif_content_user_profile").hide();
});
$(".notifications_user_profile").click(function(){
    $(".nutif_content_user_profile").show();
    $(".favourite_artists_user_profile,.account_settings_user_profile,.subscriptions_user_profile,.dialogs_content_user_profile,.dialog_content_user_profile").hide();
});
});

$(document).ready(function() { 
$(".search_dop_layout,.language_choise_layout,.signin_layout").hide();
$(".user_layout").click(function(){
    $(".signin_layout").toggle();
    $(".search_dop_layout,.language_choise_layout").hide();
    $(".text_layout_user").focus();
});
$(".search_layout").click(function(){
    $(".search_dop_layout").toggle();
    $(".signin_layout,.language_choise_layout").hide();
    $(".search_text_layout").focus();
});
$(".language_layout_icon").click(function(){
    $(".language_choise_layout").toggle();
    $(".signin_layout,.search_dop_layout").hide();
});

var owl2 = $(".header_slider");
    owl2.owlCarousel({
        items: 1,// Show next and prev buttons
        slideSpeed : 800,
        paginationSpeed : 800,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsTabletSmall: false,
        itemsMobile: false,
        autoPlay: 5000

    });

$(".gallery").fancybox({});
});
$(window).load(function (){ $("#name, #phones,#email").val("");});