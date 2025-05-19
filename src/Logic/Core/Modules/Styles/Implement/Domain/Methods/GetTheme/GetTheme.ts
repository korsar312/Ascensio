import { StylesInterface } from "../../../../Styles.interface";

export class GetTheme {
	static execute() {
		return function (store: StylesInterface.TStore): StylesInterface.ETheme {
			return store.theme;
		};
	}
}
