import { TransformLangToArr } from "./Methods/TransformLangToArr/TransformLangToArr";
import { GetUserLanguage } from "./Methods/GetUserLanguage/GetUserLanguage";
import { CreateLanguageObj } from "./Methods/CreateLanguageObj/CreateLanguageObj";
import { GetDictionary } from "./Methods/GetDictionary/GetDictionary";
import { GetTransfer } from "./Methods/GetTransfer/GetTransfer";
import { GetModify } from "Logic/Core/Modules/Language/Implement/Service/Methods/GetModify/GetModify";
import { ServiceBase } from "Logic/Core/Helpers/Creators/Factory/Variables/Modules/Service";
import APIRequest from "../../../../API/API";

const typeService = "LanguageStore";

export default class extends ServiceBase<typeof typeService> {
	constructor(Api: typeof APIRequest) {
		super({ Api, Type: typeService });
	}

	public getDictionary = GetDictionary.execute();
	public getTransfer = GetTransfer.execute();
	public getModify = GetModify.execute();
	public createLanguageObj = CreateLanguageObj.execute();
	public getUserLanguage = GetUserLanguage.execute();
	public transformLangToArr = TransformLangToArr.execute();
}
