// Document is ready
$(document).ready(function () {
  $("#usererror").hide();
  let usernameError = true;
  $("#userid").keyup(function () {
    validateUsername();
  });

  function validateUsername() {
    let usernameValue = $("#userid").val();
    let regex = /^[A-Za-z0-9]+$/;
    if (usernameValue.length == "") {
      $("#usererror").show();
      usernameError = false;
      return false;
    } else if (
      (usernameValue.length > 0 && usernameValue.length < 4) ||
      usernameValue.length > 10
    ) {
      $("#usererror").show();
      $("#usererror").html(
        "Please Enter a valid User Name between 4 and 10 characters"
      );
      usernameError = false;
      return false;
    } else if (!regex.test(usernameValue)) {
      $("#usererror").show();
      $("#usererror").html("Speacial characters are not allowed");
      usernameError = false;
      return false;
    } else {
      $("#usererror").hide();
      usernameError = true;
    }
  }

  $("#emailerror").hide();
  let emailError = true;
  $("#emailid").keyup(function () {
    validateEmail();
  });

  function validateEmail() {
    let emailValue = $("#emailid").val();
    let regex2 = /^([\w\.]+)@northeastern.edu$/;
    if (emailValue.length == "") {
      $("#emailerror").show();
      emailError = false;
      return false;
    } else if (!regex2.test(emailValue)) {
      $("#emailerror").show();
      $("#emailerror").html("Please enter a Northeastern mail ID");
      usernameError = false;
      return false;
    } else if (emailValue.length < 19) {
      $("#emailerror").show();
      $("#emailerror").html("Please enter a Valid email ID");
      emailError = false;
      return false;
    } else {
      $("#emailerror").hide();
      emailError = true;
    }
  }

  $("#passerror").hide();
  let passwordError = true;
  let regex3 = new RegExp("^(?=.*[a-z])");
  let regex4 = new RegExp("^(?=.*[A-Z])");
  let regex5 = new RegExp("^(?=.*[0-9])");
  $("#password").keyup(function () {
    validatePassword();
  });
  function validatePassword() {
    let passwordValue = $("#password").val();
    if (passwordValue.length == "") {
      $("#passerror").show();
      passwordError = false;
      return false;
    } else if (passwordValue.length < 6) {
      $("#passerror").show();
      $("#passerror").html("Please enter a Password of 6 or more characters");
      $("#passerror").css("color", "red");
      passwordError = false;
      return false;
    } else if (!regex3.test(passwordValue)) {
      $("#passerror").show();
      $("#passerror").html(
        "Password must contain at least 1 lowercase character"
      );
      passwordError = false;
      return false;
    } else if (!regex4.test(passwordValue)) {
      $("#passerror").show();
      $("#passerror").html(
        "Password must contain at least 1 uppercase character"
      );
      passwordError = false;
      return false;
    } else if (!regex5.test(passwordValue)) {
      $("#passerror").show();
      $("#passerror").html(
        "Password must contain at least 1 numeric character"
      );
      passwordError = false;
      return false;
    } else {
      $("#passerror").hide();
      passwordError = true;
    }
  }

  // Submit button
  $("#submitbtn").click(function () {
    validateUsername();
    validateEmail();
    validatePassword();
    if (usernameError == true && passwordError == true && emailError == true) {
      if (
        $("#userid").val() == "Kshetra" &&
        $("#emailid").val() == "heggunjemahabala.k@northeastern.edu" &&
        $("#password").val() == "Kshetra@123"
      ) {
        return true;
      } else {
        alert(
          "Login Unsuccesful! Please check either your Username, Email or Password"
        );
        return false;
      }
    } else {
      alert("Please enter all the details");
      return false;
    }
  });
});
