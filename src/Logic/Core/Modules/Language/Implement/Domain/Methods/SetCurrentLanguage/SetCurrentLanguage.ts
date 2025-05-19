import { LanguageInterface } from "../../../../Language.interface";

export class SetCurrentLanguage {
	static execute() {
		/**
		 * Устанавливает языковую модель
		 * @param languageObj - языковой объект
		 * @param languageType - устанавливаемый язык
		 */
		return function (store: LanguageInterface.TStore, languageType: LanguageInterface.ELanguageType): LanguageInterface.TStore {
			return { ...store, model: languageType };
		};
	}
}
