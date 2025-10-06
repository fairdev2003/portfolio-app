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
			<Heading idTrackingDisabled>Opis.</Heading>
			<Paragraph
				>Początkowo projekt był skierowany w celu stworzenia projektu na studia (za który tak swoją
				drogą dostalem 5). Natomiast od jakiegoś czasu zaczynam bardzo lubieć dodaawać najróżniejsze
				komponenty stworzone w 100% przeze mnie. Szczerze powiedziawszy nie lubie bibliotek z już
				gotowo stworzonymi komponentami strony, bo po prostu lubie sój indywidualizm.</Paragraph
			>
			<Heading idTrackingDisabled padding>Styl.</Heading>
			<Paragraph>
				Postawilem na styl dosyć ciekawy bo połączyłem nowoczesny styl ze stylem poezji i
				literatury. Głowne czcionki czyli DM Serif Display i George idealnie wręcz oddają styl
				gazety czy jakiegoś artykułu. Jeżeli zwróciłeś uwage otwarcie modalu z projektem na
				urządzeniach mobilnych ma w sobie blur czyli cos co dzisiaj jest na topie. Nie jest to
				Liquid Glass ale oddaje styl nowoczesnego UI
			</Paragraph>
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
		<div class="h-20"></div>
	</div>
{/if}
