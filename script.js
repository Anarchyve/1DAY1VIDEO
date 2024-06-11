document.addEventListener('DOMContentLoaded', () => {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const today = new Date().toISOString().split('T')[0];
            const todayVideo = data.find(video => video.date === today);
            if (todayVideo) {
                document.getElementById('videoTitle').innerText = todayVideo.title;
                document.getElementById('videoLink').href = todayVideo.url;
                document.getElementById('videoLink').innerText = 'Watch on YouTube';
            } else {
                document.getElementById('videoTitle').innerText = 'No video for today.';
                document.getElementById('videoLink').style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching video data:', error));
});
