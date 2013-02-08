x$(document).on("DOMContentLoaded", function() {
  x$("body._home._gallery").each(function() {
    // console.log("reached body");
    var interval = null;
    var mtvNext;
    var cookie;

    jQuery(function(){
      // console.log("reached interval");
      interval = setInterval(callNext, 6000);


      // check cookie
      // cookie = $.cookie('mw-state');
      // if(cookie === 'mtv-play') {
      //   interval = setInterval(callNext, 30000);
      //   setSelected('#mtv-play');
      // }

    });

    function callNext(){
      // console.log("reached click");
      mtvNext = jQuery('.mtv-selected').next();
      setSelected(mtvNext);
      mtvNext.trigger('click');
    }

    // function callPrev(){
    //   // console.log("reached click");
    //   jQuery('#navPrev').find('input').trigger('click');
    // }

    function setSelected(element) {
      $('.mtv-selected').removeClass('mtv-selected');
      element.addClass('mtv-selected');
    }

    // jQuery('#mtv-stop').click(function() {
    //   $.cookie('mw-state', 'mtv-stop');
    //   clearInterval(interval);
    //   setSelected("#mtv-stop");
    // });

    // jQuery('#mtv-play').click(function() {
    //   interval = setInterval(callNext, 30000);
    //   setSelected("#mtv-play");
    //   $.cookie('mw-state', 'mtv-play');
    // });

    // jQuery('#mtv-next').click(function() {
    //   $.cookie('mw-state', 'mtv-next');
    //   callNext();
    // });

    // jQuery('#mtv-prev').click(function() {
    //   $.cookie('mw-state', 'mtv-prev');
    //   callPrev();
    // });

  });
});