import { FunctionComponent, SVGProps } from "react";

import IconError from "Assets/Icons/icon-error.svg?react";
import IconKey from "@material-icons/svg/svg/key/outline.svg?react";
import IconHistory from "@material-icons/svg/svg/schedule/outline.svg?react";
import IconArrowRight from "@material-icons/svg/svg/east/outline.svg?react";

type TIcons = Record<string, FunctionComponent<SVGProps<SVGSVGElement>>>;

const icons = {
	IconError,
	IconKey,
	IconArrowRight,
	IconHistory,
} satisfies TIcons;

const Images = {
	...icons,
};

export type EImages = keyof typeof Images;

function getImage(image: EImages | string) {
	return (icons as any)[image] || undefined;
}

export default getImage;
