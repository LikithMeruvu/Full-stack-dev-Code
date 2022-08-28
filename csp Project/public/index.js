
$(".one").on("click", function(){
    $('.one').addClass('active');
    $('.one').removeClass('non-active');
    $('.two, .three, .four').removeClass('active');
});

$(".two").on("click", function(){
    $('.two').addClass('active');
    $('.two').removeClass('non-active');
    $('.one, .three, .four').removeClass('active');
});

$(".three").on("click", function(){
    $('.three').addClass('active');
    $('.three').removeClass('non-active');
    $('.one, .two, .four').removeClass('active');
});

$(".four").on("click", function(){
    $('.four').addClass('active');
    $('.four').removeClass('non-active');
    $('.one, .three, .two').removeClass('active');
});

