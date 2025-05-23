import { makeAutoObservable } from "mobx";
import { ICreator } from "../Factory";

export interface IStore<TStore> {
	setStore(store: TStore): void;

	getStore(): TStore;
}

class StoreProduct<TStore> implements IStore<TStore> {
	private store: TStore | undefined;

	constructor(props?: TStore) {
		this.store = props;
		makeAutoObservable(this);
	}

	public setStore(store: TStore): void {
		if (JSON.stringify(this.store) !== JSON.stringify(store)) this.store = store;
	}

	public getStore(): TStore {
		if (this.store === undefined) {
			throw new Error(`${this.store} Данный стор не определен`);
		}
		return this.store;
	}
}

class StoreCreator<INIT> implements ICreator<IStore<INIT>, INIT> {
	public factoryMethod(props?: INIT): IStore<INIT> {
		return new StoreProduct(props);
	}
}

export default StoreCreator;
