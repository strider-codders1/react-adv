import {  Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstractation = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe de tener 15 caracteres o menos")
						.required("Requerido"),
					lastName: Yup.string()
						.max(15, "Debe de tener 15 caracteres o menos")
						.required("Requerido"),
					email: Yup.string()
						.email("Ingrese un email válido")
						.required("Requerido"),
					jobType: Yup.string()
						.required("Requirido")
						.notOneOf(["it-junior"], "Esta opción no es permitida"),
					terms: Yup.boolean().oneOf(
						[true],
						"Debe de aceptar las condiciones"
					),
				})}
			>
				{(formik) => (
					<Form noValidate onSubmit={formik.handleSubmit}>
						<MyTextInput
							label="First Name"
							name="firstName"
							placeholder="Leonardo"
						/>

						<MyTextInput
							label="Last Name"
							name="lastName"
							placeholder="Cornejo"
						/>

						<MyTextInput
							label="Email Address"
							name="email"
							placeholder="leonardo@gmail.com"
							type="email"
						/>
						<MySelect name="jobType" label="Job Type">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">It Senior</option>
							<option value="it-junior">It Junior</option>
						</MySelect>

						<MyCheckbox name="terms" label="Terms and conditions" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
