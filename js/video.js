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
});

// document.querySelector("#slider").addEventListener("input", function() {
// 	const video = document.getElementById("player1")
// });

// Pause the video.

document.querySelector("#pause").addEventListener("click", function() {
	// const video = document.getElementById("player1")
	video.pause()
	console.log("Pause Video");
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 

document.querySelector("#slower").addEventListener("click", function() {
	// const video = document.getElementById("player1")
	video.playbackRate = 0.10;
	console.log("Slow video by 10%");
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

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


