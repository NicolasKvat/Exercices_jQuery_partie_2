$(document).ready(function () {
  $('input').focus(function () {
    $(this).css('border', '100px solid green');
  });
  $('input').blur(function () {
    $(this).css('border', '100px solid red');
  });
});
