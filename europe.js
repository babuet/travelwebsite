$(document).ready(function() {
  $('i').hide();
})

$(window).load(function() {
  $('i').show();

  $("#button").click(function(event) {
  var text = $("#input").val();
  $("#list").append('<li>' + text + '</li>');
});
})
