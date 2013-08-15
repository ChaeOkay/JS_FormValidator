// shorthand for $(document).ready();
function Validator(){
  this.errors = [];
  this.valid = true
};

Validator.prototype.checkEmail = function(email){
  //come back for regex
  //a = regex
  if (email != "a"){
    this.errors.push("Must be a valid email");
    this.valid = false;
  };
};

Validator.prototype.validate = function(email, password){
  this.checkEmail(email);
};

$(function(){

  validator = new Validator();

  $('form').on('submit', function(e){
    e.preventDefault();
    $('#errors').empty();

    var email = $(':input[type="text"]').val();
    var pswd = $(':input[type="password"]').val();

    validator.validate(email)

    if (validator.valid == false) {
      console.log(validator.errors);

      $.each(validator.errors, function(index, value){
        $('#errors').append("<li>" + value + "</li>")
      });


      validator.valid = true;
      validator.errors = [];
    }

  });
});

    // $('#errors').append("<li></li>")
// When the user clicks the "Sign Up" button
// They should be notified if any of the following conditions are NOT true
// - The email conforms to the standard pattern
// - The password has at least 8 characters
// - The password has at least one capital letter
// - The password has at least one numeric character

// If any of the above conditions are false
// - The form is not allowed to be submitted
// - Error messages are dislpayed
