import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class DialogPage_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		justifyContent: "center",
	};

	public form: CSSObject = {
		width: 320,
	};
}

export default new DialogPage_PublicStyles();
