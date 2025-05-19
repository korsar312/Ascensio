import { StylesInterface } from "../../../../Styles.interface";

export class GetColor {
	static execute() {
		return function (
			store: StylesInterface.TStore,
			theme: StylesInterface.ETheme,
			color: StylesInterface.EColor,
		): StylesInterface.TColorHEXFormat {
			return store.color[color][theme];
		};
	}
}
