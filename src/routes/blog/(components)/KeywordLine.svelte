<script lang="ts">
	type Props = {
		text: string;
		color?: string;
	};

	const { text, color = 'purple' }: Props = $props();
</script>

<code class={`rounded-lg bg-gray-700 p-1 px-3 text-xl ${color}`}>{text}</code>
