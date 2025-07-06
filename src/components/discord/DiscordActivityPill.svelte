<script lang="ts">
	import { klimsonApp } from '$lib';

	type Props = {
		mobile?: boolean;
	};

	const { mobile = false } = $props();
</script>

<div
	class={`top-0 mb-2 ${mobile ? 'mx-4 flex' : 'hidden lg:flex'} min-h-10 w-[85%] cursor-pointer items-center gap-3 rounded-xl px-4 py-3 font-medium shadow-md hover:shadow-lg ${klimsonApp.getStylesBasedOnActivity()}`}
>
	<div>
		<img src={klimsonApp.getDiscordAvatar()} class="size-8 rounded-full" />
	</div>
	<div class="flex flex-col">
		<p class="text-sm font-bold">{klimsonApp.discordData?.data.discord_user.global_name}</p>
		<p class="text-[12px] font-bold text-gray-300">
			{klimsonApp.formatDiscordActivityPill()}
		</p>
	</div>
</div>
