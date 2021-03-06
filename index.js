// read userAgent
const device = () => {
	return {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            iOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
	}
}

// unlock locked audio contexts
const unlockAudio = (audioCtx) => {
	let currentDevice = device()
	let called = false
	if (currentDevice.isMobile && audioCtx.state === 'suspended') {
	    // check for locked audio context on touchend
	    // NOTE: NOT using touchstart to avoid getting relocked incase gesture is detected.
	    document.addEventListener('touchend', () => {
			if (!called && audioCtx.state !== 'running') {
				audioCtx.resume()
				called = true
			}
	    })
	}
}

export default unlockAudio
