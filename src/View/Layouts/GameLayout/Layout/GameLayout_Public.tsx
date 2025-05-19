import { NFC } from "Logic/Libs/Util/TypesUtils";
import GameLayoutModel from "View/Layouts/GameLayout/GameLayout.model";
import styles from "View/Layouts/GameLayout/Layout/GameLayout_Public.styles";
import SubstanceBook from "View/Components/3.Substances/SubstanceBook";

const GameLayout_Public: NFC<typeof GameLayoutModel> = (props) => {
	const {} = props;

	return (
		<div css={styles.wrapper}>
			<SubstanceBook />
		</div>
	);
};

export default GameLayout_Public;
