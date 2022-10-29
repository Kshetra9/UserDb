// Document is ready
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("username");
  $("#name").html("Welcome, " + name);

  $(".result").click(function () {
    // result();

    var val1 = $("#txtFirstNumber").val();
    var reg1 = /^[0-9]+$/;
    var val2 = $("#txtSecondNumber").val();
    var reg2 = /^[0-9]+$/;
    if (val1.length == "" && val2.length == "") {
        $("#No1").show();
        $("#txtSecondNumbercheck").show();
    }
    if (reg2.test(val2) && reg1.test(val1)) {
      var finaloperator = $(this).attr("id");
      var output = () => {
        if (finaloperator == "btnADD") {
          return parseInt(val1) + parseInt(val2);
        } else if (finaloperator == "btnSUB") {
          return parseInt(val1) - parseInt(val2);
        } else if (finaloperator == "btnMUL") {
          return parseInt(val1) * parseInt(val2);
        } else if (finaloperator == "btnDIV") {
          return parseInt(val1) / parseInt(val2);
        }
      };
      $("#result").val(output);
    }
  });


  // Validate
  $("#No1").hide();
  let terrVal = true;
  $("#txtFirstNumber").keyup(function () {
    chk1();
  });

  function chk1() {
    var t1Value = $("#txtFirstNumber").val();
    var regex = /^[0-9]+$/;
    if (t1Value.length == "") {
      $("#No1").show();
      terrVal = false;
      return false;
    } else if (!regex.test(t1Value)) {
      $("#No1").show();
      $("#No1").html("Please Enter a Valid Number");
      terrVal = false;
      return false;
    } else {
      $("#No1").hide();
      terrVal = true;
    }
  }

  // Validate

  $("#No2").hide();
  let t2Error = true;
  $("#txtSecondNumber").keyup(function () {
    chk2();
  });

  function chk2() {
    var t2Value = $("#txtSecondNumber").val();
    var regeval2 = /^[0-9]+$/;
    if (t2Value.length == "") {
      $("#No2").show();
      t2Error = false;
      return false;
    } else if (!regeval2.test(t2Value)) {
      $("#No2").show();
      $("#No2").html("Please Enter a Valid Number");
      t2Error = false;
      return false;
    } else {
      $("#No2").hide();
      t2Error = true;
    }
  }
});


