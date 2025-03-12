<script>
	import ContactForm from '../../components/ContactForm.svelte';
	import Heading from '../../components/Heading.svelte';
</script>

<div class="lg:col-span-2 flex flex-col gap-10 px-5">

	<div class="flex flex-col">
		<h2>Kontakt</h2>
		<p class="text-gray-500 font-[500]">Jeżeli masz jakąś sprawę do mnie lub po prostu chcesz do mnie napisać zapraszam 😁</p>
		<p class="text-gray-500 font-[500]">Najbardziej aktywny jestem na discordzie ale jeżeli chcesz skontaktować sie drogą emailową to nie mam żadnego problemu. Możesz również wypełnic formularz poniżej.</p>
	</div>

	<div class="flex flex-col gap-10">
		<Heading>Połącz się ze mną</Heading>
		<div class="bg-[#131333] h-20 rounded-lg flex gap-4 items-center px-5">
			<img alt="discord" src="https://img.icons8.com/?size=100&id=g5CM6rE39mwI&format=png&color=FFFFFF" class="w-15 h-15">
			<div class="flex flex-col">
				<a href="discord://discordapp.com/users/424502321800675328" target="_blank">fairshooter</a>
				<p class="text-gray-500 font-[500]">Połącz sie ze mną na discordzie</p>
			</div>
		</div>
		<div class="bg-[#131333] min-h-20 py-2 rounded-lg flex gap-4 items-center px-5">
			<img alt="discord" src="https://cdn.discordapp.com/icons/1259865122789134398/faad2fe04361c77332c37226428ce990.webp?size=80&quality=lossless" class="w-15 h-15 rounded-full">
			<div class="flex flex-col">
				<a href="discord://discord.gg/RWybSwTK5c" target="_blank">Dołącz do serwera PiwOps</a>
				<p class="text-gray-500 font-[500]">Dołącz do serwera społeczności developerów</p>
			</div>
		</div>
<!--		<Heading>Dane kontaktowe</Heading>-->
		<Heading>Formualarz kontaktowy</Heading>
		<ContactForm/>
		<p class="font-[500] text-gray-500 flex justify-center">Słyszymy sie później?</p>

	</div>
</div>

<style>
    a {
        color: white;
        font-weight: bold;
    }
</style>