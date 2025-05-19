import { TFactoryCreators } from "./Factory.enam";

type TFac = TFactoryCreators;
type KTFac = keyof TFac;

export interface ICreator<CLASS, PROPS> {
	factoryMethod(props?: PROPS): CLASS;
}

class Factory {
	private creators: Map<KTFac, TFac[KTFac]> = new Map();

	public register<T extends KTFac>(key: T, creator: TFac[T]): void {
		this.creators.set(key, creator);
	}

	public create<T extends KTFac>(key: T): TFac[T] {
		const creator = this.creators.get(key);
		if (!creator) throw new Error(`${key} не зарегестрирован.`);

		return creator as TFac[T];
	}
}

export default new Factory();
