function pronounce(wordId, audioId) {
  const word = document.getElementById(wordId);
  const audio = document.getElementById(audioId);

  if (!word || !audio) return;

  word.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
}

pronounce('arcet', 'arcetMP3');
pronounce('arceters', 'arcetersMP3');