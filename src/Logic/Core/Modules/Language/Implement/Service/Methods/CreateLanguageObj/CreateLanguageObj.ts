import { LanguageInterface } from "../../../../Language.interface";

export class CreateLanguageObj {
	static execute() {
		/**
		 * Создает языковой объект
		 * @param languageType - языковой объект
		 */
		return function (languageType: LanguageInterface.ELanguageType): LanguageInterface.TStore {
			return { model: languageType };
		};
	}
}
