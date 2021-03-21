var container_7_1 = document.querySelector("#psgal_7_1");
var msnry;

// initialize  after all images have loaded
imagesLoaded(container_7_1, function() {
  // initialize Masonry after all images have loaded
  new Masonry(container_7_1, {
    // options...
    itemSelector: ".msnry_item",
    //columnWidth: 150,
    isFitWidth: true
  });

  container_7_1.className += " photoswipe_showme";
});
var totalWidth = 0;
var totalHeight = 0;


$(".psgal figure img").each(function( index ) {
  
      totalWidth = $(this).clientWidth;
        totalHeight = $(this).clientHeight;

  //$(this).parent().attr("data-size",totalWidth +"x"+totalHeight)
});

//alert(totalWidth);