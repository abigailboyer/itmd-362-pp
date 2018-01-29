$('#user').on("submit", function(e) {
  console.log('validating email');
  var email = $('#email').val();
  var valid = /.+@.+/;
/*  var valid.test(email); */
  var goodemail = valid.test(email);
  e.preventDefault();
  if(!goodemail){
    console.log('Incorrect email.');
    $('#userlist').append('<li>Your email was invalid.</li>');
    return false;
  } else {
    console.log('Valid email.');
    $('#userlist').append('<li>Submission successful!</li>');
  }

});
