// Document is ready
$(document).ready(function () {
  // Validate Username
  $("#uservalidation").hide();
  let usernameError = true;
  $("#membername").keyup(function () {
    validateUsername();
  });
  
  function validateUsername() {
    let usernameValue = $("#membername").val();
    if (usernameValue.length == "") {
    $("#uservalidation").show();
    usernameError = false;
    return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
    $("#uservalidation").show();
    $("#uservalidation").html("**length of username must be between 4 and 10");
    usernameError = false;
    return false;
    } else {
    $("#uservalidation").hide();
    usernameError = true;
    }
  }

  $("#emailvalidation").hide();
  let emailvalidation = true;
  $("#emailid").keyup(function () {
    validationofEmail();
  });
  
  // Validate Email
  function validationofEmail() {
    let emailVal = $("#emailid").val();
    let regex2 = /^([\w\.]+)@northeastern.edu$/;
    if (emailVal.length == "") {
      $("#emailvalidation").show();
      emailvalidation = false;
      return false;
    } else if (!regex2.test(emailVal)) {
      $("#emailvalidation").show();
      $("#emailvalidation").html("Please enter a Northeastern mail ID");
      usernameError = false;
      return false;
    } else if (emailVal.length < 19) {
      $("#emailvalidation").show();
      $("#emailvalidation").html("Not a Valid email ID");
      emailvalidation = false;
      return false;
    } else {
      $("#emailvalidation").hide();
      emailvalidation = true;
    }
  }
  
  // Validate Password
  $("#passwordval").hide();
  let passwordError = true;
  $("#passcheck").keyup(function () {
    validatePassword();
  });
  function validatePassword() {
    let passwordvalue = $("#passcheck").val();
    if (passwordvalue.length == "") {
    $("#passwordval").show();
    passwordError = false;
    return false;
    }
    if (passwordvalue.length < 4 || passwordvalue.length > 16) {
    $("#passwordval").show();
    $("#passwordval").html(
      "**length of your password must be between 4 and 10"
    );
    $("#passwordval").css("color", "red");
    passwordError = false;
    return false;
    } else {
    $("#passwordval").hide();
    passwordError = true;
    }
  }
  
 
  
  // Submit button
  $("#submitbtn").click(function () {
    validateUsername();
    validatePassword();
    validationofEmail();
    if ( usernameError == true && passwordError == true && emailvalidation == true) {
      return true;
    
    
    } else {
      alert(
        "Login Unsuccesful! Please check either your Username, Email or Password"
      );
      return false;
    }

  
  });
  });
  