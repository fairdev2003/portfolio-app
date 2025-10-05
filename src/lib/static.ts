import Modopedia from '../assets/modopedia.webp';

type TechStackType = {
	src: string;
	stack_name: string;
	href: string;
	imageStyle?: string;
};

const techStackItems: TechStackType[] = [
	{ src: 'Lua.svg', stack_name: 'Lua', href: 'https://www.lua.org/' },
	{ src: 'Java.svg', stack_name: 'Java', href: 'https://www.java.com/' },
	{ src: 'Python.svg', stack_name: 'Python', href: 'https://www.python.org/' },
	{
		src: 'HTML5.svg',
		stack_name: 'HTML5',
		href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
	},
	{ src: 'CSS3.svg', stack_name: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
	{ src: 'Bootstrap.svg', stack_name: 'Bootstrap', href: 'https://getbootstrap.com/' },
	{
		src: 'JavaScript.svg',
		stack_name: 'Javascript',
		href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	{ src: 'TypeScript.svg', stack_name: 'Typescript', href: 'https://www.typescriptlang.org/' },
	{ src: 'React.svg', stack_name: 'React', href: 'https://react.dev/' },
	{ src: 'Node.js.svg', stack_name: 'Node.js', href: 'https://nodejs.org/' },
	{ src: 'MySQL.svg', stack_name: 'MySQL', href: 'https://www.mysql.com/' },
	{
		src: 'Express.svg',
		stack_name: 'Express',
		imageStyle: 'invert',
		href: 'https://expressjs.com/'
	},
	{ src: 'Tailwind-CSS.svg', stack_name: 'TailwindCSS', href: 'https://tailwindcss.com/' },
	{ src: 'Next.js.svg', stack_name: 'Next.js', imageStyle: 'invert', href: 'https://nextjs.org/' },
	{ src: 'Figma.svg', stack_name: 'Figma', href: 'https://www.figma.com/' },
	{ src: 'Git.svg', stack_name: 'Git', href: 'https://git-scm.com/' },
	{ src: 'Go.svg', stack_name: 'Go', href: 'https://go.dev/' },
	{ src: 'Redux.svg', stack_name: 'Redux', href: 'https://redux.js.org/' },
	{ src: 'Docker.svg', stack_name: 'Docker', href: 'https://www.docker.com/' },
	{ src: 'Electron.svg', stack_name: 'Electron', href: 'https://www.electronjs.org/' },
	{ src: 'MongoDB.svg', stack_name: 'MongoDB', href: 'https://www.mongodb.com/' },
	{ src: 'Flutter.svg', stack_name: 'Flutter', href: 'https://flutter.dev/' },
	{ src: 'Dart.svg', stack_name: 'Dart', href: 'https://dart.dev/' },
	{ src: 'Svelte.svg', stack_name: 'Svelte', href: 'https://svelte.dev/' }
];

const websiteStack: TechStackType[] = [
	{ src: 'Svelte.svg', stack_name: 'SvelteKit', href: 'https://kit.svelte.dev/' },
	{
		src: 'HTML5.svg',
		stack_name: 'HTML5',
		href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
	},
	{ src: 'CSS3.svg', stack_name: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
	{ src: 'TypeScript.svg', stack_name: 'Typescript', href: 'https://www.typescriptlang.org/' },
	{ src: 'Tailwind-CSS.svg', stack_name: 'TailwindCSS', href: 'https://tailwindcss.com/' }
];

type PageContentsType = {
	path: string;
	name: string;
	description?: string;
};

const pageSections: PageContentsType[] = [
	{ name: 'Index', description: '', path: '/' },
	{ name: 'O mnie', description: 'Trochę informacji o mnie', path: '/about-me' },
	{ name: 'Blog', description: 'Rzeczy ktore mnie interesuja', path: '/blog' },
	{ name: 'Projekty', description: 'Baza moich projektów', path: '/projects' },
	{ name: 'Kontakt', description: 'Dostępne metody kontaktu', path: '/contact' },
	{ name: 'Spis treści', description: 'Wszystkie treści na mojej stronie', path: '/contents' }
];

type ProjectsProps = {
	project_name: string;
	description: string;
	blog_link: string;
	status: 'active' | 'inactive' | 'done';
	image: string;
};

const projects: ProjectsProps[] = [
	{
		project_name: 'Modopedia',
		description:
			'Projekt zacząłem od stworzenia modyfikacji, która integruje ze soba stronę internetową i serwer minecraft. Jednak od jakiegoś czasu skupiłem sie tylko na części o wiki, gdyż zawsze brakowało mi tego o modach minecraft. Projekt jest pisany w Next.js (jako frontend) i w ekstremalnie szybkim Golangu (jako backend)',
		blog_link: '/blog/modopedia',
		status: 'active',
		image: Modopedia
	},
	{
		project_name: 'Modopedia',
		description:
			'Projekt zacząłem od stworzenia modyfikacji, która integruje ze soba stronę internetową i serwer minecraft. Jednak od jakiegoś czasu skupiłem sie tylko na części o wiki, gdyż zawsze brakowało mi tego o modach minecraft. Projekt jest pisany w Next.js (jako frontend) i w ekstremalnie szybkim Golangu (jako backend)',
		blog_link: '/blog/modopedia',
		status: 'inactive',
		image: Modopedia
	},
	{
		project_name: 'Modopedia',
		description:
			'Projekt zacząłem od stworzenia modyfikacji, która integruje ze soba stronę internetową i serwer minecraft. Jednak od jakiegoś czasu skupiłem sie tylko na części o wiki, gdyż zawsze brakowało mi tego o modach minecraft. Projekt jest pisany w Next.js (jako frontend) i w ekstremalnie szybkim Golangu (jako backend)',
		blog_link: '/blog/modopedia',
		status: 'done',
		image: Modopedia
	}
];

type QuoteProps = {
	quote: string;
	author: string;
	path: string;
};

const quotes: QuoteProps[] = [
	{
		quote: 'To, że milczę, nie znaczy, że nie mam nic do powiedzenia.',
		author: 'Jonathan Carroll',
		path: 'cytat-o-milczeniu'
	},
	{
		quote: 'Lepiej zaliczać się do niektórych, niż do wszystkich.',
		author: 'Andrzej Sapkowski',
		path: 'lepiej-zaliczac-sie-do-niektórych'
	},
	{
		quote:
			'Dlaczego nie mogę pokochać samego siebie? Dlatego, że nie mogę pokochać nikogo innego. Kochając kogoś i będąc kochanym, ludzie dowaiadują się, jak kochać samych siebie. Rozumie tata, co mówię? Ktoś, kto nikogo nie kocha nie potrafi jak należy pokochać siebie.',
		author: 'Haruki Murakami',
		path: 'cytat-o-milosci-do-siebie'
	},
	{
		quote: 'Nie cel jest najważniejszy, lecz podróż.',
		author: 'Ralph Waldo Emerson',
		path: 'podroz_nie_cel'
	},
	{
		quote: 'Świat wokół ciebie jest piękny, gdy świat w tobie jest spokojny. ',
		author: 'DramatizeMe',
		path: 'swiat'
	},
	{
		quote: 'Każdego ranka, zanim o cokolwiek poprosisz Boga, podziękuj MU za wszystko.',
		author: 'DramatizeMe',
		path: 'bog'
	},
	{
		quote: 'Lepiej mieć makowca w garści niż kolege na wolności',
		author: 'Fredi Kamionka',
		path: 'makowiec'
	}
];

const music_phrases: Record<string, string> = {
	// music id : phrase,
	'2ZbSIu4PbLIcyGE4LwSGfB': '"Skąd tam jest tyle emocji?"',
	'42l1cUco5Rbju3D7JO0Ox7': '"Moje oczy widzą gwiazdy."',
	'4pAQRhlhhtDKljnYrr2qUu': '"Tango Argentino, z moją dziewczyną pod ręke."',
	'6nTUXuoxJSLD5rTr1qZ5Ee': '"Czy naprawdę tak dużo kosztuje szczęście."',
	'0grScFe336ZoitXuh1VpUJ': '"I znów będzie zabawnie, jeśli tylko mi wybaczysz."',
	'1S0kagOS5P8MQU6SS8pSlE': '"Za oknem deszcz, a ja w domu słucham techno."',
	'7uu6bChltOWw8lJLmawUy6': '"Jeżeli dobrze oceni mnie algorytm."',
	'6wKrx6Adh4vM79RdIDYAWQ': '"Jestem typem, który czuje 3 razy więcej niż ty"',
	'2rGhzYsIgignr1vwPL2RLF': '"Przełom."',
	'77vLpSAMNzeYL4EBeZxWqI': 'Znowu jadę do Ciebie sam.',
	'2v7H4q6xCk6VHnLYhD7yTk': '"Błysk"'
};

export { websiteStack, techStackItems, pageSections, projects, quotes, music_phrases };
export type { QuoteProps };
