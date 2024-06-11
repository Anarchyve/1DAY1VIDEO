document.addEventListener('DOMContentLoaded', () => {
    fetch('videos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const today = new Date().toISOString().split('T')[0];
            const todayVideo = data.find(video => video.date === today);
            if (todayVideo) {
                document.getElementById('videoTitle').innerText = todayVideo.title;
                document.getElementById('videoPlayer').src = todayVideo.url;
            } else {
                document.getElementById('videoTitle').innerText = 'No video for today.';
                document.getElementById('videoPlayer').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('videoTitle').innerText = 'Failed to load video.';
        });
});
