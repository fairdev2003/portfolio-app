<script lang="ts">

	import Heading from '../../../components/Heading.svelte';

	type ComponentProps = {
		image: string;
		blog_link: string;
		project_name: string;
		description: string;
		status: "active" | "inactive" | "done";
	}

	function getActiveStatusColor(status: string): string {
		switch (status) {
			case "active":
				return "bg-yellow-500";
			case "inactive":
				return "bg-red-500";
			case "done":
				return "bg-green-500";
			default:
				return "bg-gray-200";
		}
	}

	let { image, blog_link, project_name, description, status } : ComponentProps = $props()
</script>


<div class="flex gap-10 w-full">
	<div class="bg-gray-500 w-0.5 h-full lg:relative col-span-2 hidden lg:flex">
		<div class={`${getActiveStatusColor(status)} rounded-full w-5 h-5 absolute top-10 right-[-10px]`}></div>
	</div>
	<div class="col-span-8 flex flex-col bg-[#131333]">
<!--		<img src={image} alt="project_name" class="object-cover" loading="lazy" />-->
		<div class="bg-[#131333] min-h-2xl p-10">
			<Heading>{project_name}</Heading>
			<p class="text-gray-500 font-[500]">{description}</p>
			<a href={blog_link}>Link</a>
		</div>
	</div>

</div>