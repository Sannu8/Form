function displayCross(spanId) {
  spanId.style.color = "Red";
  spanId.innerHTML = " Delete";
}

function removeCross(spanId) {
  spanId.innerHTML = " ";
}

function deleteOption(containerId) {
  containerId.parentNode.removeChild(containerId);
}

function checkEmail() {
  var email = document.getElementById("emailid").value;
  var confirm = document.getElementById("confirm").value;
  if (email === confirm) {
    emailMessage.style.color = "LightGreen";
    emailMessage.innerHTML = " Emails successfully match!!";
  } else {
    emailMessage.style.color = "Red";
    emailMessage.innerHTML = " Emails do not match!!";
  }
}

function handleCheck() {
  var input = document.getElementsByClassName("check");

  var oneChecked = false;
  console.log("checked false");

  for (i = 0; i < input.length; i++) {
    if (input[i].checked === true) {
      oneChecked = true;
      console.log("checked true");
    }
  }

  if (oneChecked === true) {
    for (i = 0; i < input.length; i++) {
      input[i].required = false;
      console.log("checked false");
    }
  } else {
    for (i = 0; i < input.length; i++) {
      input[i].required = true;
      console.log("checked true");
    }
  }
}

function addExperience() {
  /// For Label element
  var inputValue = document.getElementById("addValue").value;
  var newLabel = document.createElement("label");
  newLabel.setAttribute("id", inputValue);
  newLabel.setAttribute("class", "container");
  newLabel.setAttribute("onmouseover", "displayCross(cross" + inputValue + ")");
  newLabel.setAttribute("onmouseout", "removeCross(cross" + inputValue + ")");
  var newLabelId = newLabel.id;

  //For input checkbox Element
  var newCheck = document.createElement("input");
  newCheck.type = "checkbox";

  newLabel.appendChild(newCheck);

  //For Span Element first
  var newSpan = document.createElement("span");
  newSpan.setAttribute("class", "checkmark");
  newLabel.appendChild(newSpan);

  //For inputValue
  var inputValue = document.getElementById("addValue").value;
  newLabel.append(inputValue);

  //For SEcond span element
  var secondSpan = document.createElement("span");
  var secondSpanId = "cross" + inputValue;
  secondSpan.setAttribute("id", "cross" + inputValue);
  secondSpan.class = "SpanDelete";
  secondSpan.style.color = "Red";
  secondSpan.setAttribute("onclick", "deleteOption(" + inputValue + ")");
  newLabel.appendChild(secondSpan);

  //Get Value of Input

  var tRow = document.getElementById("ExperienceTd");

  tRow.appendChild(newLabel);
  document.getElementById("addValue").value = "";
}

function handleFocus(inputId) {
  inputId.classList.remove("touched");
  document.getElementById("errorText").innerHTML = "";
}

function handleBlur(inputId) {
  inputId.classList.add("touched");

  var id = inputId.id;
  var error = document.getElementById("errorText");
  console.log(id);
  console.log(inputId.value);

  if (
    id === "fullname" &&
    !inputId.value.match(/^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}/)
  ) {
    error.innerHTML = "Valid FullName is required!";
  } else if (
    id === "tel" &&
    !inputId.value.match(/([+]358[0-9]{9})|(0[0-9]{9})/)
  ) {
    error.innerHTML = "Valid Phone Number is required!";
  } else if (
    id === "emailid" &&
    !inputId.value.match(/^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
  ) {
    error.innerHTML = "Valid Email Address is required!";
  } else if (
    id === "confirm" &&
    !inputId.value.match(/^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
  ) {
    error.innerHTML = "Re-entered Email Address is invalid!";
  } else if (
    id === "address" &&
    !inputId.value.match(/([a-zåäö0-9,.-]\s?){2,}/)
  ) {
    error.innerHTML = "Valid Address is required!";
  } else if (
    id === "city" &&
    !inputId.value.match(/([A-ZÅÄÖa-zåäö]{1,}\s?){1,}/)
  ) {
    error.innerHTML = "Valid City is required";
  } else if (
    id === "country" &&
    !inputId.value.match(/([A-ZÅÄÖa-zåäö]{1,}\s?){1,}/)
  ) {
    error.innerHTML = "Valid Country is required";
  } else if (
    id === "state" &&
    inputId.value !== "" &&
    !inputId.value.match(/([A-ZÅÄÖa-zåäö]{1,}\s?){1,}/)
  ) {
    error.innerHTML = "Please Enter a Valid State or Leave it Blank!";
  } else if (
    id === "zip" &&
    inputId.value !== "" &&
    !inputId.value.match(/[0-9]{5}/)
  ) {
    error.innerHTML = "Please Enter a Valid Zip/Postal Code or Leave it Blank!";
  } else if (
    id === "how" &&
    inputId.value !== "" &&
    !inputId.value.match(/([A-Za-zÅÄÖåäö]\s?){3,}/)
  ) {
    error.innerHTML = "Please Enter Valid Data or Leave it Blank!";
  }
}
