import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
	const {
		formData,
		onChange,
		isValidEmail,
		name,
		email,
		password1,
		password2,
		resetForm,
	} = useForm({
		name: "",
		email: "",
		password1: "",
		password2: "",
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					placeholder="Name"
					type="text"
					name="name"
					value={name}
					className={`${name.trim().length <= 0 ? "has-error" : ""}`}
				/>
				{name.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				<input
					onChange={onChange}
					placeholder="Email"
					type="email"
					name="email"
					value={email}
					className={`${!isValidEmail(email) ? "has-error" : ""}`}
				/>
				{!isValidEmail(email) && <span>Email no es válido</span>}
				<input
					onChange={onChange}
					placeholder="Password"
					type="password"
					name="password1"
					value={password1}
				/>
				{password1.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>La contraseña tiene que tener 6 letras</span>
				)}
				<input
					onChange={onChange}
					placeholder="Repeat Password"
					type="password"
					name="password2"
					value={password2}
				/>
				{password2.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{password2.trim().length > 0 && password1 !== password2 && (
					<span>Las contraseñas deben ser iguales</span>
				)}
				<button type="submit">Create</button>
				<button type="button" onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	);
};
