import { LanguageUseCase } from "./Language/UseCase/Language.useCase";
import { StylesUseCase } from "./Styles/UseCase/Styles.useCase";

export class Modules {
	style: StylesUseCase;
	language: LanguageUseCase;

	constructor() {
		this.style = new StylesUseCase();
		this.language = new LanguageUseCase();
	}
}
