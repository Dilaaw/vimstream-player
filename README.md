# HLS Video Player Custom with Plyr

This HTML file integrates a custom video player using Plyr and HLS.js to play video streams in HLS (HTTP Live Streaming) format as well as MP4 files.

## Features

- **Plyr Video Player:** Uses Plyr, a simple, lightweight, and accessible HTML5 media player, for an enhanced user experience.
- **HLS and MP4 Support:** Thanks to HLS.js, the player can stream video in HLS format. It can also play MP4 files using the browser's native capabilities.
- **Customization:** The player is styled with CSS to adapt to screen size and maintain video aspect ratio.
- **Playback Controls:** Controls include play/pause, rewind/fast forward, volume, fullscreen, and more.
- **Playback Resumption:** The player saves the playback position and resumes from that point when the page is reloaded.
- **Clickable Link:** A clickable link (ads) is integrated into the player, which opens in a new tab upon clicking.

## File Structure

- **`<head>` Section:** Contains metadata, page title, and links to the necessary CSS for Plyr.
- **`<body>` Section:** Incorporates the video player and scripts for Plyr and HLS.js.

## How It Works

1. **Plyr Initialization:** The Plyr player is initialized with a set of defined controls.
2. **Playback Position Management:** The playback position is saved and retrieved using the `localStorage` object.
3. **HLS and MP4 Support:** The player checks if HLS is supported. If not, it loads an MP4 file directly into the `<video>` element.
4. **Click Handler:** A click handler is attached to the player to open an ads in a new tab and limit the number of clicks.

## Custom CSS

- CSS styles are used to customize the appearance and behavior of the player, such as removing scrolling, customizing controls, and positioning the player.

## Scripts

- The scripts interact with the APIs of Plyr and HLS.js to load the video stream, manage playback, and implement additional features like playback resumption and clickable link opening.

## MP4 File Support

- **Support Detection:** If HLS is not supported, the player checks the browser's capability to play MP4 files.
- **MP4 File Loading:** If an MP4 file is used, it is loaded directly into the `<video>` element without going through HLS.js.
