import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from "react-router-dom";
<<<<<<< HEAD
import {
	FormikAbstractation,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
} from "../03-forms/pages";
import { DynamicForm } from "../03-forms/pages/DynamicForm";
import { RegisterFormikPage } from "../03-forms/pages/RegisterFormikPage";
=======
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";
>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
<<<<<<< HEAD
								Register Page
=======
								Shopping
>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
							</NavLink>
						</li>
						<li>
							<NavLink
<<<<<<< HEAD
								to="/formik-basic"
=======
								to="/about"
>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
<<<<<<< HEAD
								Formik Basic
=======
								About
>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
							</NavLink>
						</li>
						<li>
							<NavLink
<<<<<<< HEAD
								to="/formik-yup"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-components"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-abstractation"
=======
								to="/users"
>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
<<<<<<< HEAD
								Formik Abstractation
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-register"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								Register Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dynamic-form"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								Dynamic Form
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								About
=======
								Users
>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
<<<<<<< HEAD
					<Route path="register" element={<RegisterPage />} />
					<Route path="formik-basic" element={<FormikBasicPage />} />
					<Route path="formik-yup" element={<FormikYupPage />} />
					<Route
						path="formik-components"
						element={<FormikComponents />}
					/>
=======
					<Route path="about" element={<h1>About Page</h1>} />
					<Route path="users" element={<h1>Users Page</h1>} />
					<Route path="/" element={<ShoppingPage />}></Route>

>>>>>>> bd84c23ae6b546efe1cbe732a18d46a050667544
					<Route
						path="formik-abstractation"
						element={<FormikAbstractation />}
					/>
					<Route
						path="formik-register"
						element={<RegisterFormikPage />}
					/>
					<Route path="dynamic-form" element={<DynamicForm />} />
					<Route path="about" element={<h1>About</h1>} />
					<Route path="/" element={<h1>Home</h1>} />

					<Route path="/*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
