import FormModel from "../Form.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import styles from "./Form_Public.styles";

const Form_Public: NFC<typeof FormModel> = (props) => {
	const { handleChange, handleSubmit, children } = props;

	return (
		<form css={styles.wrapper} onChange={handleChange} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default Form_Public;
