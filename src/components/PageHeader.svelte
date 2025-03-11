<header class="sticky lg:relative z-10 top-0 py-5 bg-[#0a0a1c] lg:bg-transparent flex pb-5 items-center gap-1 select-none">
	<div class="flex gap-1">
		<span class="text-green-500 text-2xl">{">"}</span>
		<h1>Klimson <span class="code">_</span></h1>
	</div>
	<div class="flex-grow"></div>
	<div class="relative sticky top-0 flex lg:hidden">
		<img class="w-10 h-10 sticky top-5" alt="hamburger"
				 src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF">
	</div>

</header>

<style>
    @keyframes code_animation {
        25% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }

    }

    .code {
        animation-name: code_animation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
</style>