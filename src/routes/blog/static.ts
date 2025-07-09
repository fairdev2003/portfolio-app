type BlogRoute = {
	name: string;
	path: string;
};

export const sfmBlogRoutes: BlogRoute[] = [
	{ name: 'Wprowadzenie do SFM', path: '/blog/sfm' },
	{ name: 'Słowo kluczowe - NAME', path: '/blog/sfm/name-keyword' },
	{ name: 'Warunki logiczne', path: '/blog/sfm/conditions' },
	{ name: 'Retencja', path: '/blog/sfm/retention' },
	{ name: 'Wzorce', path: '/blog/sfm/patterns' },
	{ name: 'Przykłady programów', path: '/blog/sfm/examples' }
];
