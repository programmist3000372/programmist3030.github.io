function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return; // Останавливаем функцию, если звук не найден

  audio.currentTime = 0; // Перематываем звук на начало
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Обработчик нажатия клавиш клавиатуры
window.addEventListener('keydown', playSound);

// Обработчик кликов мышью
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyCode = key.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  });

  key.addEventListener('transitionend', removeTransition);
});