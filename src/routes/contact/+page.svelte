<script>
	import ContactForm from '../../components/ContactForm.svelte';
	import Heading from '../../components/Heading.svelte';
</script>

<div class="flex flex-col gap-10 lg:col-span-2">
	<div class="flex flex-col">
		<h2>Kontakt</h2>
		<p class="font-[500] text-gray-500">
			Jeżeli masz jakąś sprawę do mnie lub po prostu chcesz do mnie napisać zapraszam 😁
		</p>
		<p class="font-[500] text-gray-500">
			Najbardziej aktywny jestem na discordzie ale jeżeli chcesz skontaktować sie drogą emailową to
			nie mam żadnego problemu. Możesz również wypełnic formularz poniżej.
		</p>
	</div>

	<div class="flex flex-col gap-10">
		<Heading>Połącz się ze mną</Heading>
		<div class="box flex h-20 items-center gap-4 rounded-lg px-5">
			<img
				alt="discord"
				src="https://img.icons8.com/?size=100&id=g5CM6rE39mwI&format=png&color=FFFFFF"
				class="h-15 w-15"
			/>
			<div class="flex flex-col">
				<a href="discord://discordapp.com/users/424502321800675328" target="_blank">fairshooter</a>
				<p class="font-[500] text-gray-500">Połącz sie ze mną na discordzie</p>
			</div>
		</div>
		<div class="box flex min-h-20 items-center gap-4 rounded-lg px-5 py-2">
			<img
				alt="discord"
				src="https://cdn.discordapp.com/icons/1259865122789134398/faad2fe04361c77332c37226428ce990.webp?size=80&quality=lossless"
				class="h-15 w-15 rounded-full"
			/>
			<div class="flex flex-col">
				<a href="discord://discord.gg/RWybSwTK5c" target="_blank">Dołącz do serwera PiwOps</a>
				<p class="font-[500] text-gray-500">Dołącz do serwera społeczności developerów</p>
			</div>
		</div>
		<!--		<Heading>Dane kontaktowe</Heading>-->
		<Heading>Formualarz kontaktowy</Heading>
		<ContactForm />
		<p class="flex justify-center font-[500] text-gray-500">Słyszymy sie później?</p>
	</div>
</div>

<style>
	a {
		color: white;
		font-weight: bold;
		background-color: transparent;
	}
</style>
