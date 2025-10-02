<script lang="ts">
	type Props = {
		className?: string;
	};

	const tooltip = 'bottomsdwdadwadaw';

	const { className = '' }: Props = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<span class={`group relative cursor-help ${className}`}>
	<!-- Tooltip -->
	<slot />
</span>
