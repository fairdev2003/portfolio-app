<script lang="ts">
	import Gallery from '../../../../components/gallery/Gallery.svelte';
	import Image from '../../../../components/gallery/Image.svelte';
	import Heading from '../../../../components/typography/Heading.svelte';
	import Paragraph from '../../../../components/typography/Paragraph.svelte';
	import TechStack from '../../../projects/(components)/TechStack.svelte';
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
		<TechStack stack={project.techStack} />
		<div class="mt-5 flex flex-col gap-3">
			<Heading idTrackingDisabled>Opis.</Heading>
			<Paragraph
				>Początkowo projekt powstał jako praca na studia (za którą, tak swoją drogą, dostałem 5). Z
				czasem jednak coraz bardziej polubiłem dodawać do niego różne komponenty stworzone w 100%
				przeze mnie. Szczerze mówiąc, nie przepadam za bibliotekami z gotowymi elementami interfejsu
				- po prostu lubię swój indywidualizm.</Paragraph
			>
			<Heading idTrackingDisabled padding>Styl.</Heading>
			<Paragraph>
				Postawiłem na dość ciekawy kierunek - połączyłem nowoczesny styl z nutą poezji i literatury.
				Główne czcionki, czyli DM Serif Display i George, idealnie oddają klimat gazety lub
				artykułu. Jeśli zwrócisz uwagę, otwarcie modalu z projektem na urządzeniach mobilnych
				zawiera efekt rozmycia (blur), który jest dziś bardzo popularny. Nie jest to co prawda efekt
				Liquid Glass, ale oddaje ducha nowoczesnego UI.
			</Paragraph>
			<Heading idTrackingDisabled padding>Svelte.</Heading>
			<Paragraph
				>Svelte to cudowny framework. Wcześniej sądziłem, że tego typu niewielkie, niekomercyjne
				projekty trzeba pisać w React. Dałem jednak szansę Sveltowi - i nie żałuję. Stan aplikacji
				można przechowywać bezpośrednio w zmiennych JavaScriptowych (let), a składnia przypomina
				Reacta, od którego zaczynałem. Dodatkowo, niezwykle wygodne jest to, że style CSS można
				pisać bezpośrednio w pliku .svelte.</Paragraph
			>
			<Image
				disabledBorder
				src={'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759795049/portfolio/e1a7fb2d-d2fd-4636-a7d0-4ca524b78bfc.png'}
			/>
		</div>

		<Heading idTrackingDisabled padding>Galeria.</Heading>
		<div class="h-5"></div>

		<Gallery
			items={[
				'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759781996/portfolio/9383b88d-8b38-4054-9216-8d32ade55701.png',
				'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759782259/portfolio/24403025-a9f0-43a1-8522-9f64f8a728ce.png',
				'https://res.cloudinary.com/dzaslaxhw/image/upload/v1759782318/portfolio/e871a5fe-f58e-4c1c-99d9-8ad02a13769c.png'
			]}
		/>
	</div>
{/if}
