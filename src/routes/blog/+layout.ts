const routeData: Record<string, string> = {
	'/blog/sfm': 'Super Factory Manager',
	'/blog': 'Sekcja Blogowa'
};

export async function load({ url }) {
	return {
		currentPath: url.pathname,
		routeName: routeData[url.pathname]
	};
}
