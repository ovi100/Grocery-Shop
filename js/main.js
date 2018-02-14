/*------------------------------------
 *Author:Storrea LTD
 *Template:The Online Store
 *Version:1.0
 *-------------------------------------
 */


jQuery(document).ready(function() {

  /*
   * ----------------------------------------------
   *-----------------Preloader---------------------
   * ----------------------------------------------
   */

  // var themeWindow = $(window);
  // var pagebody = $('html, body');
  //
  // themeWindow.on("load", function() {
  //
  //   var preloader = jQuery('.preloader');
  //   var preloaderArea = jQuery('.preloader-area');
  //   preloader.fadeOut();
  //   preloaderArea.delay(200).fadeOut('slow');
  //   themeWindow.scrollTop(0);
  // });



  /*
   *---------------------------------------------
   *----------------Product Zoom-----------------
   *---------------------------------------------
   */

  $("#pdd-zoom").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair"
  });


  /*
   * -----------------------------------------------------------------
   *--------------------Back To Top------------------
   * -----------------------------------------------------------------
   */

  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })



});


/*
   *---------------------------------------------
   *----------------Side Nav-----------------
   *---------------------------------------------
   */

  function toggleSidebar() {
    document.getElementById("sidenav-toggle").classList.toggle('sideNav-close');
    document.getElementById("main-content").classList.toggle('mainFull');
  }
