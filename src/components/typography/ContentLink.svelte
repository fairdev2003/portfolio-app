<script lang="ts">
	type Props = {
		name: string;
		path: string;
		desc?: string;
	};

	const { name, path, desc }: Props = $props();
</script>

<div class="relative flex items-center justify-between">
	<a data-tip={desc} class="text-neutral-500" href={path}>{'⦁ '} {name}</a>
	<p class="mr-5">{path.replace('/', '')}</p>
</div>

<style>
	@import 'tailwindcss';

	a {
		@apply text-xl text-white;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	p {
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	div {
		@apply w-full border-b-3 border-dotted border-neutral-500 pb-2;
	}
</style>
