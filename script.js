function showMessage(response) {
  let videoPlayed = false;
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the button position to absolute
    noButton.style.position = "absolute";

    // Change the image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "tease.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply the new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide the name message
    document.getElementById("question").textContent =
      "nice try! haha firesy sochloo";
    document.getElementById("name").style.display = "none";

    // Add a mouseover event listener to the "No" button
    noButton.addEventListener("mouseover", () => {
      if (!videoPlayed) {
        const videoElement = document.createElement("video");
        videoElement.src = "haha.mp4";
        videoElement.autoplay = true;
        videoElement.controls = false;
        document.body.appendChild(videoElement);
        videoElement.style.position = "fixed";
        videoElement.style.top = "40%";
        videoElement.style.left = "50%";
        videoElement.style.transform = "translate(-50%, -50%)";
        videoElement.style.width = "1000px"
        videoElement.style.borderRadius = "45px";
        document.body.appendChild(videoElement);
        // Set the flag to true after playing the video
        videoPlayed = true;
      }

      // Generate new random coordinates when the button is hovered
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      // Apply new coordinates to the button, causing it to move
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });
  }

  if (response === "Yes") {
    // Remove the name message and the "No" button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    // Create an audio element to play the sound
const audioElement = document.createElement("audio");
audioElement.src = "hehe.mp3"; // Source of the sound
audioElement.preload = "auto"; // Preloading the audio

// Function to play the audio from 10 seconds
function playFrom10Seconds() {
  audioElement.currentTime = 40; // Set the current playback time to 10 seconds
  audioElement.play()
    .catch(e => console.error("Audio playback failed:", e));
}


// Check if the audio is loaded enough to seek.  If not, wait for it.
if (audioElement.readyState >= 2) { // 2 means HAVE_ENOUGH_DATA
    playFrom10Seconds();
} else {
    audioElement.addEventListener('canplaythrough', playFrom10Seconds); // Wait for canplaythrough
    audioElement.addEventListener('loadeddata', playFrom10Seconds); // Fallback if canplaythrough doesn't fire
} // Catch and log playback errors

    // Update the text content, display the message, and change the image to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "yeee Lessgoo ! Love yoouuuu 🥰";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "kiss.gif";

    // Remove the "Yes" button
    document.getElementById("yesButton").remove();
  }

}
