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
}

export default new GameLayout_PublicStyles();
