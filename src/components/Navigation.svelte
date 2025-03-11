<script>

import NavButton from './NavButton.svelte';
</script>

<div class="lg:flex hidden flex-col gap-6 relative p-1 sticky top-10">
  <div class="absolute -z-1 w-0.5 h-full bg-gray-700"></div>
	<NavButton name="Index" description="" path="/"></NavButton>
	<NavButton name="About Me" description='Little info about me' path="/about-me"></NavButton>
	<NavButton name="Projects" description="List of my projects" path="/projects"></NavButton>
	<NavButton name="Quotes" description='My life qutes' path="/quotes"></NavButton>
	<NavButton name="Contact" description='Available ways to contact me' path="/contact"></NavButton>
</div>


