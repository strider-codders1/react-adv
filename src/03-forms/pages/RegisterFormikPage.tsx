import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.required("Requerido")
						.min(2, "Mínimo 2 letras")
						.max(15, "Máximo 15 caracteres"),
					email: Yup.string()
						.required("Requerido")
						.email("Ingrese un email válido"),
					password1: Yup.string()
						.required("Requerido")
						.min(6, "Mínimo 6 caracteres"),
					password2: Yup.string()
						.oneOf(
							[Yup.ref("password1"), null],
							"Las contraseñas no son iguales"
						)
						.required("Requerido"),
				})}
			>
				{(formik) => (
					<Form onSubmit={formik.handleSubmit}>
						<MyTextInput
							label="Name"
							type="text"
							name="name"
							placeholder="Leonardo"
						/>

						<MyTextInput
							label="Email"
							type="email"
							name="email"
							placeholder="leonardo@gmail.com"
						/>

						<MyTextInput
							label="Password"
							type="password"
							name="password1"
							placeholder="Password"
						/>

						<MyTextInput
							label="Confirm Password"
							type="password"
							name="password2"
							placeholder="Confirm Password"
						/>

						<button type="submit">Submit</button>
						<button type="button" onClick={formik.handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
