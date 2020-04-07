# vid_edit

> a little utility for editing sections of video and audio together

## dependencies

this node app shells out to `ffmpeg` and
[`ffmpeg-concat`](https://github.com/transitive-bullshit/ffmpeg-concat). you'll
need to have both available on your path

```sh
brew install ffmpeg
npm install -g ffmpeg-concat
```

## usage

this is a bit janky, as i threw this together quickly to help a friend :). it's
only been used once at this point. i'll come back to make edits should i find
it more reusable in the future.

place the file you are attempting to edit into the root of the project and name
it `original.mp4`

then edit `src/input.js` with the timestamps you want your final video to be.

the format for an item in the `inputs` array is:

```
[start-time, end-time, duration]
```


## Note

there is a potential bug here in that the frames created in `src/create_frames`
uses the end time, where `src/create_slice` uses the duration. this didn't
prove to be an issue on the initial usage for this, but beware

`ffmpeg-concat` doesn't currently concat all the audio so we're using some
thinking from [this github
issue](https://github.com/transitive-bullshit/ffmpeg-concat/issues/24) to make
the audio sections work.
