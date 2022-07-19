const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaSteam() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
    }
}

// Event listener for Start button
button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button if picture in picture request is successful
    button.disabled = false;

});

// Function call
selectMediaSteam();