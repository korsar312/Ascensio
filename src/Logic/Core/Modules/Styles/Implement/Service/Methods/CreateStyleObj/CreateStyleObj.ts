import { StylesInterface } from "../../../../Styles.interface";

export class CreateStyleObj {
	static execute() {
		return function (
			color: StylesInterface.TColor,
			font: StylesInterface.TFont,
			theme: StylesInterface.ETheme,
		): StylesInterface.TStore {
			return { color, font, theme };
		};
	}
}
