const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('#faq-plus,#faq-pluss');
  const answer = question.querySelector('.answer');

  btn.addEventListener('click', () => {
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

function changeIcon() {
  var faq = document.getElementById('faq-plus');
  if (faq.src.match("minus")) {
    faq.src = "img/plus.png";
  } else {
    faq.src = "img/minus.png";
  }
}

function changeIcons() {
  var faq = document.getElementById('faq-pluss');
  if (faq.src.match("minus")) {
    faq.src = "img/plus.png";
  } else {
    faq.src = "img/minus.png";
  }
}