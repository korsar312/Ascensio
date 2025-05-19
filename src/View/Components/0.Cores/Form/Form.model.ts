import { IComponent } from "./index";
import { FormEvent } from "react";

function FormModel(props: IComponent) {
	const { onChange, onSubmit, children } = props;

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!onSubmit) return;
		onSubmit(getValue(event));
	}

	function handleChange(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!onChange) return;
		onChange(getValue(event));
	}

	function getValue(event: FormEvent<HTMLFormElement>): Record<string, unknown> {
		const formData = new FormData(event.currentTarget);
		const data: Record<string, unknown> = {};

		formData.forEach((value, key) => (data[key] = value));

		return data;
	}

	return { handleChange, handleSubmit, children };
}

export default FormModel;
