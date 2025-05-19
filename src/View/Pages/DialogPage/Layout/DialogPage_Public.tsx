import { NFC } from "Logic/Libs/Util/TypesUtils";
import HomePageModel from "../DialogPage.model";
import styles from "./DialogPage_Public.styles";

const DialogPage_Public: NFC<typeof HomePageModel> = (props) => {
	const {} = props;

	return <div css={styles.wrapper}></div>;
};

export default DialogPage_Public;
