const questions = document.querySelectorAll(".faq__question");

// console.log(questions);

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.closest(".faq__item");
        const icon = question.querySelector(".faq__icon");

        console.log(icon);

        faqItem.classList.toggle("isOpen");

        const isOpen = faqItem.classList.contains("isOpen")

        icon.textContent = isOpen ? "-" : "+";
    });
});