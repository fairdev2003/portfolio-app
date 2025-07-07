export type BlogWindowProps = {
	navigation?: Partial<BlogNavigator>;
	references?: References[];
	routeName: string;
	route: string;
};

export type BlogNavigator = {
	left?: NavigatorButtonProps;
	right?: NavigatorButtonProps;
};

export type NavigatorButtonProps = {
	value: string;
	desc?: string;
	className?: string;
	href: string;
};

export type References = {
	name: string;
	href: string;
};
