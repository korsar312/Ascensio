import { LanguageInterface } from "../../../../Language.interface";
import { WordModifyList } from "Logic/Config/ConfigLists/WordModifyList";

export class GetModify {
	static execute() {
		return function (): LanguageInterface.TWordModifyList {
			return WordModifyList;
		};
	}
}
