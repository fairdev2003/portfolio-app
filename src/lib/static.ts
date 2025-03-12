type TechStackType = {
	src: string,
	stack_name: string,
	imageStyle?: string,
}

const techStackItems: TechStackType[] = [
	{ src: "Lua.svg", stack_name: "Lua" },
	{ src: "Java.svg", stack_name: "Java" },
	{ src: "Python.svg", stack_name: "Python" },
	{ src: "HTML5.svg", stack_name: "HTML5" },
	{ src: "CSS3.svg", stack_name: "CSS3" },
	{ src: "Bootstrap.svg", stack_name: "Bootstrap" },
	{ src: "JavaScript.svg", stack_name: "Javascript" },
	{ src: "TypeScript.svg", stack_name: "Typescript" },
	{ src: "React.svg", stack_name: "React" },
	{ src: "Node.js.svg", stack_name: "Node.js" },
	{ src: "MySQL.svg", stack_name: "MySQL" },
	{ src: "Express.svg", stack_name: "Express", imageStyle: "invert" },
	{ src: "Tailwind-CSS.svg", stack_name: "TailwindCSS" },
	{ src: "Next.js.svg", stack_name: "Next.js", imageStyle: "invert" },
	{ src: "Figma.svg", stack_name: "Figma" },
	{ src: "Git.svg", stack_name: "Git" },
	{ src: "Go.svg", stack_name: "Go" },
	{ src: "Redux.svg", stack_name: "Redux" },
	{ src: "Docker.svg", stack_name: "Docker" },
	{ src: "Electron.svg", stack_name: "Electron" },
	{ src: "MongoDB.svg", stack_name: "MongoDB" },
	{ src: "Flutter.svg", stack_name: "Flutter" },
	{ src: "Dart.svg", stack_name: "Dart" },
	{ src: "Svelte.svg", stack_name: "Svelte" }
];

const websiteStack: TechStackType[] = [
	{ src: "Svelte.svg", stack_name: "SvelteKit" },
	{ src: "HTML5.svg", stack_name: "HTML5" },
	{ src: "CSS3.svg", stack_name: "CSS3" },
	{ src: "TypeScript.svg", stack_name: "Typescript" },
	{ src: "Tailwind-CSS.svg", stack_name: "TailwindCSS" }
];

const pageSections = [
	{ name: "Index", description: "", path: "/" },
	{ name: "O mnie", description: "Trochę informacji o mnie", path: "/about-me" },
	{ name: "Projekty", description: "Lista moich projektów", path: "/projects" },
	{ name: "Cytaty", description: "Moje życiowe cytaty", path: "/quotes" },
	{ name: "Contact", description: "Dostępne metody kontaktu", path: "/contact" }
];

export { websiteStack, techStackItems, pageSections };