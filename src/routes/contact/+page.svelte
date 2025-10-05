<script>
	import ContactForm from '../../components/ContactForm.svelte';
	import Heading from '../../components/typography/Heading.svelte';

	import PagesNavigation from '../../components/typography/PagesNavigation.svelte';
	import Text from '../../components/typography/Text.svelte';
	import RenovationAlert from '../about-me/sectors/components/RenovationAlert.svelte';
</script>

<div class="flex flex-col gap-5 lg:col-span-2">
	<PagesNavigation
		pages={[
			{ name: 'KLIMSON', route: '/' },
			{ name: 'KONTAKT', route: '/contents' }
		]}
	/>
	<Heading id="Kontakt">Kontakt.</Heading>
</div>

<style>
	a {
		color: white;
		font-weight: bold;
		background-color: transparent;
	}
</style>
