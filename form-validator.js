function ErrorMsgs(email, password){
  this.email = email,
  this.password = password,
  this.errors = []
};

ErrorMsgs.prototype.validateEmail = function(){
  var emailPattern = /^(\S+)\@(\S+)\.(\S+)$/
  if (emailPattern.test(this.email) == false){
    this.errors.push("Must be a valid email address");
  }
};

ErrorMsgs.prototype.validatePswdLength = function(){
  if (this.password.split('').length < 8){
    this.errors.push("Password must be at least 8 characters long");
  }
}

ErrorMsgs.prototype.validatePswdCap = function(){
   if ( (/[A-Z]/).test(this.password) == false ){
    this.errors.push("Password must include a capital letter");
  }
}

ErrorMsgs.prototype.validatePswdNum = function(){
  if ( (/\d/).test(this.password) == false ){
    this.errors.push("Password must include a number")
  }
}

ErrorMsgs.prototype.validate = function(){
    this.validateEmail();
    this.validatePswdLength();
    this.validatePswdCap();
    this.validatePswdNum();
};


$(function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    $('#errorlist li').remove()

    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();
    var msg = new ErrorMsgs(email, password);
    msg.validate();

    if (msg.errors.length > 0 ){
      $.each(msg.errors, function(index, value){
        $('#errorlist').append('<li>' + value + '</li>');
      });
    } else {
      $(this).unbind('submit').submit();
      }

  });
});

