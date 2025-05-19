import UseCases from "../../../UseCases";
import API from "../../../../API/API";
import { APIInterface } from "Logic/Core/API/API.interface";

export class LogAction {
	static execute(moduleChoicer: typeof UseCases) {
		return function (data: APIInterface.TLogParam) {
			return API.ws("EXAMPLE"); //newData);
		};
	}
}
