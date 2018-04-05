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
  var email = document.getElementById("email").value;
  var confirm = document.getElementById("confirm").value;
  if (email === confirm) {
    emailMessage.style.color = "LightGreen";
    emailMessage.innerHTML = " Emails successfully match!!";
  } else {
    emailMessage.style.color = "Red";
    emailMessage.innerHTML = " Emails do not match!!";
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
}

function handleBlur(inputId) {
  inputId.classList.add("touched");
}
