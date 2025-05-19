import { LanguageInterface } from "../../../../Language.interface";

export class GetCurrentLanguage {
	static execute() {
		/**
		 * Возвращает текущую языковую модель
		 * @param languageObj - языковой объект
		 */
		return function (store: LanguageInterface.TStore): LanguageInterface.ELanguageType {
			return store.model;
		};
	}
}
