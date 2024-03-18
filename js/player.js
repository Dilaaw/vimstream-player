import { video, player, videoSrc, adsLink } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    let activationTimer;

    // Use m3u8 file name as key to save/resume time
    const savedTimeKey = `plyr-time-${videoSrc}`;
    const savedTime = localStorage.getItem(savedTimeKey);

    // Automatic resumption of playback from the recorded position
    if (savedTime !== null && parseFloat(savedTime) > 0) {
        player.once('canplay', function() {
            player.currentTime = parseFloat(savedTime);
        });
    }

    // Saves the current playback position with each update
    player.on('timeupdate', function(event) {
        localStorage.setItem(savedTimeKey, player.currentTime);
    });

    // Reset playback position and resume at beginning if video is over
    player.on('ended', function() {
        localStorage.setItem(savedTimeKey, 0); // Resets to start at beginning of next load
    });

    // Click manager on the player to open the link
    player.elements.container.addEventListener('click', () => {
        if (clickCount < 4) {
            window.open(adsLink, '_blank');
            clickCount++;
        }
    });

    // Link reactivation every 1m30s during pause or replay
    function resetActivationTimer() {
        clearTimeout(activationTimer);
        activationTimer = setTimeout(() => {
            clickCount = 0;
        }, 90000); // 1m30s
    }

    player.on('play', resetActivationTimer);
    player.on('pause', resetActivationTimer);

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            // Automatic playback if the video has not reached the end
            if (!savedTime || parseFloat(savedTime) === 0) player.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() {
            // Automatic playback if the video has not reached the end
            if (!savedTime || parseFloat(savedTime) === 0) video.play();
        });
    }
});
