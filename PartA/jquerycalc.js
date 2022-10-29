// Document is ready
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("username");
  $("#name").html("Welcome, " + name);

  $(".calc").click(function () {
    // result();

    var x1 = $("#first").val();
    var reg1 = /^[0-9]+$/;
    var x2 = $("#txtNo2").val();
    var reg2 = /^[0-9]+$/;
    if (x1.length == "" && x2.length == "") {
      $("#No1").show();
      $("#txtNo2check").show();
    }
    if (reg2.test(x2) && reg1.test(x1)) {
      var operand = $(this).attr("id");
      var output = () => {
        if (operand == "add") {
          return parseInt(x1) + parseInt(x2);
        } else if (operand == "sub") {
          return parseInt(x1) - parseInt(x2);
        } else if (operand == "mul") {
          return parseInt(x1) * parseInt(x2);
        } else if (operand == "div") {
          return parseInt(x1) / parseInt(x2);
        }
      };
      $("#result").val(output);
    }
  });

  // Validate
  $("#No1").hide();
  let tError = true;
  $("#first").keyup(function () {
    validatet1();
  });

  function validatet1() {
    var t1Value = $("#first").val();
    var regex = /^[0-9]+$/;
    if (t1Value.length == "") {
      $("#No1").show();
      tError = false;
      return false;
    } else if (!regex.test(t1Value)) {
      $("#No1").show();
      $("#No1").html("Please Enter a Valid Number");
      tError = false;
      return false;
    } else {
      $("#No1").hide();
      tError = true;
    }
  }

  // Validate

  $("#txtNo2check").hide();
  let t2Error = true;
  $("#txtNo2").keyup(function () {
    validatet2();
  });

  function validatet2() {
    var t2Value = $("#txtNo2").val();
    var regex2 = /^[0-9]+$/;
    if (t2Value.length == "") {
      $("#txtNo2check").show();
      t2Error = false;
      return false;
    } else if (!regex2.test(t2Value)) {
      $("#txtNo2check").show();
      $("#txtNo2check").html("Please Enter a Valid Number");
      t2Error = false;
      return false;
    } else {
      $("#txtNo2check").hide();
      t2Error = true;
    }
  }
});


