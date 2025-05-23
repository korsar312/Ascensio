import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class SubstanceFormSchema_PublicStyles extends Styles {
	private pad = 8;

	public form: CSSObject = {
		position: "relative",
		padding: this.variables.radiusStandard,
	};

	public bottom: CSSObject = {
		marginTop: -this.variables.radiusStandard * 2,
		padding: `${this.variables.radiusStandard * 2 + this.pad}px ${this.pad}px ${this.pad}px ${this.pad}px`,
	};
}

export default new SubstanceFormSchema_PublicStyles();
