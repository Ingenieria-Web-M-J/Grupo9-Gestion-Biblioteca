import { useFormik } from "formik";
import *  as  Yup from "yup";
import { RegisterFormValuesType } from "../../types/formsTypes";
import { RegisterStateType } from "../../pages/LoginRegisterPage";

import Loading from "../modals/Loading";
import NetworkError from "../modals/NetworkError";
import { signIn } from "next-auth/react";


type RegisterProps = {
	handleSubmit: (formValues: RegisterFormValuesType) => void,
	handleLoginClick: () => void,
	registerState: RegisterStateType,
	closeErrorMessages: () => void
}

export default function Register({ handleSubmit, handleLoginClick, registerState, closeErrorMessages }: RegisterProps) {
	// Expresiones regulares para las validaciones
	const lowerCaseRegex = /[a-z]/g;
	const upperCaseRegex = /[A-Z]/g;
	const noSpaceAtStartRegex = /^\S/g;
	const noSpaceEndingRegex = /\S$/g;
	const noSpacesRegex = /^\S*$/g;
	const numberRegex = /[0-9]/g;
	const noNumberRegex = /^\D*$/g;
	const specialCharacterRegex = /[.!@#$%^&_*-]/g;
	const noSpecialCharacterRegex = /^[a-zA-ZáéíóúñÑ\s0-9]*$/g;

	
	//Inicialización de los valores del formulario
	const initialValues = {
		userName: "",
		userLastName: "",
		userEmail: "",
		userAddress: "",
		userPassword: "",
		userPasswordConfirm: ""
	};

	//Validaciones de los campos del formulario
	const validationSchema = Yup.object({
		userName: Yup.string()
			.required("Debes completar este campo")
			.max(30, "Máximo 30 caracteres")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
			.matches(noNumberRegex, "No se admiten números")
			.min(2, "Al menos 2 caracteres"),

		userLastName: Yup.string()
			.required("Debes completar este campo")
			.max(30, "Máximo 30 caracteres")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
			.matches(noNumberRegex, "No se admiten números")
			.min(2, "Al menos 2 caracteres"),

		userEmail: Yup.string()
			.required("Debes completar este campo")
			.email("El formato no coincide con un email")
			.max(30, "Máximo 30 caracteres"),

		userAddress: Yup.string()
			.required("Debes completar este campo")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
			.max(30, "Máximo 30 caracteres"),

		
		
		userPassword: Yup.string()
			.required("Debes completar este campo")
			.max(15, "Máximo 15 caracteres")
			.matches(noSpacesRegex, "No se admiten espacios")
			.matches(lowerCaseRegex, "Debe tener al menos una letra minúscula")
			.matches(upperCaseRegex, "Debe tener al menos una letra mayúscula")
			.matches(numberRegex, "Debe tener al menos un número")
			.matches(specialCharacterRegex, "Debe tener al menos una carácter especial")
			.min(8, "Al menos 8 caracteres"),

		userPasswordConfirm: Yup.string()
			.required("Debes confirmar tu contraseña")
			.oneOf([Yup.ref("userPassword")], "Las contraseñas no coinciden")
	});


	//Inicializo formulario y valido errores al enviar
	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: handleSubmit,
		validationSchema
	});



	return (
		<>
			<div className="relative w-[100vw] font-loginFont flex h-[100%] text-[#eaefd4f2] bg-[#EAE3C0]">

				<aside className="w-[35vw] h-[100vh] relative">

					<div className="bg-login w-[100%] h-[100%] bg-center bg-cover bg-no-repeat flex justify-end items-center font-sans">
						<h2 className="bg-[#EAE3C0] text-black font-semibold text-2xl p-[1rem_4rem] rounded-2xl translate-x-[14px] translate-y-[30px]">Registro</h2>
						
					</div>

				</aside>

				<div className=" max-h-[100vh] overflow-x-hidden ">
					<div className="flex flex-col justify-center items-center gap-1 rounded-2xl text-2xl text-black font-sans mt-[2rem]">
						<h1>Bienvenido a</h1>
						<button type="button" >
							<img src="images" alt="logo" className=" w-[120px] h-[150px] mb-5" />
						</button>
						<h2>Por favor, completa el formulario</h2>
					</div>

					<form name="registerForm" action="" encType="multipart/form-data" onSubmit={formik.handleSubmit}
						className="w-[65vw] max-h-[100vh] border-solid text-center justify-around items-center bg-[#EAE3C0] text-black p-[1rem_6rem_2rem] font-sans"
					>

						<div className="flex flex-col pb-2">


							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start text-base text-left font-light width-[100%]">
								<div className="relative mb-4">
									<label htmlFor="userName">
										<input type="text" id="userName" placeholder="Nombre" { ...formik.getFieldProps("userName") }
											className="bg-[#00000011] outline-none  border-b-[2px] rounded-md border-b-[#00000052] p-[8px_8px_4px] w-full placeholder-[#666]" />
									</label>

									{
										formik.touched.userName && formik.errors.userName
											? <p className="absolute text-xs text-red-600 ml-4">{formik.errors.userName}</p>
											: null
									}
								</div>




								<div className="relative mb-4">
									<label htmlFor="userLastName">
										<input type="text" id="userLastName" placeholder="Apellidos" { ...formik.getFieldProps("userLastName") }
											className="bg-[#00000011] outline-none  border-b-[2px] rounded-md border-b-[#00000052] w-full placeholder-[#666] p-[8px_8px_4px]" />
									</label>
									
									{
										formik.touched.userLastName && formik.errors.userLastName
											? <p className="absolute text-xs text-red-600 ml-4">{formik.errors.userLastName}</p>
											: null
									}
								</div>



								<div className="relative mb-4 md:col-span-2">
									<label htmlFor="userEmail">
										<input type="email" id="userEmail" placeholder="Correo Electrónico" { ...formik.getFieldProps("userEmail") }
											className="bg-[#00000011] outline-none  border-b-[2px] rounded-md border-b-[#00000052] p-[8px_8px_4px] w-full placeholder-[#666]" />
									</label>

									{
										formik.touched.userEmail && formik.errors.userEmail
											? <p className="absolute text-xs text-red-600 ml-4">{formik.errors.userEmail}</p>
											: null
									}
								</div>


								<div className="relative mb-4 md:col-span-2">
									<label htmlFor="userAddress">
										<input type="text" id="userAddress" placeholder="Dirección" { ...formik.getFieldProps("userAddress") }
											className="bg-[#00000011] outline-none  border-b-[2px] rounded-md border-b-[#00000052] p-[8px_8px_4px] w-full placeholder-[#666]" />
									</label>

									
								</div>


								<div className="relative mb-4">
									<label htmlFor="userPassword">
										<input type="password" id="userPassword" placeholder="Contraseña" { ...formik.getFieldProps("userPassword") }
											className="bg-[#00000011] outline-none  border-b-[2px] rounded-md border-b-[#00000052] p-[8px_8px_4px] w-full placeholder-[#666]" />
									</label>

									{
										formik.touched.userPassword && formik.errors.userPassword
											? <p className="absolute text-xs text-red-600 ml-4">{formik.errors.userPassword}</p>
											: null
									}
								</div>



								<div className="relative mb-4">
									<label htmlFor="userPasswordConfirm">
										<input type="password" id="userPasswordConfirm" placeholder="Confirmar contraseña" { ...formik.getFieldProps("userPasswordConfirm") }
											className="bg-[#00000011] outline-none  border-b-[2px] rounded-md border-b-[#00000052] p-[8px_8px_4px] w-full placeholder-[#666]" />
									</label>

									{
										formik.touched.userPasswordConfirm && formik.errors.userPasswordConfirm
											? <p className="absolute text-xs text-red-600 ml-4">{formik.errors.userPasswordConfirm}</p>
											: null
									}
								</div>
							</div>
								
							{
								formik.isValid && formik.dirty
									?	(
										<button type="submit" 
											className="w-[94%] text-base py-2.5 m-[3rem_auto] shadow-md rounded-lg font-sans text-brandingYellow cursor-pointer font-bold bg-brandingDarkGreen hover:bg-opacity-80 transition-all"
											onClick={() => signIn('auth0')}
										>
												Regístrate
										</button>
									)
									: (
										<button type="submit" disabled
											className="w-[94%] text-base py-2.5 m-[3rem_auto] shadow-md rounded-lg font-sans text-black cursor-pointer font-bold bg-brandingYellow hover:bg-opacity-80 transition-all"
										>
												Regístrate
										</button>
									)
							}

							<p>Si ya estás registrado, por favor <span onClick={handleLoginClick} className="text-brandingLightGreen mt-2" role="button" >INICIA SESIÓN</span></p>

						</div>
					</form>

				</div>
				
				{registerState === "loading" && <Loading />}
				{registerState === "logged" }
				{registerState === "registerErrorEmailExists" }
				{registerState === "registerErrorServerError" }

			</div>
		</>
	);
}