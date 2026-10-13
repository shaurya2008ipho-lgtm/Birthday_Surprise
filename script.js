(() => {
  const body = document.body;
  const giftButton = document.getElementById('giftButton');
  const giftInstruction = document.getElementById('giftInstruction');
  const scrollCue = document.getElementById('scrollCue');
  const letter = document.getElementById('letter');
  const confettiLayer = document.getElementById('confettiLayer');
  const confettiButton = document.getElementById('confettiButton');
  const backToTop = document.getElementById('backToTop');
  const toast = document.getElementById('toast');
  let revealed = false;
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function launchConfetti(count = 110) {
    const colors = ['#ff9fc7', '#ffd78a', '#cbb5ff', '#fff0b3', '#f57eb5', '#a7e6d7'];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.setProperty('--duration', `${3.1 + Math.random() * 3.1}s`);
      piece.style.setProperty('--drift', `${Math.round((Math.random() - 0.5) * 260)}px`);
      piece.style.setProperty('--spin', `${Math.round((Math.random() - 0.5) * 1100)}deg`);
      piece.style.animationDelay = `${Math.random() * 0.8}s`;
      piece.style.width = `${5 + Math.random() * 7}px`;
      piece.style.height = `${8 + Math.random() * 10}px`;
      confettiLayer.appendChild(piece);
      piece.addEventListener('animationend', () => piece.remove(), { once: true });
    }
  }

  function openGift() {
    if (revealed) return;
    revealed = true;
    body.classList.add('revealed');
    giftButton.setAttribute('aria-expanded', 'true');
    giftInstruction.textContent = 'Your surprise is here!';
    document.getElementById('birthdayScene').setAttribute('aria-hidden', 'false');
    launchConfetti(85);
    window.setTimeout(() => launchConfetti(45), 1900);
    window.setTimeout(() => showToast('Happy Birthday, Vanshika! ♡'), 2900);
  }

  giftButton.addEventListener('click', openGift);
  scrollCue.addEventListener('click', () => letter.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  confettiButton.addEventListener('click', () => {
    launchConfetti(135);
    showToast('A little extra sparkle, just for you ✨');
  });
  backToTop.addEventListener('click', () => document.getElementById('home').scrollIntoView({ behavior: 'smooth', block: 'start' }));

  // Also allow keyboard visitors to enjoy a burst of confetti with the C key.
  document.addEventListener('keydown', (event) => {
    if ((event.key === 'c' || event.key === 'C') && !event.altKey && !event.ctrlKey && !event.metaKey) {
      launchConfetti(55);
    }
  });
})();
