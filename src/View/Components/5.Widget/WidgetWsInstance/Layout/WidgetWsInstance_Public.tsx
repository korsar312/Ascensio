import { NFC } from "Logic/Libs/Util/TypesUtils";
import ChatPageModel from "../WidgetWsInstance.model";
import styles from "./WidgetWsInstance_Public.styles";

const WidgetWsInstance_Public: NFC<typeof ChatPageModel> = (props) => {
	const {} = props;

	return <div css={styles.chat}></div>;
};

export default WidgetWsInstance_Public;
