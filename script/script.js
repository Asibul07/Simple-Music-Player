let title = document.getElementById("title")
let playPause = document.getElementById("playPause")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let audio = document.getElementById("audio")
let img = document.getElementById("img")
let progress = document.getElementById("progress")

// create songList 

let songList = [{
        path: "broad-street-no-copyright-hip-hop-background-music-126603.mp3",
        songName: "Broad Street",
        imge: "62ab40bcfbe45f76aeafab7b_song title ideas.jpg",
    },
    {
        path: "dark-mystery-trailer-taking-our-time-131566.mp3",
        songName: "Dark myStery",
        imge: "disrupt-music-industry.jpg",
    },
    {
        path: "into-the-river-no-copyright-music-129809.mp3",
        songName: "Into The River",
        imge: "girl-g6f4b5397b_640.jpg",
    },
    {
        path: "lifelike-126735.mp3",
        songName: "Life Like",
        imge: "Great-Songs-Youve-Never-Heard-GettyImages-1223572328.jpg",
    },
    {
        path: "sophia-trailer.mp3",
        songName: "Sophia Trailer",
        imge: "images (1).jpeg",
    },
    {
        path: "Music App\audio\the-cradle-of-your-soul-15700.mp3",
        songName: "The Cradle Soul",
        imge: "images (2).jpeg",
    },
    {
        path: "tuesday-glitch-soft-hip-hop-118327.mp3",
        songName: "Tuesday Glitch Soft",
        imge: "images.jpeg",
    }

];



let songPlaying = false;

function playSound() {
    songPlaying = true;
    audio.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause fa-beat"></i>'

    // set the audio range button 
    if(audio.play()){
        setInterval(()=>{
            progress.value = audio.currentTime;
        },0)
    }
    progress.onChange = function(){
        playSound();
        audio.currentTime = progress.value;
    }
}

function pauseSound() {
    songPlaying = false;
    audio.pause();
    playPause.innerHTML = '<i class="fa-sharp fa-solid fa-play"></i>'
}

playPause.addEventListener("click", () => (songPlaying ?
    pauseSound() : playSound()));

function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
    img.src = songList.imge;
}

let i = 0;
loadSong(songList[i])

function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i])
    playSound();
}
prev.addEventListener("click", prevSong);

function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i])
    playSound();
}
next.addEventListener("click", nextSong);

audio.onloadedmetadata = function(){
    progress.max = audio.duration; 
    progress.value = audio.currentTime; 
}


