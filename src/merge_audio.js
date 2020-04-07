const path = require('path')
const fs = require('fs')

function writeAudioFilesDesc(inputs) {
  let fileRefs = inputs.map(function(input, index) {
    let cwd = process.cwd()
    let name = `${index}.aac`
    let fullPath = path.join(cwd, name)
    return `file '${fullPath}'`
  }).join("\n")
  fs.writeFileSync('audio.txt', fileRefs)

}

function mergeAudio(inputs) {
  writeAudioFilesDesc(inputs)
  return `ffmpeg -f concat -safe 0 -i audio.txt -y merged_audio.aac`

}

module.exports = mergeAudio;
