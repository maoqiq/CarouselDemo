var t = 0,
    n = 0,
    count;
$(document).ready(function () {
    count = $('.banner-scroll img').length;
    $('.banner-scroll img:not(:first-child)').hide();
    $('.banner-tip li').click(function () {
        var i = $(this).text() - 1;
        n = i;
        if (i >= count) return;
        $('.banner-scroll img').filter(':visible').fadeOut(500).parent().children().eq(i).fadeIn(1000);
        $(this).addClass('active-current');
        $(this).siblings().removeClass('active-current');
    });
    t = setInterval(showAuto,4000);
    function showAuto() {
        n = n >= count - 1 ? 0 : ++n;
        $('.banner-tip li').eq(n).trigger('click');
    }
});