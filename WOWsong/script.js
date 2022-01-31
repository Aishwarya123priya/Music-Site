console.log("Welcome to WOWsong");

//Inintialize the variables
let Songstart = 0;
let audioElement = new Audio('dus.mp3');
let startPlay = document.getElementById('startPlay');
let Progressbar = document.getElementById('Progressbar');
let transgif = document.getElementById('transgif');
let songName = Array.from(document.getElementsByClassName('songName'))
let songs = [
	{SongName: "Bhot pyaar karte hai" , filePath: "bhot.mp3" , coverpath: "bhot.jpg" },
	{SongName: "Dance like" , filePath: "Dance.mp3" , coverpath: "Dance.jpg" },
	{SongName: "ek aisi wo ldki thi" , filePath: "dhokha.mp3" , coverpath: "dhokha.jpg" },
	{SongName: "jo bheji thi dua" , filePath: "dus.mp3" , coverpath: "dus.jpg" },
	{SongName: "Oo Janna" , filePath: "ojana.mp3" , coverpath: "ojana.jpg" },
	{SongName: "Tere bina besuadi" , filePath: "terebina.mp3" , coverpath: "terebina.jpg" },

]

songName.forEach((element, i)=>{
	console.log(element, i);
	element.getElementsByTagName('img')[0].src = songs[i].coverpath;
	element.getElementsByClassName('SName')[0].innerText = songs[i].SongName;
})

//audioElement.play();
//Handle play/pause click

startPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
	audioElement.play();
	startPlay.classList.remove('fa-play-circle');
	startPlay.classList.add('fa-pause-circle');
	transgif.style.opacity = 1;
}
else{
	audioElement.pause();
	startPlay.classList.remove('fa-pause-circle');
	startPlay.classList.add('fa-play-circle');
	transgif.style.opacity = 0;
}
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
	//update seekbar
	progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	Progressbar.value = progress;
})

Progressbar.addEventListener('change', ()=>{
	audioElement.currentTime = Progressbar.value * audioElement.duration/100;
})

const makeAllplays = () =>{
	Array.from(document.getElementsByClassName('starts')).forEach((element)=>{
		element.classList.remove('fa-pause-circle');
		element.classList.add('fa-play-circle');
	})
}

Array.from(document.getElementsByClassName('starts')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		makeAllplays();
		Songstart = parseInt(e.target.id);
		e.target.classList.remove('fa-play-circle');
		e.target.classList.add('fa-pause-circle');
		audioElement.src = '${Songstart+1}.mp3';
		audioElement.currentTime = 0;
		audioElement.play();
		startPlay.classList.remove('fa-play-circle');
		startPlay.classList.add('fa-pause-circle');
	})
})
