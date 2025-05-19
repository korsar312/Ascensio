import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";

class PagesLayout_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		overflow: "hidden",
		position: "relative",
		display: "flex",
		height: "100vh",
	};
}

export default new PagesLayout_PublicStyles();
