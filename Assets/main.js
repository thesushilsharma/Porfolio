$(document).ready( function() {   

    $('.gallery').isotope({
      itemSelector: '.gallery-item',
    });
    
    // filter items on button click
    $('.gallery-filter').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $('.gallery').isotope({ filter: filterValue });
      $('.gallery-filter li').removeClass('active');
      $(this).addClass('active');
    });
        })