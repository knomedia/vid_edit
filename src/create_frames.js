function createFrameList(inputs) {
  let frames = []
  inputs.forEach(function(grouping){
    frames.push(grouping[0])
    frames.push(grouping[1])
  })
  return frames.join(",")
}

function createFrames(inputs) {
  let frameList = createFrameList(inputs)
  return `ffmpeg -i original.mp4 -force_key_frames ${frameList} framed.mp4`
}

module.exports = createFrames
