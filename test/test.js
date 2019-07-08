import test from 'tape'
import domReporter from 'tape-dom'
domReporter(test) // setup DOM reporter

import unlockAudio from  '../index.js'

// tests
test('unlock audio context', t => {
	t.plan(1)
	t.equal(typeof unlockAudio, 'function', 'is a function');
})

// logs
const logs = []
const log = (message) => {
	let line = document.createElement('p')
	line.textContent = message

	document.getElementById('logs')
	.appendChild(line)
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

log('ready')
log(`audio context: ${audioCtx.state}`)

unlockAudio(audioCtx)

if (isMobile) {
	document.addEventListener('touchstart', (e) => {
		log(`audio context: ${audioCtx.state}`)
	})
} else {
	document.addEventListener('click', (e) => {
		log(`audio context: ${audioCtx.state}`)
	})
}
