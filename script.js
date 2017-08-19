<!--ONE PAGE SCROLLING BY MOUSE-->
$(document).ready(function () {
    var divs = $('.body');
    var dir = 'up';
    var div = 0;
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {dir = 'down';}
        else {dir = 'up';}
        div = -1;
        divs.each(function(i){
        if (div<0 && ($(this).offset().top >= $(window).scrollTop())) 	{div = i;}
        });
    if (dir == 'up' && div > 0) {div--;}
    if (dir == 'down' && div < divs.length) {div++;}
    //console.log(div, dir, divs.length);
    $('html,body').stop().animate({scrollTop: divs.eq(div).offset().top}, 200);return false;});
    $(window).resize(function () {$('html,body').scrollTop(divs.eq(div).offset().top);});
    });
<!--ONE PAGE SCROLLING BY ARROW BUTTONS-->
$(document).ready(function () {
    var handler = function(e) {
        e = e || window.event;
        var k = e.keyCode || e.which;
	var hgt = 100;
        switch(k) {
          case 38: //up
            document.body.scrollTop -= hgt;
            document.documentElement.scrollTop -= hgt;
            break;
          case 40: //down
            document.body.scrollTop += hgt;
            document.documentElement.scrollTop += hgt;
            break;
          default: return true;
            }
        if( e.preventDefault) e.preventDefault();
        return false;
        };
    if( window.attachEvent) window.addEvent("onkeydown",handler,false);
    else window.addEventListener("keydown",handler,false);
    });
<!--SMOOTH SCROLLING-->
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // (800) specifies the number of milliseconds to scroll to the specified area
            $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
                window.location.hash = hash;
                });
            }
        });
    });
<!--ADD ACTIVE ICONS VIA CLICKING-->
//$(document).ready(function() {
//    $divs = $(".icons");
//    $divs.click(function() {
//        $divs.removeClass("active");
//        $(this).addClass("active");});});
<!--ADD ACTIVE ICONS VIA SCROLLING-->
$(document).ready(function(){
    var aChildren = $("li").children();
    var aArray = [];
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);}
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top-10;
            var divHeight = $(theID).height();
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");}
            else {$("a[href='" + theID + "']").removeClass("active");}}
        });
    });