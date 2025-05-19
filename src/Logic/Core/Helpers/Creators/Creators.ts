import {
	ModuleFactory,
	register,
	StoreFactory,
	TFactoryCreators,
	TModuleFactory,
	TStoreFactory,
	TTypeModule,
} from "Logic/Core/Helpers/Creators/Factory/Factory.enam";
import factory from "Logic/Core/Helpers/Creators/Factory/Factory";

type TModule<T> = { [key in keyof T]: T[key] };

type TStores = TModule<TStoreFactory>;
type TModules = TModule<TModuleFactory>;

register();

class Creators {
	private stores: TStores;
	private modules: TModules;

	private init(factoryMap: any) {
		const initValue = {} as Record<keyof TFactoryCreators, any>;

		return Object.keys(factoryMap).reduce((prev, cur) => {
			const value = cur as keyof TFactoryCreators;
			prev[value] = factory.create(value);

			return prev;
		}, initValue);
	}

	constructor() {
		this.stores = this.init(StoreFactory);
		this.modules = this.init(ModuleFactory);
	}

	public createStore<T extends keyof TStoreFactory>(store: T): ReturnType<TStoreFactory[T]["factoryMethod"]> {
		return this.stores[store].factoryMethod() as ReturnType<TStoreFactory[T]["factoryMethod"]>;
	}

	public createModule<T extends keyof TModuleFactory, K>(module: T, imp: TTypeModule[T]): ReturnType<TModuleFactory[T]["factoryMethod"]> {
		return this.modules[module].factoryMethod(imp) as ReturnType<TModuleFactory[T]["factoryMethod"]>;
	}
}

export default new Creators();
