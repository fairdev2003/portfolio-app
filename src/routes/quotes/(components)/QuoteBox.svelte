<script lang="ts">
	import Box from '../../../components/Box.svelte';

	let { quote, author } = $props()
</script>


<Box>
	<i>"{quote}"</i>
	<div class="flex justify-end">
		<p>~~ {author}</p>
	</div>
</Box>