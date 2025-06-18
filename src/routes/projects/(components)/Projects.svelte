<script lang="ts">
	import { projects } from '$lib/static';
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="relative justify-center gap-5 md:mx-10 lg:mx-0 lg:grid lg:grid-cols-10">
	<div class="absolute col-span-2 hidden h-full w-0.5 bg-gray-500 lg:flex"></div>
	<div class="col-span-8 flex flex-col gap-10">
		<p class="pl-3">Za niedlugo tak mysle ://</p>
		<!-- {#each projects as { project_name, blog_link, description, status, image }}
			<ProjectCard {status} {project_name} {description} {blog_link} {image}/>
		{/each} -->
	</div>
</div>
