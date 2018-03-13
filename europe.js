$(document).ready(function() {
  $('i').hide();
})

$(window).load(function() {
  $('i').show();

  $("#button").click(function(event) {
  var text = $("#input").val();
  $("#list").append('<li>' + text + '</li>');
});
$(".moveUp").click(function() {
  var thisLine = $(this).parent();
  var prevLine = thisLine.prev();
  prevLine.before(thisLine);
});
})
