import { LocalStorageInterface } from "Logic/Core/API/LocalStorage/LocalStorage.interface";

export class LocalStorageCore {
	private readonly storage: Storage;

	constructor(init: LocalStorageInterface.ICoreInit) {
		this.storage = init.store;
	}

	protected request<RES>(address: string, method: LocalStorageInterface.ERequestMethod): Promise<RES> {
		return new Promise((resolve, reject) => {
			try {
				const res = this.requestMethod<RES>(method, address, method);
				resolve(this.formatter(res, true));
			} catch (e) {
				reject(e);
			}
		});
	}

	private formatter<RES>(obj: any, isParse?: true): RES;
	private formatter<RES>(obj: any, isParse?: boolean): string | RES {
		return isParse ? JSON.parse(obj) : JSON.stringify(obj);
	}

	private requestMethod<RES>(method: LocalStorageInterface.ERequestMethod, address: string, data?: string): RES {
		let res = null;
		switch (method) {
			case LocalStorageInterface.ERequestMethod.GET:
				res = this.getStore(address);
				break;
			case LocalStorageInterface.ERequestMethod.SET:
				(res = this.setStore(address, this.formatter(data || ""))), null;
				break;
		}

		return res as RES;
	}

	private setStore(address: string, data: string) {
		this.storage.setItem(address, data);
	}

	private getStore(address: string) {
		return this.storage.getItem(address);
	}
}
