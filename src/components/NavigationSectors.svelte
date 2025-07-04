<script lang="ts">
	import { onMount } from "svelte";

    let path = $state<string>() 

    const formatPath = (path: string) => {

    }

    onMount(() => {
        path = window.location.pathname;
    })
</script>

<div class="col-span-2">
    <p class="text-white">{path}</p>
</div>