import { StylesInterface } from "../../../../Styles.interface";
import { CSSObject } from "@emotion/react";

export class GetFont {
	static execute() {
		return function (store: StylesInterface.TStore, font: StylesInterface.EFont): CSSObject {
			return store.font[font];
		};
	}
}
