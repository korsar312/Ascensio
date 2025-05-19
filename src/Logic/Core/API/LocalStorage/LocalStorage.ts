import { LocalStorageInterface } from "./LocalStorage.interface";
import { LocalStorageCore } from "./LocalStorage.core";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

const link = LocalStorageInterface.Name;
const { SET, GET } = LocalStorageInterface.ERequestMethod;

export class LocalStorage extends LocalStorageCore implements LocalStorageInterface.TWSRequest {
	public EXAMPLE() {
		return this.request<LanguageInterface.TStore>(link.EXAMPLE, GET);
	}
}
