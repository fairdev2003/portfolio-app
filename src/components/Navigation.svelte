<script>

import NavButton from './NavButton.svelte';
</script>

<div class="lg:flex hidden flex-col gap-6 relative p-1 sticky top-10">
  <div class="absolute -z-1 w-0.5 h-full bg-gray-700"/>
	<NavButton name="Index" description="" path="/"/>
	<NavButton name="O mnie" description='Trochę informacji o mnie' path="/about-me"/>
	<NavButton name="Projekty" description="Lista moich projektów" path="/projects"/>
	<NavButton name="Quotes" description='Moje życiowe cytaty' path="/quotes"/>
	<NavButton name="Contact" description='Dostępne metody kontaktu' path="/contact"/>
</div>


