# unlock-audio-context
Unlocking web audio context on mobile and iOS devices.

## Install
```sh
npm install --save unlock-audio-context
```

## Use
Pass in the audio context to `unlockAudioContext()`
### Syntax
```js
unlockAudioContext(context)
```

### Examples
```js
const audioCtx = new AudioContext();

// unlock audio context
unlockAudioContext(audioCtx);
```

## Change Log
- 0.2.0 only call unlock once, remove mute flag
- 0.1.0 add mute flag
- 0.0.1 initial version 