<script lang="ts">
	type Props = {
		className?: string;
	};

	const tooltip = 'bottomsdwdadwadaw';

	const { className = '' }: Props = $props();
</script>

<span class={`group relative cursor-help ${className}`}>
	<!-- Tooltip -->
	<slot />
</span>
