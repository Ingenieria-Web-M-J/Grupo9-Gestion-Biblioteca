
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { logInUser } from "../interfaces/logInUser";
import Login from "../components/forms/Login";
import { registerUser } from "../interfaces/registerUser";
import Register from "../components/forms/Register";
import { LoginFormValuesType, RegiserFormFieldsToSendType as RegisterFormFieldsToSendType, RegisterFormValuesType } from "../types/formsTypes";
import { PrismaClient } from "@prisma/client";
import { UserDataType } from "./commonTypes";
import { useUserRoleContext } from "../context/UserRoleContext";
import { updateUserData } from "../utils/updateUserData";
import { resetUserData } from "../utils/resetUserData";


export type LoginStateType = "init" | "loading" | "loginError" | "networkError" | "logged";
export type RegisterStateType = "init" | "loading" | "registerErrorEmailExists" | "registerErrorServerError" | "networkError" | "logged";

type LoginRegisterPageProps = {
	focus: "login" | "register"
}

function LoginRegisterPage({ focus }: LoginRegisterPageProps) {
	const { userRole, setUserRole } = useUserRoleContext();
	const [loginState, setLoginState] = useState<LoginStateType>("init");
	const [registerState, setRegisterState] = useState<RegisterStateType>("init");
	const prisma = new PrismaClient();



	function closeErrorMessage() {
		setRegisterState("init");
		setLoginState("init");
	}

	function submitLoginForm(formValues: LoginFormValuesType) {
		setLoginState("loading");

		const loginData: LoginFormValuesType = {
			email: formValues.email,
			password: formValues.password
		};

		const loginDataJson = JSON.stringify(loginData);

		/*
		logInUser(loginDataJson, axiosController.current!)
			.then((UserDataResponse: UserDataType) => {
				updateUserData(UserDataResponse, setUserRole);
				
				loggedTimeout = window.setTimeout( () => {
					setLoginState("logged");
				}, 800);
			})
			.catch((error: Error) => {
				resetUserData(setUserRole);
				if (error.message === "401"){
					setLoginState("loginError");
				} else {
					setLoginState("networkError");
				}
			});
			*/
	}

	//Guardado de información en Supabase
	const submitRegisterForm = async (formValues: RegisterFormValuesType) => {
		try {
			setRegisterState("loading");

			const newUser = await prisma.user.create({
				data: {
					email: formValues.userEmail,
					name: formValues.userName,
					lastname: formValues.userLastName,
					address: formValues.userAddress
				}
			});
			
			setRegisterState("logged");
		} catch (error) {
			console.error("Error creating user:", error);
		}
		

		

		/*
		registerUser(resgisterDataToSendJson, axiosController.current!)
			.then(() => {
				setRegisterState("logged");
			})
			.catch((error: Error) => {
				if (error.message === "409"){
					setRegisterState("registerErrorEmailExists");
				} else if (error.message === "501") {
					setRegisterState("registerErrorServerError");
				} else {
					setRegisterState("networkError");
				}
			});
			*/
	};

	// Activa la animación de transición entre "Register" y "Login"
	function changeForm() {
		

	}

	useEffect(() => {
		let registerErrorTimeout: number;
		let registeredTimeout: number;
		let registeredTimeout2: number;

		if (registerState === "registerErrorEmailExists" || registerState === "registerErrorServerError") {
			registerErrorTimeout = window.setTimeout(() => {
				setRegisterState("init");
			}, 3500);
		}

		if (registerState === "logged") {
			registeredTimeout = window.setTimeout( () => {
				changeForm();
			}, 2500);

			registeredTimeout2 = window.setTimeout( () => {
				setRegisterState("init");
			}, 3500);
		}

		return () => {
			clearTimeout(registerErrorTimeout);
			clearTimeout(registeredTimeout);
			clearTimeout(registeredTimeout2);
		};
	}, [registerState]);


	return (
		<>
			<main  className="flex absolute transition-all left-0 duration-1000">
				{
					focus === "login"
						? (
							<>
								<div className="w-screen">
									<Login handleSubmit={submitLoginForm} handleRegisterClick={changeForm} loginState={loginState} closeErrorMessages={closeErrorMessage}/>
								</div>

								<div className="w-screen ">
									<Register handleSubmit={submitRegisterForm} handleLoginClick={changeForm} registerState={registerState} closeErrorMessages={closeErrorMessage} />
								</div>
							</>
						)
						: (
							<>
								<div className="w-screen">
									<Register handleSubmit={submitRegisterForm} handleLoginClick={changeForm} registerState={registerState} closeErrorMessages={closeErrorMessage} />
								</div>

								<div className="w-screen">
									<Login handleSubmit={submitLoginForm} handleRegisterClick={changeForm} loginState={loginState} closeErrorMessages={closeErrorMessage}/>
								</div>
							</>
						)
				}
			</main>
		</>
	);
}

export default LoginRegisterPage;
