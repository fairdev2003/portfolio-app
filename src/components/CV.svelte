<script>
	// Możesz zastąpić tym JSONem importowanym z pliku resume.json
	let resume = {
		name: 'Jakub Kowalski',
		title: 'Programista / Pracownik call center',
		contact: {
			email: 'jakub@example.com',
			phone: '+48 600 000 000',
			location: 'Kraków, Polska'
		},
		summary: 'Krótki, mocny opis: zorganizowany, komunikatywny, zna JavaScript i Svelte.',
		experience: [
			{
				role: 'Pracownik call center',
				company: 'Firma A',
				from: '2022',
				to: 'obecnie',
				bullets: ['Obsługa klienta telefonicznie', 'Rozwiązywanie problemów i eskalacja']
			},
			{
				role: 'Junior Developer',
				company: 'Startup B',
				from: '2020',
				to: '2022',
				bullets: ['Tworzenie frontendu w Svelte', 'Testy jednostkowe']
			}
		],
		skills: ['JavaScript', 'Svelte', 'HTML', 'CSS', 'Komunikacja']
	};

	function printPDF() {
		window.print();
	}
</script>

<div class="card">
	<header>
		<div>
			<h1>{resume.name}</h1>
			<div class="muted">{resume.title} • {resume.contact.location}</div>
			<div class="muted">{resume.contact.email} • {resume.contact.phone}</div>
		</div>
		<div>
			<button class="text-black" id="print" on:click={printPDF}>Drukuj / Zapisz jako PDF</button>
		</div>
	</header>

	<section>
		<h3>Profil</h3>
		<p>{resume.summary}</p>
	</section>

	<section>
		<h3>Doświadczenie</h3>
		{#each resume.experience as e}
			<div class="exp-item">
				<strong>{e.role}</strong> — <em>{e.company}</em>
				<span class="muted">({e.from} — {e.to})</span>
				<ul>
					{#each e.bullets as b}
						<li>{b}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<section>
		<h3>Umiejętności</h3>
		<div class="skills">
			{#each resume.skills as s}
				<div class="skill">{s}</div>
			{/each}
		</div>
	</section>
</div>

<style>
	/* Layout prosty, responsywny */
	:global(body) {
		font-family: Inter, system-ui, Arial;
		margin: 0;
		padding: 20px;
		background: #f5f5f5;
	}
	.card {
		max-width: 900px;
		margin: 0 auto;
		background: white;
		padding: 28px;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}
	h1 {
		margin: 0;
		font-size: 24px;
	}
	.muted {
		color: #666;
		font-size: 14px;
	}
	section {
		margin-top: 18px;
	}
	.exp-item {
		margin-bottom: 12px;
	}
	ul {
		margin: 6px 0 0 18px;
	}
	.skills {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		margin-top: 8px;
	}
	.skill {
		padding: 6px 8px;
		border-radius: 6px;
		background: #eef2ff;
		font-size: 13px;
	}

	/* Print styles: usuń tło, przytnij marginesy, ukryj przycisk */
	@media print {
		:global(body) {
			background: white;
		}
		.card {
			box-shadow: none;
			border-radius: 0;
			padding: 0;
			margin: 0;
		}
		button#print {
			display: none;
		}
		@page {
			size: A4;
			margin: 12mm;
		}
	}
</style>
