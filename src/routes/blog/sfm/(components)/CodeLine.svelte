<script lang="ts">
	type Props = {
		className?: string;
		indent?: number;
	};
	const { className = '', indent = 0 }: Props = $props();

	const calculateIndent = (value: number) => {
		return value === 0 ? 0 : value * 1.25; // 1.25rem = 20px (możesz dostosować)
	};
</script>

<div
	class={`code-line flex items-center ${className}`}
	style="padding-left: {calculateIndent(indent)}rem;"
>
	<!-- svelte-ignore slot_element_deprecated -->
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
		color: #6a9955;
		user-select: none;
		font-size: 0.875rem;
	}

	.code-content {
		flex-grow: 1;
		white-space: pre-wrap;
	}
</style>
