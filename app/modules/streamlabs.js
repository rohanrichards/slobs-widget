class Streamlabs {
	#streamlabs
	#promise
	#profiles
	#settings
	#assets

	constructor(events = true, chat = false) {
		console.log("Streamlabs initializing...")
		this.#streamlabs = window.Streamlabs
		this.#promise = new Promise((resolve, reject) => {
			this._init(chat).then(() => {
				resolve(this.#streamlabs)
				console.log("Streamlabs initialized")
			}).catch(e => {
				reject(e)
			})
		})
	}

	// connects to the streamlabs SDK
	_init(events, chat) {
		return this.#streamlabs.init({
			receiveEvents: events,
			twitchChat: chat
		}).then((data) => {
			this.#profiles = data.profiles
			this.#assets = data.assets
			this.#settings = data.settings
		})
	}

	// used to get an instance of the streamlabs SDK
	// ensures it is initialized
	// returns a promise that resolves to streamlabs object
	ready() {
		return this.#promise
	}

	async platform() {
		const sl = await this.#promise
		return sl
	}

	async profiles() {
		const sl = await this.#promise
		return this.#profiles
	}

	async settings() {
		const sl = await this.#promise
		return this.#settings
	}

	async assets() {
		const sl = await this.#promise
		return this.#assets
	}
}

export const streamlabs = new Streamlabs()
