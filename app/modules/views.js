class Views {
	// '$' in variable name indicates it is a jquery object
	#container$
	#username$
	#status$

	constructor() {
		// create a helper for centering objects
		$.fn.center = function () {
			this.css("position", "absolute")
			this.css("top", ($(window)
				.height() - this.height()) / 2 + "px")
			this.css("left", ($(window)
				.width() - this.width()) / 2 + "px")
			return this
		}

		console.log("Views initializing...")
		this.#container$ = $('#app-container')
		this._initViews()
	}

	_initViews() {
		const center$ = $('<div/>')

		const thinker$ = $('<div/>')
		thinker$.css({
			'background-image': 'url("assets/img/thinking.gif")',
			'background-position': 'center',
			'background-size': 'contain',
			'height': '250px',
			'width': '250px'
		})

		const header$ = $('<h2/>', { id: 'header' })
		header$.css({
			'color': 'rgba(255, 255, 255, 0.8)',
			'text-align': 'center'
		})
		header$.html('Welcome ')

		this.#username$ = $('<span/>', { id: 'username' })
		header$.append(this.#username$)

		this.#status$ = $('<h4/>', { id: 'header' })
		this.#status$.css({
			'color': 'rgba(255, 255, 255, 0.8)',
			'text-align': 'center'
		})
		this.#status$.html('Loading...')

		center$.append(header$, thinker$, this.#status$)
		this.#container$.append(center$)
		center$.center()
	}

	updateUserName(name) {
		this.#username$.html(name)
	}

	updateStatus(status) {
		this.#status$.html(status)
	}
}

export const views = new Views()
