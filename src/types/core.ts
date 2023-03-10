export enum ComponentTypes {
	TITLE = "Title",
	DESCRIPTION = "Description",
	NEXT_BUTTON = "NextButton",
	BACK_BUTTON = "BackButton",
	INFO = "Info",
	TEXT_FIELD = "TextField",
	DROPDOWN = "Dropdown",
	BUTTON_GROUP = "ButtonGroup"
}

export type StylesConfig = {
	backgroundColor?: string;
	color?: string;
	fontFamily?: string;
	border?: string;
};

export type Option = { label: string; value: string };

export type Image = { src: string; description?: string; styles?: StylesConfig };

export type ComponentProps = {
	text?: string;
	name?: string;
	label?: string;
	hint?: string;
	description?: string;
	images?: Image[];
	styles?: StylesConfig;
	options?: Option[];
};

export type ComponentsConfig = {
	data: ComponentProps;
	type: ComponentTypes;
};

export type Page = ComponentsConfig[];

export type Steps = Page[];