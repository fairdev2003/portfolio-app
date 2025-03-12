type TechStackType = {
	src: string,
	stack_name: string,
	href: string,
	imageStyle?: string,
}

const techStackItems: TechStackType[] = [
	{ src: "Lua.svg", stack_name: "Lua", href: "https://www.lua.org/" },
	{ src: "Java.svg", stack_name: "Java", href: "https://www.java.com/" },
	{ src: "Python.svg", stack_name: "Python", href: "https://www.python.org/" },
	{ src: "HTML5.svg", stack_name: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
	{ src: "CSS3.svg", stack_name: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ src: "Bootstrap.svg", stack_name: "Bootstrap", href: "https://getbootstrap.com/" },
	{ src: "JavaScript.svg", stack_name: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ src: "TypeScript.svg", stack_name: "Typescript", href: "https://www.typescriptlang.org/" },
	{ src: "React.svg", stack_name: "React", href: "https://react.dev/" },
	{ src: "Node.js.svg", stack_name: "Node.js", href: "https://nodejs.org/" },
	{ src: "MySQL.svg", stack_name: "MySQL", href: "https://www.mysql.com/" },
	{ src: "Express.svg", stack_name: "Express", imageStyle: "invert", href: "https://expressjs.com/" },
	{ src: "Tailwind-CSS.svg", stack_name: "TailwindCSS", href: "https://tailwindcss.com/" },
	{ src: "Next.js.svg", stack_name: "Next.js", imageStyle: "invert", href: "https://nextjs.org/" },
	{ src: "Figma.svg", stack_name: "Figma", href: "https://www.figma.com/" },
	{ src: "Git.svg", stack_name: "Git", href: "https://git-scm.com/" },
	{ src: "Go.svg", stack_name: "Go", href: "https://go.dev/" },
	{ src: "Redux.svg", stack_name: "Redux", href: "https://redux.js.org/" },
	{ src: "Docker.svg", stack_name: "Docker", href: "https://www.docker.com/" },
	{ src: "Electron.svg", stack_name: "Electron", href: "https://www.electronjs.org/" },
	{ src: "MongoDB.svg", stack_name: "MongoDB", href: "https://www.mongodb.com/" },
	{ src: "Flutter.svg", stack_name: "Flutter", href: "https://flutter.dev/" },
	{ src: "Dart.svg", stack_name: "Dart", href: "https://dart.dev/" },
	{ src: "Svelte.svg", stack_name: "Svelte", href: "https://svelte.dev/" }
];

const websiteStack: TechStackType[] = [
	{ src: "Svelte.svg", stack_name: "SvelteKit", href: "https://kit.svelte.dev/" },
	{ src: "HTML5.svg", stack_name: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
	{ src: "CSS3.svg", stack_name: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ src: "TypeScript.svg", stack_name: "Typescript", href: "https://www.typescriptlang.org/" },
	{ src: "Tailwind-CSS.svg", stack_name: "TailwindCSS", href: "https://tailwindcss.com/" }
];

const pageSections = [
	{ name: "Index", description: "", path: "/" },
	{ name: "O mnie", description: "Trochę informacji o mnie", path: "/about-me" },
	{ name: "Projekty", description: "Lista moich projektów", path: "/projects" },
	{ name: "Cytaty", description: "Moje życiowe cytaty", path: "/quotes" },
	{ name: "Kontakt", description: "Dostępne metody kontaktu", path: "/contact" },
];

export { websiteStack, techStackItems, pageSections };