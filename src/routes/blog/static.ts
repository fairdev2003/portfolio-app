type BlogRoute = {
	name: string;
	path: string;
};

export const sfmBlogRoutes: BlogRoute[] = [
	{ name: 'Wprowadzenie do SFM', path: '/blog/sfm' },
	{ name: 'Słowo kluczowe - NAME', path: '/blog/sfm/name-keyword' },
	{ name: 'Przykłady programów', path: '/blog/sfm/examples' }
];
