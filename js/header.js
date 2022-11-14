$('#menu').click(function(){
    $('.d1ul').toggleClass('menuOpen')
    $('.d1a').toggleClass('txt_up')
    $('.menuLine').toggleClass('lineAbs')
    $('.line1').toggleClass('lineRo45')
    $('.mid_line').toggleClass('lineNone')
    $('.line2').toggleClass('lineRo_45')
    $('.d1li').removeClass('d1li_open')
});
$('.open_btn').click(function(){
    $(this).toggleClass('opBtnDeg')
    $(this).parents().siblings().removeClass('d1li_open')
    $(this).parents().toggleClass('d1li_open')
});
$('#quick').click(function(){
    $('.line_wrap').toggleClass('ro')
    $('.quick_menu > ul').toggleClass('menu_on')
});