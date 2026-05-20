<script lang="ts">
	import { onMount } from 'svelte';
	import type { PlayerInfo } from './pg3d.types';
	import { api } from '$lib/api/api';
	import Heading from '../../components/typography/Heading.svelte';
	import ResponsiveContainer from '../../components/responsive/ResponsiveContainer.svelte';

	let player_data: PlayerInfo | undefined = $state();

	onMount(async () => {
		const player_data_response = await api.pg3d.GetPlayerData('193914946');

		player_data = player_data_response.data.info;
	});
</script>

<div class="col-span-2 flex flex-col">
	{#if player_data}
		{@const player = player_data}
		<div class="flex w-full gap-4 bg-neutral-900 p-4">
			<img src="data:image/png;base64,{player.avatar}" />
			<div class="">
				<Heading>{player.username}</Heading>
				<div class="flex gap-1">
					<p class="text-xs">Level {player.level}</p>
				</div>
				{#if player.clan}
					<span class="flex items-center gap-1">
						<img
							src="data:image/png;base64,{player.clan.clanlogo}"
							alt="Clan Logo"
							class="size-5 [image-rendering:pixelated]"
						/>
						<p>{player.clan.clanname}</p>
					</span>
				{/if}
			</div>
		</div>
		<div class="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-3">
			{@render Currency(
				'Coins',
				'https://modfs.top/static/img/currency/coin.png',
				player.currency.Coins
			)}
			{@render Currency(
				'Gems',
				'https://modfs.top/static/img/currency/gem.png',
				player.currency.Gems
			)}
			{@render Currency(
				'Coupons',
				'https://modfs.top/static/img/currency/coupon.png',
				player.currency.Coupons
			)}
			{@render Currency(
				'Pixel Pass Tickets',
				'https://modfs.top/static/img/currency/pptickets.png',
				player.currency['Pixel Pass Tickets']
			)}
			{@render Currency(
				'Silver',
				'https://modfs.top/static/img/currency/silver.png',
				player.currency.Silver
			)}
		</div>
	{/if}
</div>

{#snippet Currency(name: string, icon: string, value?: number)}
	{#if value && value > 0}
		<div class="col-span-1 flex h-30 flex-col items-center justify-between bg-neutral-800 p-3">
			<img class="[image-rendering:pixelated]" alt={name + '-icon'} src={icon} />
			<div class="flex flex-col items-center justify-center">
				<p class="text-xs text-neutral-400">{name}:</p>
				<p class="text-xs font-semibold">{value}</p>
			</div>
		</div>
	{/if}
{/snippet}
