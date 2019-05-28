$('.modal:has(.carousel)').on('shown', function() {
    var $carousel = $(this).find('.carousel');
  
    if ($carousel.data('carousel') && $carousel.data('carousel').sliding) {
      $carousel.find('.active').trigger($.support.transition.end);
    }
  });​
  