function playSound(e) {
  const keyCode = e.keyCode || e.target.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) {
    console.error('Аудиофайл не найден для клавиши:', keyCode);
    return;
  }

  audio.currentTime = 0;
  audio.play().catch(error => {
    console.error('Ошибка воспроизведения звука:', error);
  });

  if (key) {
    key.classList.add('playing');
  }
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
  key.addEventListener('click', playSound);
  key.addEventListener('transitionend', removeTransition);
});
