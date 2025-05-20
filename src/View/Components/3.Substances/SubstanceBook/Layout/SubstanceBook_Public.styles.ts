import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class SubstanceBook_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexGorCenter,
		alignItems: "flex-start",
		width: "100%",
		height: "100%",
		backgroundColor: "#fff",
		position: "relative",
	};

	public book: CSSObject = {
		...this.mixins.absolute,
		top: "50%",
		left: "50%",
		width: "calc(100% + 0%)",
		height: "calc(100% + 0%)",
		transform: "translate(-50%, calc(-50% + 0%))",
	};
}

export default new SubstanceBook_PublicStyles();
