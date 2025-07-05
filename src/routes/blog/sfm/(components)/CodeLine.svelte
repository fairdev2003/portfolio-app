<script lang="ts">
	export let className = '';
	export let indent = 0;
	export let lineNumber: number | null = null; // numer linii (opcjonalny)

	const calculateIndent = (value: number) => {
		return value === 0 ? 0 : value * 1.25; // 1.25rem = 20px (możesz dostosować)
	};
</script>

<div
	class={`code-line flex items-center ${className}`}
	style="padding-left: {calculateIndent(indent)}rem;"
>
	{#if lineNumber !== null}
		<span class="line-number">{lineNumber}</span>
	{/if}
	<div class="code-content">
		<slot />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Consolas';
		src: url('./assets/consolas.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.code-line {
		font-family: 'Consolas', monospace;
		height: 1.25rem; /* 20px */
		line-height: 1.25rem;
	}

	.line-number {
		display: inline-block;
		width: 2rem;
		text-align: right;
		margin-right: 0.5rem;
		color: #6a9955; /* kolor numerów linii, możesz zmienić */
		user-select: none;
		font-size: 0.875rem;
	}

	.code-content {
		flex-grow: 1;
		white-space: pre-wrap; /* zachowaj formatowanie */
	}
</style>
