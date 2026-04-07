var video = document.getElementById("player1");

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() { 
	console.log("Good job opening the window")
	// play function
	// let video = document.getElementById("player1")
	video.autoplay = false;
	console.log("Your autoplay is off")
	video.loop = false;
	console.log("Your looping is off")
});

// Play the video and update the volume information.  

document.querySelector("#play").addEventListener("click", function() {
	// const video = document.getElementById("player1")
	video.play()
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
});

// Pause the video.

document.querySelector("#pause").addEventListener("click", function() {
	// const video = document.getElementById("player1")
	video.pause()
	console.log("Pause Video");
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 

document.getElementById("slower").addEventListener("click", function() {
	// const video = document.getElementById("player1")
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate);
});


// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.getElementById("faster").addEventListener("click", function() {
	// const video = document.getElementById("player1")
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.getElementById("skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location: " + video.currentTime)
});

// Mute/unmute the video and update the text in the button.

let button = document.querySelector("#mute")
button.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false
		console.log("Muted video");
		button.innerText = "Mute"
	} else {
		video.muted = true 
		console.log("Unmuted video");
		button.innerText = "Unmute"
	}
});

// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#slider").innerHTML = video.volume +"%";
	console.log("The current value is " + video.volume);
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("vintage");
	console.log("Old school is added");
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.add("orig");
	console.log("Old school is removed");
});





