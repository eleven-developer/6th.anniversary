const startDate = new Date(2026, 3, 20);

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  document.getElementById('days').innerText = days >= 0 ? days : 0;
  document.getElementById('hours').innerText = hours >= 0 ? hours : 0;
  document.getElementById('minutes').innerText = minutes >= 0 ? minutes : 0;
}

setInterval(updateCounter, 1000);
updateCounter();

function toggleLetter() {
  const letter = document.getElementById('letter');
  const btn = document.getElementById('toggle-btn');

  if (letter.style.display === 'block') {
    letter.style.display = 'none';
    btn.innerText = 'Open Secret Note';
  } else {
    letter.style.display = 'block';
    btn.innerText = 'Close Note';
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-bg');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heart.style.fontSize = Math.random() * 15 + 12 + 'px';

  document.getElementById('hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 600);
