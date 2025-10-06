<script lang="ts">
	import Gallery from '../../../../components/gallery/Gallery.svelte';
	import Heading from '../../../../components/typography/Heading.svelte';
	import Paragraph from '../../../../components/typography/Paragraph.svelte';
	import StatusBit from '../../sectors/components/StatusBit.svelte';
	import type { Project, ProjectPage } from '../project.types';
	import { projects } from '../projects';
	import ProjectGeneralInfo from './components/ProjectGeneralInfo.svelte';

	type Props = {
		project?: Project;
	};

	const { project }: Props = $props();
</script>

{#if project}
	<div class="lg:px-5">
		<ProjectGeneralInfo {...project} />
		<div class="mt-5 flex flex-col gap-3">
			<Heading idTrackingDisabled>Opis</Heading>
			<Paragraph
				>Początkowo projekt był skierowany w celu stworzenia projektu na studia (za który tak swoją
				drogą dostalem 5). Natomiast od jakiegoś czasu zaczynam bardzo lubieć dodaawać najróżniejsze
				komponenty stworzone w 100% przeze mnie. Szczerze powiedziawszy nie lubie bibliotek z już
				gotowo stworzonymi komponentami strony, bo po prostu lubie sój indywidualizm. Strona jest w
				stylu</Paragraph
			>
			<Paragraph
				>Początkowo projekt był skierowany w celu stworzenia projektu na studia (za który tak swoją
				drogą dostalem 5). Natomiast od jakiegoś czasu zaczynam bardzo lubieć dodaawać najróżniejsze
				komponenty stworzone w 100% przeze mnie. Szczerze powiedziawszy nie lubie bibliotek z już
				gotowo stworzonymi komponentami strony, bo po prostu lubie sój indywidualizm. Strona jest w
				stylu</Paragraph
			>
		</div>

		<Heading padding>Galeria</Heading>
		<div class="h-5"></div>

		<Gallery
			items={[
				'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759781996/portfolio/9383b88d-8b38-4054-9216-8d32ade55701.png',
				'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759782259/portfolio/24403025-a9f0-43a1-8522-9f64f8a728ce.png',
				'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759782318/portfolio/e871a5fe-f58e-4c1c-99d9-8ad02a13769c.png'
			]}
		/>
		<div class="h-20"></div>
	</div>
{/if}
