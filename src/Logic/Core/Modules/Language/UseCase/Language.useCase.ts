import Modules from "../Implement/Modules";
import { GetText } from "./Methods/GetText/GetText";
import { InitStore } from "./Methods/InitStore/InitStore";
import { SetCurrentLanguage } from "./Methods/SetCurrentLanguage/SetCurrentLanguage";
import { GetCurrentLanguage } from "./Methods/GetCurrentLanguage/GetCurrentLanguage";
import { SwitchCurrentLanguage } from "./Methods/SwitchCurrentLanguage/SwitchCurrentLanguage";
import { UseCaseBase } from "../../../Helpers/Creators/Factory/Variables/Modules/UseCase";

export class LanguageUseCase extends UseCaseBase<"LanguageModule"> {
	constructor() {
		super({ modules: Modules, initFn: InitStore });
	}

	public getText = GetText.execute(this.module);
	public setCurrentLanguage = SetCurrentLanguage.execute(this.module);
	public getCurrentLanguage = GetCurrentLanguage.execute(this.module);
	public switchCurrentLanguage = SwitchCurrentLanguage.execute(this.module);
}
