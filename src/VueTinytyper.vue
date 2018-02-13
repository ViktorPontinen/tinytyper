<template>
	<div :class="containerClass" ref="containerElement"><slot></slot></div>
</template>
<script>
import blink from './blinker.js'

export default {
	name: 'VueTinytyper',
	data() {
		return {
			element: null,
			cursorEl: null,
			textEl: null,
			textString: null,
			finishedEventTriggered: false,
		}
	},
	methods: {
		init() {
			this.element.innerHTML = ''
			this.element.innerText = ''
			this.element.appendChild(this.textEl)
			this.element.appendChild(this.cursorEl)

			if(!this.staticCursor) this.blinker = blink(this.cursorEl, this.blinkSpeed)
			if(!this.staticText) {
				this.animate()
			} else {
				this.redraw(this.textString)
			}
		},
		animate() {
			let symbols = this.textString.split('')
			let result = []
			let animation = () => setTimeout(tick, this.textSpeed)
			let tick = () => {
				let character = symbols.shift()
				result.push(character)
				if(character in this.customEvents) this.$emit(this.customEvents[character])
				this.redraw(result.join(''))
				if(symbols.length) animation()
				else {
					if(!this.finishedEventTriggered) this.$emit('animation-finished')
					this.finishedEventTriggered = true
				}
			}

			animation()
		},
		redraw(text) {
			this.textEl.innerText = text
		}
	},
	mounted() {
		this.element = this.$refs.containerElement
		this.cursorEl = document.createElement('span')
		this.textEl = document.createElement('span')

		this.textString = this.text || this.element.innerText

		this.textEl.className = this.textClass
		this.cursorEl.className = this.cursorClass
		this.cursorEl.innerHTML = this.cursor

		this.init()
	},
	props: {
		customEvents: {
			type: Object,
			required: false,
			default() {
				return {}
			}
		},
		text: {
			type: String,
			required: false,
			default: ''
		},
		textSpeed: {
			type: Number,
			required: false,
			default: 95,
		},
		cursor: {
			type: String,
			required: false,
			default: '&#9612;',
		},
		blinkSpeed: {
			type: Number,
			required: false,
			default: 0.05,
		},
		cursorClass: {
			type: String,
			required: false,
			default: 'tiny-typer-cursor',
		},
		textClass: {
			type: String,
			required: false,
			default: 'tiny-typer-text',
		},
		containerClass: {
			type: String,
			required: false,
			default: 'tiny-typer-container',
		},
		staticCursor: {
			type: Boolean,
			required: false,
			default: false,
		},
		staticText: {
			type: Boolean,
			required: false,
			default: false,
		}
	},
}
</script>
