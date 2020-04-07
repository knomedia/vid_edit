function createSlice(grouping, index) {
  let start = grouping[0]
  let duration = grouping[2]
  return `ffmpeg -ss ${start} -i framed.mp4 -t ${duration} -vcodec copy -acodec copy -y ${index}.mp4`
}
module.exports = createSlice
