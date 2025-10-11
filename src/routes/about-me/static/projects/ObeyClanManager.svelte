<script lang="ts">
	import Image from '../../../../components/gallery/Image.svelte';
	import Heading from '../../../../components/typography/Heading.svelte';
	import Paragraph from '../../../../components/typography/Paragraph.svelte';
	import TechStack from '../../../projects/(components)/TechStack.svelte';
	import StatusBit from '../../sectors/components/StatusBit.svelte';
	import type { Project, ProjectPage } from '../project.types';
	import { projects } from '../projects';
	import CommitHistory from './components/CommitHistory.svelte';
	import ProjectGeneralInfo from './components/ProjectGeneralInfo.svelte';

	type Props = {
		project?: Project;
	};

	const { project }: Props = $props();
</script>

{#if project}
	<div class="lg:px-5">
		<ProjectGeneralInfo {...project} />
		<CommitHistory author="fairdev2003" repo="clan-management-bot-pg" />
		<TechStack stack={project.techStack} />
		<div class="mt-5 flex flex-col gap-3">
			<Heading idTrackingDisabled>Czym jest ten projekt?</Heading>
			<Paragraph
				>Chyba mój pierwszy realny projekt na który poświęciłem mase czasu. Kaźda dodana funkcja do
				bota działająca była mega satysfakcjonująca</Paragraph
			>
			<Paragraph
				>Przy pomocy tego bota było można szybko i łatwo zarządzać członkami klanu. W wielu
				discordach klanów był ten problem że było dużo "szpiegów" którzy przekazywali informacje do
				naszych wrogów. Przy pomocy tego bota można było każdy nieodpowiedni ruch, dzięki
				zapisywalnym spy listom, które zapobiegały dalszym eskalacją ze strony wrogów</Paragraph
			>

			<Heading idTrackingDisabled>Szukanie użytkowników</Heading>
			<Paragraph
				>Do każdego użytkownika na discordzie był przypisany ID z gry. Przy pomocy tego narzędzia w
				łatwy sposób można było wyszukać gracza, który nie wykonywał tasków w klanie. Działało to w
				dwie strony czyli można bylo zarówno wyszukać po ID z discorda jak i po ID z klanu.</Paragraph
			>
			<Image
				src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1760111053/portfolio/038e9ae5-e002-41fc-99de-57a298c20bdc.png"
			/>
			<Paragraph>Można też było wyświetlić liste członków klanu:</Paragraph>
			<Image
				src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1760111190/portfolio/54aaef55-318f-42a1-9177-742dd0877550.png"
			/>
			<Paragraph
				>Można było również wysłać wiadomość do członków klanu na DM jeżeli nie robili tasków jednym
				kliknięciem</Paragraph
			>
			<Image
				src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1760111327/portfolio/fed3bac1-f1e8-48d1-a69f-3dd75ca1b200.png"
			/>
		</div>
	</div>
{/if}
