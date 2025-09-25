<script lang="ts">
	let email: string = '';
	let subject: string = '';
	let message: string = '';
	let error: string = '';
	let sucess: string = '';

	function handleInput() {
		error = '';
		sucess = '';
	}

	async function handleSubmit(event: InputEvent) {
		error = '';
		sucess = '';
		event.preventDefault();
		if (email == '' && message == '' && subject == '') {
			error = 'Nie można wysłać pustego formularza.';
		} else {
			try {
				const response = await fetch('https://formspree.io/f/xblgjpyr', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, subject, message })
				});

				if (!response.ok) {
					error = 'Nie udało się wysłać wiadomości.';
				}

				if (response.ok) {
					sucess = 'Twój formularz został do mnie wysłany!';
				}
			} catch (err) {
				console.log(err);
			}
		}
	}
</script>

<div class="mt-3">
	<div class="flex grid-cols-2 flex-col gap-4">
		<div class="flex flex-col gap-2">
			<label class="mb-1 font-[500] text-white">Email</label>
			<input
				on:input={handleInput}
				bind:value={email}
				class="box w-full p-3 font-[500] caret-gray-500 outline-none"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label class="mb-1 font-[500] text-white">Temat</label>
			<input
				on:input={handleInput}
				bind:value={subject}
				class="box w-full p-3 font-[500] caret-gray-500 outline-none"
			/>
		</div>
		<div class="col-span-2 flex flex-col">
			<label class="mb-1 font-[500] text-white">Wiadomość</label>
			<textarea
				on:input={handleInput}
				bind:value={message}
				class="box h-[200px] w-full p-3 font-[500] caret-gray-500 outline-none"
			/>
		</div>
	</div>

	{#if error.length > 0}
		<p class="mt-5 flex justify-center font-[500] text-red-500">{error}</p>
	{/if}
	{#if sucess.length > 0}
		<p class="mt-5 flex justify-center font-[500] text-green-500">{sucess}</p>
	{/if}
	<div class="my-10 flex justify-end">
		<button
			on:click={handleSubmit}
			class="cursor-pointer bg-white p-3 px-5 font-[500] text-black hover:bg-white/80"
			>Wyślij</button
		>
	</div>
</div>
