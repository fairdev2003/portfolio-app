<script lang="ts">
import { projects } from "$lib/static"
import ProjectCard from './ProjectCard.svelte';
</script>



<div class="lg:grid lg:grid-cols-10 lg:mx-0 md:mx-10 justify-center gap-5 relative">
	<div class="bg-gray-500 w-0.5 h-full absolute col-span-2 hidden lg:flex">

	</div>
	<div class="flex flex-col col-span-8 gap-10">
		{#each projects as { project_name, blog_link, description, status }}
			<ProjectCard {status} {project_name} {description} {blog_link} image="https://camo.githubusercontent.com/aa1a88f9ef020e38f3e1bc9ed1416d7930041cb907c6e920e6094faa299e254e/68747470733a2f2f692e696d6775722e636f6d2f6a67495a65496b2e706e67"/>
		{/each}
	</div>
</div>