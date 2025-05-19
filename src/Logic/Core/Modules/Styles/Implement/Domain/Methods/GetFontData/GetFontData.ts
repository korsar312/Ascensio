import { StylesInterface } from "../../../../Styles.interface";

type TProperty = "size";

export class GetFontData {
	static execute() {
		return function (store: StylesInterface.TStore, font: StylesInterface.EFont, type: TProperty) {
			function fontData(type: "size"): number;
			function fontData(type: TProperty): number {
				switch (type) {
					case "size":
						return parseInt(store.font[font].fontSize as string);
				}
			}

			return fontData(type);
		};
	}
}
