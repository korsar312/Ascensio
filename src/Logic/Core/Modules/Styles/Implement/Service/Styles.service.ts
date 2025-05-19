import { CreateStyleObj } from "./Methods/CreateStyleObj/CreateStyleObj";
import { GetColorList } from "./Methods/GetColorList/GetColorList";
import { GetFontList } from "./Methods/GetFontList/GetFontList";
import { ServiceBase } from "Logic/Core/Helpers/Creators/Factory/Variables/Modules/Service";
import APIRequest from "../../../../API/API";

const typeService = "StyleStore";

export default class extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}

	public getColorList = GetColorList.execute();
	public getFontList = GetFontList.execute();
	public createStyleObj = CreateStyleObj.execute();
}
