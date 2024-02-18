const navBar = document.querySelector("nav"),
menuBtns = document.querySelectorAll(".menu-icon"),
closeBtns = document.querySelectorAll(".close-icon")
overlay = document.querySelector(".overlay");


menuBtns.forEach(menuBtn =>{
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
        navbar1.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    regForm.classList.remove('active');
   

    });
  });

    closeBtns.forEach(closeBtn =>{
     closeBtn.addEventListener("click", () => {
          navBar.classList.remove("open");
        
     
  
      });
    });






   overlay.addEventListener("click", () => {
        navBar.classList.remove("open");
    });

    

let navbar1 = document.querySelector('.navbar1');

document.querySelector('#menu-btn').onclick=() =>{
    navbar1.classList.toggle('active');
    navBar.classList.remove("open");
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    regForm.classList.remove('active');
   
}
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
    navbar1.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    regForm.classList.remove('active');
    navBar.classList.remove("open");
   
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=() =>{
    shoppingCart.classList.toggle('active');
    navbar1.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    regForm.classList.remove('active');
    navBar.classList.remove("open");
    
}

let loginForm = document.querySelector('.login');

document.querySelector('#login-btn').onclick=() =>{
   loginForm.classList.toggle('active');
   navbar1.classList.remove('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   regForm.classList.remove('active');
   navBar.classList.remove("open");
  
}

let regForm = document.querySelector('.container');

document.querySelector('#but').onclick = () =>{
  regForm.classList.toggle('active');
  navbar1.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navBar.classList.remove("open");



 
}

window.onscroll=() =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    regForm.classList.remove('active');
    navbar1.classList.remove('active');
    navBar.classList.remove("open");
  
    
    
}


let form = document.querySelector('.container');

document.querySelector('#sub').onclick = () =>{

  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),

  phoneField = form.querySelector(".phone-field"),
  phoneInput = phoneField.querySelector(".phone"),

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
    const phonePattern = /^(?:\+88|88)?(01[3-9]\d{8})$/;

    if (!phoneInput.value.match(phonePattern)) {
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

}





