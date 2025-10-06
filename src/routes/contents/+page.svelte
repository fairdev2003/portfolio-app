<script lang="ts">
	import { pageSections } from '$lib';
	import { hobbyContents, pageContents, shitpostContents } from '$lib/contents';
	import ContactForm from '../../components/ContactForm.svelte';
	import Document from '../../components/Document.svelte';
	import ContentLink from '../../components/typography/ContentLink.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import Paragraph from '../../components/typography/Paragraph.svelte';
	import Text from '../../components/typography/Text.svelte';
	import RenovationAlert from '../about-me/sectors/components/RenovationAlert.svelte';
	import ContentsTable from './(components)/ContentsTable.svelte';

	type PageContentsType = {
		path: string;
		name: string;
		description?: string;
	};
</script>

<div class="flex flex-col gap-5 lg:col-span-2">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'SPIS TREŚCI', route: '/contents' }
		]}
	/>
	<Heading padding id="Spis-treści">Spis treści.</Heading>
	<Paragraph
		>Jeżeli nie znalazłeś tego co potrzebujesz na mojej stronie w nawigacji, tutaj prawdopodobnie to
		znajdziesz o ile nie ukrylem tego lub treść nie jest zablokowana dla przechodnych użytkowników.
		Jeżeli mimo tego coś widoczne nadal nie bedzie dla ciebie dostepna prosze o kontakt, naprawimy
		{':)'}</Paragraph
	>

	<div class="flex flex-col">
		{@render Contents(pageSections, 'Nawigacja')}
		{@render Contents(hobbyContents, 'Hobby')}
		{@render Contents(shitpostContents, 'Shitpost')}
		{@render Contents(pageContents, 'Pozostałe')}
	</div>
</div>

{#snippet OldDesign()}
	<Document>
		<Heading id="Nawigacja">Nawigacja</Heading>
		<ContentsTable type="section" />
		<Heading id="Pozostałe">Pozostałe</Heading>
		<ContentsTable />
		<div class="h-3"></div>
	</Document>
{/snippet}

{#snippet Contents(contents: PageContentsType[], name: string)}
	<div class="h-5"></div>
	<Heading id={name} padding class="mb-5">{name}</Heading>
	<div class="flex flex-col gap-3">
		{#each contents as content}
			{#if content.path != '/contents'}
				<ContentLink name={content.name} path={content.path} desc={content.description} />
			{/if}
		{/each}
	</div>
{/snippet}

<style>
	a {
		color: white;
		font-weight: bold;
		background-color: transparent;
	}
</style>
