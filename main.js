let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let present = document.querySelector('#present');
let total = document.querySelector('#total');

let index_no = 0;
let Playing_song = false;

let track = document.createElement('audio');
let All_song = [
    {
      
      path: "res/song1.mp3",
      
    },
    {
     
      path: "res/song 2.mp3",
     
    },
    {
     
      path: "res/song 3.mp3",
      
    },
    {
     
      path: "res/song 6.mp3",
      
    },
    {
     
      path: "res/song 5.mp3",
      
    }
 ];

 function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}

function load_track(index_no){
    track.src = All_song[index_no].path;

    track.load();
    total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}
load_track(index_no);


function justplay(){
    if(Playing_song==false){
        playsong();

    }else{
        pausesong();
    }
}

function playsong(){
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }

  function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        alert("login successfully");
        return false;
    }
    else{
        alert("login failed");
    }
}

