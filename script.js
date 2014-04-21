(function(){
  var contact_link = $('#contact');
  var contact_info = $('#contact_info');

  contact_link.on('click', function(){
    contact_info.toggle({animate: true});
  });
})();
