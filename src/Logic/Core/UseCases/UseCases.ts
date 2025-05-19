import { Modules } from "../Modules/Modules";
import { PublicCase } from "./PublicCase/PublicCase";

type TDeepProxy<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : T[K] extends object ? TDeepProxy<T[K]> : T[K] };

function interact<MODULE>(module: MODULE): TDeepProxy<MODULE> {
	return new Proxy({} as TDeepProxy<MODULE>, {
		get(_, t) {
			// @ts-ignore
			return module[t];
		},
	});
}

const modules = new Modules();

export class Facade {
	public system =interact(modules);
	public public = new PublicCase(this);
}

const UseCases = new Facade();
export default UseCases;
