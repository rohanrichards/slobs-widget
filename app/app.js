import { userSettings as UserSettings } from './modules/user-settings.js'
import { streamlabs as Streamlabs } from './modules/streamlabs.js'

export default class App {
	constructor() {
		Streamlabs.ready()
			.then(streamlabs => {
				console.log(streamlabs)
				console.log("app initialized")
			})

		this.loadProfiles()
		this.getPlatform()
		this.getUserSettings()
	}

	async loadProfiles() {
		const profiles = await Streamlabs.profiles()
		console.log(profiles)
	}

	async getPlatform() {
		const platform = await Streamlabs.platform()
		console.log(platform)
	}

	async getUserSettings() {
		const settings = await UserSettings.settings()
		console.log(settings)
	}
}

const app = new App()
