// Get modal elements
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const closeModal = document.querySelector('.close');

// Add click event to each horizontal video thumbnail
document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Get the video source from the data attribute
        const videoSrc = this.getAttribute('data-video');
        modalVideo.src = videoSrc; // Set the source of the modal video
        modal.style.display = 'flex'; // Show the modal
        modalVideo.play(); // Play the video
    });
});

// Add click event to each vertical video thumbnail
document.querySelectorAll('.video-thumbnail-vertical').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Get the video source from the data attribute
        const videoSrc = this.getAttribute('data-video');
        modalVideo.src = videoSrc; // Set the source of the modal video
        modal.style.display = 'flex'; // Show the modal
        modalVideo.play(); // Play the video
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
    modalVideo.pause(); // Pause the video
    modalVideo.src = ''; // Reset the source
});

// Close modal when clicking outside of the video
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the modal
        modalVideo.pause(); // Pause the video
        modalVideo.src = ''; // Reset the source
    }
});
