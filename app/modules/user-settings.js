import { streamlabs as Streamlabs } from './streamlabs.js'

class UserSettings {
	#settings
	#promise

	constructor() {
		console.log("UserSettings initializing...")
		this.#promise = new Promise((resolve, reject) => {
			this._loadSettings().then(() => {
				resolve(this.#settings)
				console.log("UserSettings initialized...")
			}).catch(e => {
				reject(e)
			})

		})
	}

	async _loadSettings() {
		// waits for streamlabs to be ready before trying to access userSettings
		const platform = await Streamlabs.platform()
		const userSettings = await platform.userSettings.getAll()
		this.#settings = this.parseSettings(userSettings)
		return this.#settings
	}

	// expects a settings object from Streamlabs
	// usually in format { settingName: "JSON_STRING" , settingName ... }
	// returns an object with all JSON strings parsed
	parseSettings(settingsData) {
		let settingsObject = {}
		Object.keys(settingsData)
			.map((setting) => {
				settingsObject[setting] = this.parseToObject(settingsData[setting])
			})
		return settingsObject
	}

	// expects a JSON string and parses it to object
	parseToObject(setting) {
		return JSON.parse(setting)
	}

	// returns the user settings but ensures the parsing is complete first
	async settings() {
		const settings = await this.#promise
		return settings
	}
}

export const userSettings = new UserSettings()
