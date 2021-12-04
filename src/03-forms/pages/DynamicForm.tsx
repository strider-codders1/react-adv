import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

	let schema = Yup.string();

	if (!input.validations) continue;
	for (const rule of input.validations) {
		if (rule.type === "required") {
			schema = schema.required("Este campo es requerido");
		}

		if (rule.type === "minLenght") {
			schema = schema.min(
				(rule as any).value || 2,
				`Mínimo de ${(rule as any).value || 2} caracteres`
			);
		}

		if (rule.type === "email") {
			schema = schema.email("Ingrese un email válido");
		}
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{(formik) => (
					<Form noValidate>
						{formJson.map(
							({ type, name, placeholder, label, options }) => {
								if (
									type === "input" ||
									type === "password" ||
									type === "email"
								) {
									return (
										<MyTextInput
											key={name}
											type={type as any}
											name={name}
											label={label}
											placeholder={placeholder}
										/>
									);
								} else if (type === "select") {
									return (
										<MySelect
											key={name}
											name={name}
											label={label}
										>
											<option value="">
												Select an option
											</option>
											{options?.map(({ id, label }) => (
												<option key={id} value={id}>
													{label}
												</option>
											))}
										</MySelect>
									);
								}
							}
						)}
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
