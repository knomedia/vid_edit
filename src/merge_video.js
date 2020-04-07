function mergeVideo(inputs) {
  let inputFiles = inputs.map(function(grouping, index) {
    return `${index}.mp4`
  }).join(' ')
  return `ffmpeg-concat ${inputFiles} -o merged_video.mp4`
}
module.exports = mergeVideo
