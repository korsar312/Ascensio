import { NFC } from "Logic/Libs/Util/TypesUtils";
import AtomQRModel from "../AtomQR.model";
import styles from "./AtomQR_Public.styles";

const AtomQR_Public: NFC<typeof AtomQRModel> = (props) => {
	const { qrRef } = props;

	return <div css={styles.content} ref={qrRef}></div>;
};

export default AtomQR_Public;
