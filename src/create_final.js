function createFinal(inputs) {
  let inputFiles = inputs.map(function(grouping, index) {
    return `${index}.mp4`
  }).join(' ')
  return `ffmpeg-concat ${inputFiles} -o edited.mp4`
}
module.exports = createFinal
