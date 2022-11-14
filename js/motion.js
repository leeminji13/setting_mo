$(function(){
    $('#').click(function(){

    });

    $(window).scroll(function(){
        var $offset = 200; 

        var $class = $('.class')
        var $classOST = $class.offset().top - $offset
        if($(this).scrollTop() > $classOST){
            $class.find('.enSub').addClass('txt_up');
        }
    });
    $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        $classOST = $class.offset().top - $offset;
    });
});