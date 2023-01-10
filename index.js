const form = document.querySelector(".form")
const formSubmit = document.querySelector ("#form__button")
formSubmit.addEventListener("click", function(event){
    console.log("OI")
    event.preventDefault();
    form.classList.add("touched");
})





const inputEls = document.querySelectorAll('.form__input') 
inputEls.addEventListener.forEach("click")

// (function(inputEl) {
    
//     inputEl.addEventListener("input", function() {
//         console.log("oi")   
//         // inputEl.classList.add("touched")
//     })
})

// const inputEls = document.querySelectorAll(".form__input")
// // inputEls.addEventListener("click", function(){
// //     inputEls.forEach(function(inputEl) {
// //      inputEl.addEventListener("input", function() {
// //          inputEl.classList.add("touched")
// //      });
// //  })
