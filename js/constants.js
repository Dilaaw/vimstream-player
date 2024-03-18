/**
 *
 * Init player
 */
export const video = document.getElementById('player');

export const player = new Plyr(video, {
    controls: [
        'play-large', 'rewind', 'play', 'fast-forward', 'progress',
        'current-time', 'duration', 'mute', 'volume', 'captions',
        'settings', 'pip', 'airplay', 'fullscreen'
    ]
});

/**
 *
 * @type {string}
 * Video source
 */
export const videoSrc = 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8'; // Example

/**
 *
 * @type {string}
 * Ads
 */
export const adsLink = "https://google.com"; // Example
