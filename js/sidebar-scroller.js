/*
* 
* Sidebar Scroller 
*     with footer stop.
*
* - sidebar div id="rightContentContainer"
* - will stop above a footer div height
*
* - has condition width < 845 site conforms to single column
*     with sidebar below leftContentContainer, no scrolling
*
*/


$(function() {
  $.fn.scrollBottom = function() {
    return $(document).height() - this.scrollTop() - this.height();
  }    
  var $scrollBottom = $(window).scrollTop() + $(window).height();
  var $sidebar   = $("#rightContentContainer"),
      $window    = $(window),
      offset     = $sidebar.offset(),
      topPadding = 20;
          
  var sidebarHeight = $("#rightContentContainer").height();
  var visibleFoot =  $(document).height() - (sidebarHeight * 2); // height of sidebar + extra
  var stopgap = $scrollBottom;
  if ($(window).width() <= 845) {
    return;
  }
  else if ($(window).width() > 845) {
    $window.scroll(function() {
      stopgap = $window.scrollTop() - offset.top;
      if (stopgap > visibleFoot ) {
        //console.log("this is a stop.");
        return;
      }
      if ($window.scrollTop() > offset.top) {
        $sidebar.stop().animate({
          marginTop: $window.scrollTop() - offset.top + topPadding
        });
      }
      else {
        $sidebar.stop().animate({
          marginTop: 2
        });
      }
    });
  }  
});