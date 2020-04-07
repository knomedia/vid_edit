function createAudioFile(index, duration, transition) {
  duration = parseFloat(duration)
  let adjusted = duration - transition
  return `ffmpeg -i ${index}.mp4 -y -to ${adjusted} -vn -acodec copy ${index}.aac`
}

module.exports = createAudioFile
