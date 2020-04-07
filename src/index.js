const run = require('./run')
const inputs = require('./inputs')
const createFrames = require('./create_frames')
const createSlice = require('./create_slice')
const mergeVideo = require('./merge_video')
const createAudioDuration = require('./create_audio_duration')
const createAudioFile = require('./create_audio_file')
const mergeAudio = require('./merge_audio')
const createFinal = require('./create_final')

function log(input) {
  console.log(input);
}

const process = async function process() {
  await run(createFrames(inputs))
  for(let i=0; i<inputs.length; i++) {
    let grouping = inputs[i]
    let index = i
    await run(createSlice(grouping, index), true)
    let duration = await run(createAudioDuration(grouping, index))
    let transitionDuration = 0.5
    if (index === inputs.length - 1) {
      transitionDuration = 0
    }
    await run(createAudioFile(index, duration, transitionDuration), true)
  }
  await run(mergeAudio(inputs), true)
  await run(mergeVideo(inputs), true)
  await run(createFinal(), true)
};

(async function() {
  log('starting')
  await process();
  log('done')
})();
