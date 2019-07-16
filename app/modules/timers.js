import { timer } from 'rxjs'

// currently just a simple wrapper for rxjs timers
class Timers {
	constructor() {
		console.log("Timers initializing")
	}

	once(time) {
		return timer(time)
	}

	periodic(period, start?) {
		start = start ? start : period
		return timer(start, period)
	}
}

export const timers = new Timers()
