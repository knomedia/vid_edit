const inputs = require('./inputs')
const createFrames = require('./create_frames')
const createSlice = require('./create_slice')
const createFinal = require('./create_final')
const createAudioDuration = require('./create_audio_duration')
const createAudioFile = require('./create_audio_file')

function log(input) {
  console.log(input);
}

//log(createFrames(inputs))
inputs.forEach(function(grouping, index) {
  //log(createSlice(grouping, index))
  log(createAudioDuration(grouping, index))
  //let transitionDuration = 0.5
  //if (index === inputs.length - 1) {
  //  transitionDuration = 0
  //}
  //log(createAudioFile(index, "15.095000", transitionDuration))
})
log(createFinal(inputs))
