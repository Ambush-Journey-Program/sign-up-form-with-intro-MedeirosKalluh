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
