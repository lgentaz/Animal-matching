// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(function() {
  $('.uploadPreview').on('change', function(event) {
    console.log("ok");
    var files = event.target.files;
    for (i = 0; i < files.length; i++){
      var image = files[i]
      var reader = new FileReader();
      reader.onload = function(file) {
        var img = new Image();
        img.width = "150"
        img.height = "200"
        img.style.margin = "10px"
        console.log(file);
        img.src = file.target.result;
        $('#showPreview').append(img);
      }
      reader.readAsDataURL(image);
    }
    console.log(files);
  });
});
