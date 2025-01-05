const faqs = document.querySelectorAll('.box h3');
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        const answer = faq.nextElementSibling;
        answer.classList.toggle('show');
    });
});
