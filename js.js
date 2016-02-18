$( document ).ready(function() {
  // Use jQuery to add a class to the html
  //$('html').addClass('custom-css');

  // Put all your javascript in this document ready function

  //----

  // Sample code for initialize plugin.
  // The initialize plugin makes it possible to add listeners to elements that appear after the page has been loaded.

  
  $(".mc-tab-panel").initialize( function(){
    $('.mc-tab-panel__tab:nth-child(1)').append('<div title="Default tab" class="indicator" style="position: absolute; background-color: #009CDF; height: 6px; width: 6px; border-radius: 255px; top: 17px; right: 7px;"></div>');
    $('.mc-tab-panel__tab').bind('click', function() {
      $('.indicator').remove();
      $(this).append('<div class="indicator" style="position: absolute; background-color: #009CDF; height: 6px; width: 6px; border-radius: 255px; top: 17px; right: 7px;"></div>');
    })
  })
  

});