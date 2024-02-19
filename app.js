//using selectors inside the element
// First way 

const questions = document.querySelectorAll(".question")

questions.forEach(function(question){

    const btn = question.querySelector(".question-btn");

    question.addEventListener("click", function(){
        question.classList.toggle("show-text")
    });
});

// second way
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });