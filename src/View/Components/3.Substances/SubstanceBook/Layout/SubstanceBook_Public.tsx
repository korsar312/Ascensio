import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceBookModel from "View/Components/3.Substances/SubstanceBook/SubstanceBook.model";
import styles from "./SubstanceBook_Public.styles";

const SubstanceBook_Public: NFC<typeof SubstanceBookModel> = (props) => {
	const { bookRef } = props;

	return <canvas ref={bookRef} css={styles.wrapper}></canvas>;
};

export default SubstanceBook_Public;
