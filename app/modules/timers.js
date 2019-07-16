import { timer } from 'rxjs'

// currently just a simple wrapper for rxjs timers
class Timers {
	constructor() {
		console.log("Timers initializing")
	}

	once(time) {
		return timer(time)
	}

	periodic(time) {
		return timer(time, time)
	}
}

export const timers = new Timers()
