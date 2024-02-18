const form = document.querySelector("form"),

  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),

 phoneField = form.querySelector(".phone-field"),
  phoneInput = emailField.querySelector(".phone"),

  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),

  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");


function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); 
  }
  emailField.classList.remove("invalid"); 
}


function checkPhone() {
  const phnPattern = /(\+88)?-?01[3-9]\d{8}$/;
  if (!emailInput.value.match(phnPattern)) {
    return phoneField.classList.add("invalid"); 
  }
phoneField.classList.remove("invalid"); 
}





const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});


function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid"); 
}


function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}


form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  checkEmail();
  checkPhone();
  createPass();
  confirmPass();

  
  emailInput.addEventListener("keyup", checkEmail);
  phoneInput.addEventListener("keyup", checkPhone);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !phoneField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});


function btn(){
  button = document.forms["form1"]["sub"].value;

}