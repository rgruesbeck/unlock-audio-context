# unlock-audio-context
Helper function for unlocking audio context on mobile and iOS devices

## Usage
```js
	const audioCtx = new AudioContext();
	
	// unlock audio context
	unlockAudioContext(audioCtx);
```

## Change Log
- 0.2.0 only call unlock once, remove mute flag
- 0.1.0 add mute flag
- 0.0.1 initial version 