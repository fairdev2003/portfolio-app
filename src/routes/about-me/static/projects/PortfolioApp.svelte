<script lang="ts">
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
	</div>
{/if}
