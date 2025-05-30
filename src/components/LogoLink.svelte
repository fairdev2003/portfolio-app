<script lang="ts">
	let { className, logo, text } = $props();
</script>

<span class={`flex gap-1 ${className}`}>
	<img src={logo} alt="text">
	<p>{text}</p>
</span>