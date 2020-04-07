function createAudioDuration(grouping, index) {
    return `ffprobe -v error -select_streams v:0 -show_entries stream=duration -of default=noprint_wrappers=1:nokey=1 ${index}.mp4`
}

module.exports = createAudioDuration;
