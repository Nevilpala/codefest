$(document).ready(function(){
    $('.header nav ul.menulist li a').click(function(){
        $('.header nav ul.menulist li a').removeClass('active');
        $(this).addClass('active');
        console.log($(this));
    });
    
});