$(document).ready(function() {
    
    $(".gnb > li").mouseenter(function(){
        $(".gnb > li > ul ,.gnbBG").stop().slideDown(300);
    });

    
    $(".gnb > li").mouseleave(function(){
        $(".gnb > li > ul ,.gnbBG").stop().slideUp(300);
    });
});
