const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('h2');
  const answer = question.querySelector('.answer');

  btn.addEventListener('click', () => {
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});
