<script lang="ts">
	type Props = {
		className?: string;
	};

	const tooltip = 'bottomsdwdadwadaw';

	const { className = '' }: Props = $props();
</script>

<span class={`group relative cursor-help ${className}`}>
	<!-- Tooltip -->
	<div class="absolute bottom-20 z-99 hidden size-20 bg-white group-hover:flex"></div>
	<slot />
</span>
