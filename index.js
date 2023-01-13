const form = document.querySelector(".form")
const formSubmit = document.querySelector ("#form__button")
formSubmit.addEventListener("click", function(event){
    event.preventDefault();
    form.classList.add("touched");
})

const inputEls = document.querySelectorAll(".form__input")
inputEls.forEach(function(inputEl) {
     inputEl.addEventListener("blur", function() {
         inputEl.classList.add("touched")
     });
})

const emailError = document.getElementById("email-error")
const emailInput = document.getElementById("form__email")
emailInput.addEventListener("input", function(event){
    applyError(event.target.value)
})

function applyError(emailInput){
    const isEmailValid = checkEmail(emailInput);
    if(!isEmailValid && emailInput){
        emailError.textContent = "Looks like this is not an email"
    } else {
        emailError.textContent = "Email cannot be empty" 
    }
}

function checkEmail(emailInput) {
   const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return validEmail.test(emailInput); 
}
