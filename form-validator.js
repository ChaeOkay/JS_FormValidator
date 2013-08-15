function Validator(){
  this.errors = [];
  this.valid = true
};

Validator.prototype.eval_input = function(input, format, message){
  if (input.match(format) == null ){
    this.errors.push(message);
    this.valid = false;
  }
}

Validator.prototype.checkEmail = function(email){
 var format = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
 var message = "Must be a valid email"
 this.eval_input(email, format, message);
};

Validator.prototype.checkPasswordNumeric = function(password){
  var format = /\d/;
  var message = "Password must have at least one numeric character (0-9)"
  this.eval_input(password, format, message);
};

Validator.prototype.checkPasswordCaps = function(password){
  var format = /[A-Z]/;
  var message = "Password must have at least one capital letter"
  this.eval_input(password, format, message);
};

Validator.prototype.checkPasswordLength = function(password){
  var message = "Password must be at least 8 characters long"
  if (password.length < 8 == true){
    this.errors.push(message);
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
    } else {
      $(this).unbind('submit').submit();
    };

  });
});
