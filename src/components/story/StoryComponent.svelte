<script lang="ts">
	import { tick } from 'svelte';
	import type { Story, StoryGroup } from './story.types';
	import gsap from 'gsap';
	import type { Attachment } from 'svelte/attachments';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { easeInOut } from 'framer-motion';
    import Klimson from '../../assets/klimson.jpeg';
    import ExploreMorePic from '../../assets/explore_more.png';

    import Icon from "@iconify/svelte";


	type Props = StoryGroup & {};

	let { created_at, name = '', stories }: Props = $props();
	let storyGroupOpened: boolean = $state(false);
	let modalEl: HTMLDivElement;
    let currentStoryVisibleIndex: number = $state(0)
    let debugStoryPageClick: boolean = $state(false)
    let summaryStoryPageActive: boolean = $state(false)

    const progress = tweened(0, {
        duration: 5000, // 3 sekundy na jedno zdjęcie
        easing: linear
    });

    function plural(value: number, one: string, few: string, many: string): string {
		const mod10 = value % 10;
		const mod100 = value % 100;
		if (value === 1) return one;
		if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return few;
		return many;
	}

    function timeAgo(dateInput: string | Date): string {
		const date = new Date(dateInput);

		date.setHours(date.getHours() + 1);

		const now = new Date();
		const diffMs = now.getTime() - date.getTime();

		const diffSec = Math.floor(diffMs / 1000);
		const diffMin = Math.floor(diffSec / 60);
		const diffHr = Math.floor(diffMin / 60);
		const diffDay = Math.floor(diffHr / 24);

		if (diffSec < 0) return 'przed chwilą'; 
		if (diffSec < 60) return 'kilka sekund temu';
		if (diffMin < 60) return `${diffMin} ${plural(diffMin, 'minutę', 'minuty', 'minut')} temu`;
		if (diffHr < 24) return `${diffHr} ${plural(diffHr, 'godzinę', 'godziny', 'godzin')} temu`;
		if (diffDay === 1) return 'wczoraj';
		if (diffDay < 30) return `${diffDay} ${plural(diffDay, 'dzień', 'dni', 'dni')} temu`;
		if (diffDay < 365) {
			const months = Math.floor(diffDay / 30);
			return `${months} ${plural(months, 'miesiąc', 'miesiące', 'miesięcy')} temu`;
		}

		const years = Math.floor(diffDay / 365);
		return `${years} ${plural(years, 'rok', 'lata', 'lat')} temu`;
	}

    $effect(() => {
        const _ = currentStoryVisibleIndex; 
        const isOpen = storyGroupOpened;

        if (!isOpen) {
            
            progress.set(0, { duration: 0 });
            return; 
        }
        
        progress.set(0, { duration: 0 });

        progress.set(100).then(() => {
        if (currentStoryVisibleIndex < stories.length - 1) {
            currentStoryVisibleIndex++;
        } else {
            
        }
    }).catch(() => {
        
    });
    });

    async function nextStory() {
        if (currentStoryVisibleIndex + 1 < stories.length) {
            await progress.set($progress, { duration: 0 }); 
            currentStoryVisibleIndex++;
            return;
        } 
        summaryStoryPageActive = true
    }

    async function closeModal() {

        

        if (modalEl) {
            gsap.to(modalEl, {y: 900, duration: 0.3, onComplete: () => {
                storyGroupOpened = false;
            }})
        }

    }

    async function previousStory() {

        async function progress_set(p: number) {
            await progress.set($progress, { duration: 0 });
        }

        if (currentStoryVisibleIndex > 0) {
            await progress_set($progress)
            currentStoryVisibleIndex--; 
            return;
        }
    }

	function modalAnimation(): Attachment {
        
		return (element: Element) => {
			gsap.fromTo(element, { y: 500  }, { y: 0, duration: 0.3 });
		};
	}
</script>

