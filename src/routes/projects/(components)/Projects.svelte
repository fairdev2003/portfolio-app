<script lang="ts">
import { projects } from "$lib/static"
import ProjectCard from './ProjectCard.svelte';
</script>



<div class="lg:grid lg:grid-cols-10 lg:mx-0 md:mx-10 justify-center gap-5 relative">
	<div class="bg-gray-500 w-0.5 h-full absolute col-span-2 hidden lg:flex">

	</div>
	<div class="flex flex-col col-span-8 gap-10">
		{#each projects as { project_name, blog_link, description, status, image }}
			<ProjectCard {status} {project_name} {description} {blog_link} {image}/>
		{/each}
	</div>
</div>