<fieldset>
	<button>
		<u>D</u>isplay
	</button>
	<button>
		<u>P</u>rint...
	</button>
	<button disabled> Cancel </button>
</fieldset>

<style>
	u {
		text-decoration: none;
		border-bottom: 1px solid #222222;
	}

	@font-face {
		font-family: 'WindowsRegular';
		src: url('/WindowsRegular.ttf') format('truetype');
	}

	:global(body) {
		cursor: url('assets/graphics/Cursor79.png'), auto;
	}

	button {
		background: #c0c0c0;
		padding: 2px 10px;
		border: none;
		font-family: 'WindowsRegular';

		/* Maybe only 0.5X on retina displays? */
		box-shadow:
			-0.5px -0.5px 0 0.5px #c0c0c0,
			0 0 0 1px #808080,
			-0.5px -0.5px 0 1.5px #ffffff,
			0 0 0 2px #0a0a0a;
	}

	button:active {
		box-shadow:
			-0.5px -0.5px 0 0.5px #808080,
			0 0 0 1px #c0c0c0,
			-0.5px -0.5px 0 1.5px #0a0a0a,
			0 0 0 2px #ffffff;
	}

	button:disabled {
		color: #9a9a9a;
		text-shadow: 1px 1px 0 #eeeeee;
	}

	button:focus {
		outline: 1px dotted #000000;
		outline-offset: -2px;
	}

	fieldset {
		border: none;
	}

	fieldset > * {
		margin: 0 6px 8px 0;
	}

	fieldset > *:last-child {
		margin: 0;
	}
</style>
