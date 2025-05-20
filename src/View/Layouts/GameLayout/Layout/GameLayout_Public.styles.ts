import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";

class GameLayout_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		overflow: "hidden",
		position: "relative",
		display: "flex",
		height: "100vh",
	};

	public book: CSSObject = {
		width: 800,
		height: 400,
	};
}

export default new GameLayout_PublicStyles();
