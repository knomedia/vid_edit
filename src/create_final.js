function createFinal() {
  return `ffmpeg -i merged_video.mp4 -i merged_audio.aac -shortest -c:v copy -c:a aac edited_video.mp4`
}

module.exports = createFinal
