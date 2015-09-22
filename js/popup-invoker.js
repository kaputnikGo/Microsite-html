/*
* 
* Pop Up Invoker 
*     calls jquery.lightbox_me.js;
*
* - screen width > 845 uses mouseout
* - screen width < 845 uses timer
*
* - popup div contained on calling page, div id="sign_up"
*     css load has div id="sign_up" hidden;
*
*/
window.onload = function() {
  var w = window.innerWidth;
  if (w <= 845) {
    console.log("screen.width <= 845 onload - timer");
    setTimeout(showPopup, 3000);
  }
  else {
    console.log("screen.width > 845 onload - mouseout");
    mouseoutPop();
  }    
}
    
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  }
  else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

function mouseoutPop() {
  addEvent(document, "mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
      console.log("mouse out");
      showPopup();
    }
  });
} 
 
function showPopup() {
  $("#sign_up").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
    $("#sign_up").find("input:first").focus();
  }});
  $('table tr:nth-child(even)').addClass('stripe');
}

function closePopup() {
  $("#close_x").trigger('close');
  $("#sign_up").lightbox_me({showOverlay: false});
}