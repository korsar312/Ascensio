import Util from "../../Libs/Util";
import { LocalStorage } from "./LocalStorage/LocalStorage";

function createRequest<MODULE>(module: MODULE) {
	return function <METHOD extends keyof MODULE, ARGS extends MODULE[METHOD]>(
		method: METHOD,
		...args: ARGS extends (...args: infer P) => unknown ? Parameters<ARGS> : unknown[]
	): ARGS extends (...args: infer P) => any ? ReturnType<ARGS> : unknown {
		const chosenMethod = module[method];

		return Util.polymorph(chosenMethod, module, ...args);
	};
}

class API {
	private modules = {
		ws: new LocalStorage({ store: window.localStorage }),
	};

	public createRequestWs = createRequest(this.modules.ws);
}

const newApi = new API();

const APIRequest = {
	ws: newApi.createRequestWs,
};

export default APIRequest;
