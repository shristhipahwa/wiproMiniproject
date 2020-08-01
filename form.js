var time = new Date();
document.getElementById("today").innerHTML = time;

function validateForm() {
  var error = 0;
  var x = document.getElementById("fname").value;
  var b = document.getElementById("lname").value;

  const str = /^[0-9a-zA-Z]+$/;

  if (str.test(x) == false) {
    document.getElementById("name_error").innerHTML =
      "First Name must be characters";
    return false;
  } else {
    document.getElementById("name_error").innerHTML = "";
  }

  if (str.test(b) == false) {
    document.getElementById("lname_error").innerHTML =
      "Last Name must be characters";
    return false;
  } else {
    document.getElementById("lname_error").innerHTML = "";
  }

  var y = document.getElementById("psw").value;
  if (y.length < 6 || y.length > 12) {
    document.getElementById("password_error").innerHTML =
      "Password length must be between 6 and 12";
    return false;
  } else {
    document.getElementById("password_error").innerHTML = "";
  }

  var yrepeat = document.getElementById("psw-repeat").value;
  if (y !== yrepeat) {
    document.getElementById("password1_error").innerHTML =
      "Passwords does not match";
    return false;
  } else {
    document.getElementById("password1_error").innerHTML = "";
  }

  const first = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
  const second = /[0-9]{3} [0-9]{3} [0-9]{4}/;
  const third = /[0-9]{3}\.[0-9]{3}\.[0-9]{4}/;
  var m = document.getElementById("mobileno.").value;

  if (
    first.test(m) == true ||
    second.test(m) == true ||
    third.test(m) == true
  ) {
    document.getElementById("mobileno._error").innerHTML = "";
  } else {
    document.getElementById("number_error").innerHTML =
      "formats- xxx.xxx.xxxx or xxx xxx xxxx or xxx-xxx-xxxx are accepted";
    return false;
  }

  var db = document.getElementById("dob").value;
  const d = /[0-9]{2}-[0-9]{2}-[0-9]{4}/;
  if (d.test(db) == false) {
    document.getElementById("dob_error").innerHTML =
      "correct date must be filled out";
    return false;
  } else {
    document.getElementById("dob_error").innerHTML = "";
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var mail = document.getElementById("email").value;

  if (re.test(String(mail).toLowerCase()) == false) {
    document.getElementById("mail_error").innerHTML =
      "correct mail must be filled out";
    return false;
  } else {
    document.getElementById("mail_error").innerHTML = "";
  }
  return true;
}

setTimeout(function () {
  alert("You have taken more than expected time:3 min past");
}, 180000);
