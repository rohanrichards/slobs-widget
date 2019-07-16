import { userSettings as UserSettings } from './modules/user-settings.js'
import { streamlabs as Streamlabs } from './modules/streamlabs.js'
import { views as Views } from './modules/views.js'

export default class App {
	constructor() {
		Views.updateStatus('Loading Streamlabs SDK...')
		Streamlabs.ready()
			.then(streamlabs => {
				Views.updateStatus('Streamlabs Ready')
			})

		Views.updateUserName('...')

		this.loadProfiles()
		this.getPlatform()
		this.getUserSettings()
	}

	async loadProfiles() {
		const profiles = await Streamlabs.profiles()
		Views.updateUserName(profiles.streamlabs.name)
		console.log(profiles)
	}

	async getPlatform() {
		const platform = await Streamlabs.platform()
		console.log(platform)
	}

	async getUserSettings() {
		Views.updateStatus('Loading User Settings...')
		const settings = await UserSettings.settings()
		Views.updateStatus('User Settings Loaded')
		console.log(settings)
	}
}

const app = new App()
