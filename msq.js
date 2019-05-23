(function () {
  var email=prompt("Enter user email");
   var url = location.protocol+"//"+location.host+"/admin/simpleuser/user/?q="+email;
   $(document.body).append('<iframe frameborder="0" scrolling="no" id="myFrame"></iframe>');
   $('iframe#myFrame').attr('src', url);
   $('iframe#myFrame').load(function() {
      var uid = $("#myFrame").contents().find(".action-checkbox").first().find("input.action-select").first().attr("value")
      var mu = location.protocol+"//"+location.host+"/admin/simpleuser/user/"+ uid + "/masquerade";
      window.location=mu;
   });
})();
