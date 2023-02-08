const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.faq-plus');
  const answer = question.querySelector('.answer');

  btn.addEventListener('click', () => {
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});