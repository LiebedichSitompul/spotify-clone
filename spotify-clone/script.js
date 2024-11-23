function playSong(songFile) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = songFile;
    audioPlayer.play();
    alert('Playing: ' + songFile);
  }
  