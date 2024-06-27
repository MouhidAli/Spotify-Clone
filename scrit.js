let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let song = [
    {songName: "And I Say", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Koe Si", filePath: "song/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Barish Ky Aane Sy", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Zihaal e Miskin", filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "O Mahi", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Sik Mein", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Wajah Tum Ho", filePath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Sunn Raha Hai Na Tu", filePath: "song/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "Dior", filePath: "song/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Jatt Lalkere Mar Da", filePath: "song/10.mp3", coverPath: "cover/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverPath;  
    element.getElementsByClassName("songName")[0].innerHTML = song[i].songName;  
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');   
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/ audioElement.duration)* 100);    
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

let makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');    
        element.classList.add('fa-play-circle');
    })  
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');  
   
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');  
   
})
