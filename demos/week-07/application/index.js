// List of tracks that have to be played
let track_list = [
  {
    name: "Demo1",
    artist: "Broke For Free",
    image: "https://picsum.photos/640/360",
    path: "songs/sample1.mp3"
  },
  {
    name: "Every Morning",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/320/180",
    path: "songs/every-morning-18304.mp3"
  },
  {
    name: "Relax and Sleep",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/480/270",
    path: "songs/relax-and-sleep-18565.mp3",
  },
  {
    name: "Uplifting Day",
    artist: "Lesfm",
    image: "https://picsum.photos/240/180",
    path: "songs/uplifting-day-15583.mp3",
  }
];

// Step 1: Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
  
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
  
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
  
// Step 2: Specify globally used values
let isPlaying = false;
let track_index = 0;
let timerId = 0;

// Step 3 : Create the audio element for the player
const audioPlayer = document.createElement( 'audio' );

// loadTrack( track_index ) to load a track and set it up
function loadTrack() {
  const currentTrack = track_list[track_index];
  audioPlayer.src = currentTrack.path;
  audioPlayer.load();

  // set details of the song
  now_playing.innerText = `PLAYING ${track_index + 1} OF ${track_list.length}`;
  track_art.style.backgroundImage = `url( "${currentTrack.image}" )`;
  track_name.innerText = currentTrack.name;
  track_artist.innerText = currentTrack.artist;

  clearInterval( timerId );
  timerId = setInterval( seekUpdate, 1000 );

  // set the duration for the song
  // exercise...
  // audioPlayer.duration
}

// Set up a random background color
function random_bg_color() {
    
}
    
// Reset all values to their default
function resetValues() {
}

// To switch to playing when paused, and vice versa
function playpauseTrack() {
  if( isPlaying === false ) {
    playTrack();
  } else {
    pauseTrack();
  }
}
    
function playTrack() {
  audioPlayer.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
}
    
function pauseTrack() {
  audioPlayer.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  track_index = ( track_index + 1 ) % track_list.length;
  loadTrack();
  playTrack();
}
    
function prevTrack() {
  track_ndex = ( track_index - 1 ) % track_list.length;
  loadTrack();
  playTrack();
}

function seekTo() {
  audioPlayer.currentTime = audioPlayer.duration * seek_slider.value / 100;
}
    
function setVolume() {
  audioPlayer.volume = ( volume_slider.value / 100 );
}

// update the progress slider and durations as the music plays
function seekUpdate() {
  console.log( 'executed' );
  const minutes = Math.floor( audioPlayer.currentTime / 60 );
  const seconds = Math.floor( audioPlayer.currentTime - minutes * 60 );

  curr_time.innerText = `${('' + minutes).padStart( 2, '0' )}:${('' + seconds).padStart( 2, '0' )}`;

  // move the seek slider as the song plays out
  seek_slider.value = ( audioPlayer.currentTime / audioPlayer.duration ) * 100;
}

// set the ball rolling when the page loads!
loadTrack();
playpause_btn.addEventListener( 'click', playpauseTrack );
prev_btn.addEventListener( 'click', prevTrack );
next_btn.addEventListener( 'click', nextTrack );
seek_slider.addEventListener( 'input', seekTo );
volume_slider.addEventListener( 'input', setVolume );