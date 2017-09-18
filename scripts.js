$(document).ready(function () {
  $('.accordion-container').each(function(index, element) {
    resizeAccordionContainer(element)
  });
  $('.accordion-container').on('click', '.accordion-tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-section');
      accordionTabs.find('.is-open').removeClass('is-open')
  
      $(this).closest('.accordion-tab').find('.accordion-content').toggleClass('is-open')
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
    $container = $(this).closest('.accordion-container')
    resizeAccordionContainer($container)
  });
});

$(window).resize(function() {
  resizeAccordionContainer($('.accordion-container'))
})

function resizeAccordionContainer(container) {
  if($(window).width() > 800) {
    var height = $(container).find('.is-open').height() 
    + $(container).find('.accordion-tab-link').height()
    $(container).height(height)
  } else {
    $(container).height('auto')
  }
}

$('.small-nav-button').on('click', function() {
  
  if($('.nav-links-container').hasClass('show')) {
    $('.nav-links-container').removeClass('show')
  } else {
    $('.nav-links-container').addClass('show')
  }
  
})
