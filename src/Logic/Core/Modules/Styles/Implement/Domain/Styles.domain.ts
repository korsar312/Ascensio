import { DomainBase } from "Logic/Core/Helpers/Creators/Factory/Variables/Modules/Domain";
import { GetColor } from "./Methods/GetColor/GetColor";
import { Hex2rgba } from "./Methods/Hex2rgba/Hex2rgba";
import { GetFont } from "./Methods/GetFont/GetFont";
import { GetFontData } from "./Methods/GetFontData/GetFontData";
import { GetTheme } from "Logic/Core/Modules/Styles/Implement/Domain/Methods/GetTheme/GetTheme";

export default class extends DomainBase {
	public getFont = GetFont.execute();
	public hex2rgba = Hex2rgba.execute();
	public getColor = GetColor.execute();
	public getTheme = GetTheme.execute();
	public getFontData = GetFontData.execute();
}
