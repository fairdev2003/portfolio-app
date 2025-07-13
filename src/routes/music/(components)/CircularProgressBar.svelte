<script lang="ts">
	let offset: number = $state(0);

	type Props = {
		progress?: number;
		size?: number;
		strokeWidth?: number;
	};

	const { size = 32, strokeWidth = 3, progress = 100 }: Props = $props();
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;

	$effect(() => {
		console.log(progress);
		offset = circumference * (1 - progress);
	});
</script>

<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} class="rotate-[-90deg]">
	<!-- Tło -->
	<circle
		cx={size / 2}
		cy={size / 2}
		r={radius}
		stroke="#444"
		fill="none"
		stroke-width={strokeWidth}
	/>

	<!-- Pasek postępu -->
	<circle
		cx={size / 2}
		cy={size / 2}
		r={radius}
		stroke="white"
		fill="none"
		stroke-width={strokeWidth}
		stroke-dasharray={circumference}
		stroke-dashoffset={offset}
		stroke-linecap="round"
		class="transition-all duration-300"
	/>
</svg>
