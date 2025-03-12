<script lang="ts">
	let email: string = ""
	let subject: string = ""
	let message: string = ""
	let error: string = ""
	let sucess: string = ""

	function handleInput() {
		error = ""
		sucess = ""
	}

	async function handleSubmit(event: InputEvent) {
		event.preventDefault()
		if (email == "" && message == "" && subject == "") {
			error = "Nie można wysłać pustego formularza."
		} else {
			try {
				const response = await fetch("https://formspree.io/f/xblgjpyr", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, subject, message })
				});

				if (!response.ok) {
					error = "Nie udało się wysłać wiadomości.";
				}

				if (response.ok) {
					sucess = "Twój formularz został do mnie wysłany!"
				}
			} catch (err) {
				console.log(err)
			}
		}
	}

</script>

<div class="mt-3">
	<div class="flex flex-col grid-cols-2 gap-4">
		<div class="flex flex-col gap-2">
			<label class="text-white font-[500] mb-1">Email</label>
			<input
				on:input={handleInput}
				bind:value={email}
				class="bg-[#131333] font-[500] outline-none p-3 w-full caret-gray-500"/>
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-white font-[500] mb-1">Temat</label>
			<input
				on:input={handleInput}
				bind:value={subject}
				class="bg-[#131333] font-[500] outline-none p-3 w-full caret-gray-500"/>
		</div>
		<div class="flex flex-col col-span-2">
			<label class="text-white font-[500] mb-1">Wiadomość</label>
			<textarea
				on:input={handleInput}
				bind:value={message}
				class="bg-[#131333] font-[500] outline-none p-3 w-full h-[200px] caret-gray-500"/>
		</div>
	</div>

	{#if error.length > 0}
		<p class="flex justify-center text-red-500 font-[500] mt-5">{error}</p>
	{/if}
	{#if sucess.length > 0}
		<p class="flex justify-center text-green-500 font-[500] mt-5">{sucess}</p>
	{/if}
	<div class="flex justify-end my-10">
		<button
			on:click={handleSubmit}
			class="cursor-pointer bg-white p-3 text-black font-[500] px-5 hover:bg-white/80"
		>Wyślij</button>
	</div>
</div>
