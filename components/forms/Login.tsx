import { ErrorMessage, Field, Form, Formik } from "formik";
import *  as  Yup from "yup";
import { LoginStateType } from "../../pages/LoginRegisterPage";
import Button from "../button/Button";

import { LoginFormValuesType } from "../../types/formsTypes";
import Loading from "../modals/Loading";
import NetworkError from "../modals/NetworkError";


type LoginProps = {
	handleSubmit: (formValues: LoginFormValuesType) => void,
	handleRegisterClick: () => void,
	loginState: LoginStateType,
	closeErrorMessages: () => void
}

export default function Login({ handleSubmit, handleRegisterClick, loginState, closeErrorMessages}: LoginProps) {

	const initialValues = {
		email: "",
		password: ""
	};

	const registerSchema = Yup.object({
		email: Yup.string()
			.required("Debes completar este campo")
			.email("El formato no coincide con un email")
			.max(30, "Máximo 30 caracteres"),

		password: Yup.string()
			.required("Debes completar este campo")
	});

	return (
		<div className="w-[100%] font-sans flex h-[100vh] items-center justify-center text-[#eaefd4f2] overflow-x-hidden">
			<aside className="w-[35vw] h-[100vh] ">
				<div className="bg-login w-[100%] h-[100%] bg-center bg-cover bg-no-repeat flex justify-end items-center">
					<h1 className="bg-[#EAE3C0] text-black font-semibold text-2xl font-sans p-[1rem_5rem] rounded-2xl translate-x-[14px] translate-y-[-20px]">Ingreso</h1>
					
				</div>
			</aside>
			<div className="w-[max-content] h-[100vh] ">
				<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
					<Form
						name="loginForm"
						id="loginForm"
						encType="multipart/form-data"
						className="w-[65vw] h-[100vh] border-solid text-center flex flex-col justify-around items-center bg-[#EAE3C0] p-4 "
					>

						<div className="flex justify-center items-center gap-4 rounded-2xl text-2xl">
							<abbr title="Ir a la página principal">
								
							</abbr>
						</div>

						<div className="flex flex-col justify-center items-center p-[1rem_0]">
							<div className="relative">
								<Field 
									type="email"
									id="loginEmail"
									name="email"
									placeholder="Correo Electrónico"
									className="bg-[transparent] outline-none  border-b-[1px] border-b-[#00000038] mb-[0rem] p-[0_12px] w-[300px] text-black"
								>
								</Field>

								<ErrorMessage name="email" >
									{errorMsg => <p className="absolute text-xs text-red-700 mt-2">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="relative">
								<Field
									type="password"
									id="loginPassword"
									name="password"
									placeholder="Contraseña"
									className="bg-[transparent] outline-none  border-b-[1px] border-b-[#00000038] mt-[5rem] p-[0_12px] w-[300px] text-black"
								>
								</Field>
								
								<ErrorMessage name="password" >
									{errorMsg => <p className="absolute text-xs text-red-700 mt-2">{errorMsg}</p>}
								</ErrorMessage>
							</div>
						</div>

						{
							loginState === "loginError" && <p className=" text-red-500 p-2">Email / Clave Incorrectos</p>
						}

						{
							loginState === "networkError" && <NetworkError failedAction="realizar el login" buttonText="Volver a intentar" handleClose={closeErrorMessages} />
						}

						{
							loginState === "loading" && <Loading />
						}

						<Button
							buttonColor="green"
							buttonFontSize="text-base"
							buttonWidth="w-[300px]"
							buttonPaddingY="py-2.5"
							buttonFuncionality={{ submitText: "Iniciar Sesión" }}
						/>


						<p className="text-black font-sans">Si no tienes una cuenta, por favor <span onClick={handleRegisterClick} className="text-brandingLightGreen" role="link" >REGÍSTRATE</span></p>
					</Form>
				</Formik>
			</div>
		</div>
	);
}
