function Validator(){
  this.errors = [];
  this.valid = true
};

Validator.prototype.checkEmail = function(email){
 var format = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  if (email.match(format) == null ){
    this.errors.push("Must be a valid email");
    this.valid = false;
  };
};

Validator.prototype.checkPasswordNumeric = function(password){
  if (password != "a"){
    this.errors.push("Password must have at least one numeric character (0-9");
    this.valid = false;
  };
};

Validator.prototype.checkPasswordCaps = function(password){
  if (password != "a"){
    this.errors.push("Password must have at least one capital letter");
    this.valid = false;
  };
};

Validator.prototype.checkPasswordLength = function(password){
  if (password != "a"){
    this.errors.push("Password must have at least one capital letter");
    this.valid = false;
  };
};

Validator.prototype.validate = function(email, password){
  this.checkEmail(email);
  this.checkPasswordNumeric(password);
  this.checkPasswordCaps(password);
  this.checkPasswordLength(password);
};

Validator.prototype.show_errors = function(){

  $.each(this.errors, function(index, value){
    $('#errors').append("<li>" + value + "</li>");
  });
  validator.valid = true;
  validator.errors = [];
}

// shorthand for $(document).ready();
$(function(){
  validator = new Validator();

  $('form').on('submit', function(e){
    e.preventDefault();
    $('#errors').empty();

    var email = $(':input[type="text"]').val();
    var pswd = $(':input[type="password"]').val();

    validator.validate(email, pswd);

    if (validator.valid == false) {
      validator.show_errors();
    };

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
