export namespace LocalStorageInterface {
	export interface ICoreInit {
		store: Storage;
	}

	export enum ERequestMethod {
		GET = "GET",
		SET = "SET",
	}

	export type EName = typeof Name;

	const NameWs = {
		EXAMPLE: "example",
	};

	export const Name = { ...NameWs };

	export type TWSRequest = {
		[key in keyof EName]: (...args: any[]) => Promise<any>;
	};
}