<div class="flex flex-col gap-2">
	<div
		onclick={() => {
			storyGroupOpened = !storyGroupOpened;
		}}
		
		class="group h-20 w-15 cursor-pointer items-center justify-center rounded-lg border-2 border-neutral-700 p-1 transition-colors hover:border-neutral-600"
	>
		{#if !stories}
			<div class=" h-full w-full rounded-md bg-neutral-700 group-hover:bg-neutral-600"></div>
		{:else}
			<img
				src={stories[0].media}
				class="flex h-full w-full items-center justify-center rounded-md object-cover"
			/>
		{/if}
	</div>
	{@render StoryName(name)}
</div>

{#snippet StoryName(name: string)}
	<p class="text-center text-xs">{name}</p>
{/snippet}

{#if storyGroupOpened}
	{@render StoryBucket()}
{/if}

{#snippet StoryBucket()}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onclick={(e) => {
			closeModal()
            e.stopPropagation()
		}}
       
		class="fixed inset-0 z-10 flex items-center justify-center bg-black text-white transition-all"
	>   
    {#if summaryStoryPageActive}
        {@render SummaryStoryPage()}
    {:else}
        <div onclick={(e) => {
            e.stopPropagation()
        }} {@attach modalAnimation()} bind:this={modalEl} class="relative flex w-xl lg:p-0 px-4 flex-col justify-center">
            {@render TimeLines()}
            {@render StoryHeader()}
            <div class="relative flex flex-col z-50">
                <div class="h-full w-50 absolute right left-0 z-100 cursor-pointer {debugStoryPageClick && "bg-red-500/50"}" onclick={previousStory}></div>
			    <img src={stories[currentStoryVisibleIndex].media} class="rounded-xl"/>
                <div class="h-full w-50 absolute right right-0 z-100 cursor-pointer {debugStoryPageClick && "bg-red-500/50"}" onclick={nextStory}></div>
            </div>
		</div>
    
    {/if}
		
	</div>
{/snippet}

{#snippet TimeLines()}
    <div class="flex gap-1 w-full pt-2 mb-4">
        {#each Array(stories.length) as _, i}
            <div class="h-1 flex-1 rounded-full bg-white/30 overflow-hidden">
                <div 
                    class="h-full bg-white transition-all"
                    style:width={i === currentStoryVisibleIndex ? `${$progress}%` : i < currentStoryVisibleIndex ? '100%' : '0%'}
                ></div>
            </div>
        {/each}
    </div>    
{/snippet}

{#snippet StoryHeader()}
    <div class="flex gap-3 mb-4">
        <img 
            class="size-11 rounded-full aspect-square object-cover" 
            src={Klimson} 
            alt="pfp"
        >
        <div class="flex justify-between items-center w-full">
            <div class="flex flex-col justify-center lg:max-w-80 max-w-50">
                <p class="text-md flex items-center font-bold gap-1">Klimson  <span class="text-xs text-neutral-400 font-medium">• {timeAgo(stories[currentStoryVisibleIndex].created_at)}</span></p>
                <p class="text-neutral-400 truncate text-xs">{stories[currentStoryVisibleIndex].name}</p>
            </div>
            <div class="mr-5 flex gap-3">
                <button class="cursor-pointer text-neutral-400 hover:text-white">
                    <Icon icon="tabler:dots-filled" width="30" height="30" />
                </button>
                <button onclick={() => {
                    closeModal()
                }} class="cursor-pointer text-neutral-400 hover:text-white">
                    <Icon icon="material-symbols:close" width="30" height="30" />
                </button>
            </div>
        </div>
    </div>
{/snippet}

{#snippet SummaryStoryPage()}
    <div class="to-blue-950 bg-red-500 relative rounded-xl from-purple-700 bg-gradient-to-l w-xl h-9/10">
        <div class="h-full w-50 absolute right left-0 z-100 cursor-pointer {debugStoryPageClick && "bg-red-500/50"}" onclick={() => {
            summaryStoryPageActive = false
            previousStory()
        }}></div>
        <div class="flex justify-center items-center h-full w-full flex-col gap-4">
            <img src={ExploreMorePic} alt="explore_more_picture" class="size-25 rounded-full">
            <p class="font-bold text-xl">Odkryj więcej</p>        
        </div>
    </div>
{/snippet}
