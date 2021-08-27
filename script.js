const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active")
    })
});




// document.querySelectorAll(".question").forEach((question) => question.addEventlistener("click", () => {
//     if (question.parentNode.classList.contains("active")) {
//         question.parentNode.classList.toggle("active")
//     } else {
//         document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
//         question.parentNode.classList.add("active")
//     }
// }))