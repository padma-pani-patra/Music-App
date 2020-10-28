

let  music = document.querySelector('audio');
let img = document.querySelector('img');
const  play = document.getElementById('play');
let title = document.getElementById('title');
let singer = document.getElementById('singer');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

var songIndex =0;
var isActive = false;
var songs = [
    {
        name : 'first',
        title : 'Surrender Hua',
        singer : 'Amal Mallick',
    },
    {
        name : 'second',
        title : 'Gully Boy',
        singer : 'jasleen Royal',
    },
    {
        name : 'third',
        title : 'Goli Mare',
        singer : 'sonu nigam',
    }
]



function playAudio(){
    
   isActive = true;
   music.play(); 
   play.classList.replace('fa-play','fa-pause')
    img.classList.add('anime');
}


function pauseAudio(){
    isActive = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
    
}


play.addEventListener('click',() => {
    isActive ? pauseAudio() : playAudio();
    
});



function loadSongs(songs){
    title.textContent = songs.title;
    singer.textContent =songs.singer;
    music.src = "music/" + songs.name + '.mp3';
    img.src = 'images/' + songs.name + '.jpg';
}

function nextSongs(){
    songIndex = (songIndex +1) % songs.length;
    loadSongs(songs[songIndex]);
    playAudio();
    
}
function prevSongs(){
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playAudio();
    
}   
next.addEventListener('click',nextSongs);
prev.addEventListener('click',prevSongs);


