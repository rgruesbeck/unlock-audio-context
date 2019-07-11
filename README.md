# unlock-audio-context
Helper function for unlocking audio context on iOS devices

## Usage
```js
	// unlock audio context: audiocontext, mute flag
	unlockAudioContext(this.audioCtx, this.state.muted);
```

## Change Log
- 0.2.0 only call unlock once, remove mute flag
- 0.1.0 add mute flag
- 0.0.1 initial version
