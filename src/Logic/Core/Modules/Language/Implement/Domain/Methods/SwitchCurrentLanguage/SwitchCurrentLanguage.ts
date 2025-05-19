import { LanguageInterface } from "../../../../Language.interface";

const { RU } = LanguageInterface.ELanguageType;

export class SwitchCurrentLanguage {
	static execute() {
		return function (store: LanguageInterface.TStore, currentLang: LanguageInterface.ELanguageType): LanguageInterface.TStore {
			const lang = currentLang === RU ? RU : RU;

			return { ...store, model: lang };
		};
	}
}
