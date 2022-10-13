// Validate form
const submitBtn = document.getElementById("submit");
const errMessage = document.querySelector(".err_message");
const emailField = document.getElementById("email");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailField.value === "") {
    emailField.style.border = "4px solid #fa5757";
    emailField.style.borderWidth = "4px";
    emailField.style.borderBottomLeftRadius = "0";
    emailField.style.borderBottomRightRadius = "0";
    emailField.style.backgroundImage = "url('./images/icon-error.svg')";
    emailField.style.padding = "12px 40px 12px 20px";
    emailField.style.backgroundPosition = "95% 10px";
    emailField.style.backgroundRepeat = "no-repeat";
    errMessage.style.display = "block";
  } else {
    alert("Subscribed");
  }
});
