
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  const buttons = document.getElementsByTagName("button");
  const buttonsCount = buttons.length;
  for (var i = 0; i <= buttonsCount; i ++) {
    buttons[i].onclick = function(e) {
      const button = document.querySelector(`button[id="${this.id}"]`);
      const audio = document.querySelector(`audio[id="${this.id}"]`);
      const key = document.querySelector(`div[id="${this.id}"]`);

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    };
  }