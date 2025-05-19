import { LocalStorageInterface } from "./LocalStorage/LocalStorage.interface";

export namespace APIInterface {
	export type TLogParam = {
		action?: ELogEvent;
		element?: string;
		data?: string;
		comment?: string;
	};

	export enum ELogEvent {
		error = "error",
		click = "click",
	}

	export type TAllRequest = keyof LocalStorageInterface.TWSRequest;
}
