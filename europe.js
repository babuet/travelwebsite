$(document).ready(function() {
  $('i').hide();
})

$(window).load(function() {
  $('i').show();

  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos.top + 100,
    left: '47%'
  });
})
