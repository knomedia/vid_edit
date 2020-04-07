function createAudioFile(index, duration, transition) {
  duration = parseFloat(duration)
  let adjusted = duration - transition
  return `ffmpeg -i video-1.mp4 -to ${adjusted} -vn -acodec copy ~/audio-1.aac`
}

module.exports = createAudioFile
