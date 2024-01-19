import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IonIcon } from "@ionic/react";
import { person, key, mail, eye, eyeOff, calendar } from "ionicons/icons";

import Logo from "../../assets/images/logo-cropped.png";
import { DialogDescription } from "@radix-ui/react-dialog";
import OTP from "./OTP";

const LoginRegistrationModal = () => {
    const [formType, setFormType] = useState("registration"); // login|registration|otp
    const [passwordVisibility, setPasswordVisibility] = useState("off"); // on|off
    const [error, setError] = useState("");
    const [canSendOTP, setCanSendOTP] = useState(false); // true/false

    const [emailValue, setEmailValue] = useState("");
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [ageValue, setAgeValue] = useState("");

    const emailField = useRef();
    const usernameField = useRef();
    const passwordField = useRef();
    const ageField = useRef();

    const toggleFormType = (type) => {
        setFormType(type);
        setError("");
    };

    const togglePasswordVisibility = (_e) => {
        if (passwordField.current.type === "password") {
            // show the password
            passwordField.current.type = "text";
            setPasswordVisibility("on");
        } else {
            // hide the password
            passwordField.current.type = "password";
            setPasswordVisibility("off");
        }
    };

    const handleFormSubmit = (_e) => {
        let fieldValues = {
            emailField: emailField.current.value,
            passwordField: passwordField.current.value,
        };

        if (formType === "registration") {
            fieldValues = {
                ...fieldValues,
                usernameField: usernameField.current.value,
                ageField: ageField.current.value,
            };
        }

        const emailRegex = new RegExp("^\\S+@\\S+\\.\\S+$", "g");

        if (emailRegex.test(fieldValues.emailField) !== true) {
            // email is invalid
            setError("Your given email is invalid.");
        } else if (
            formType === "registration" &&
            fieldValues.usernameField.length === 0
        ) {
            // username is required
            setError("Username is required.");
        } else if (fieldValues.passwordField.length < 8) {
            // password must be atleast 8 characters long
            setError("Password must be atleast 8 characters long.");
        } else if (
            formType === "registration" &&
            fieldValues.ageField.length === 0
        ) {
            // user must be atleast 14 years old
            setError("Enter your age.");
        } else if (
            formType === "registration" &&
            parseInt(fieldValues.ageField) < 14
        ) {
            // user must be atleast 14 years old
            setError("You are underaged. You must be atleast 14 years old.");
        } else {
            setCanSendOTP(true);
            setFormType("otp");
            setError("");
        }

        console.log(fieldValues);

        if (canSendOTP === true) {
            setFormType("otp");
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="tertiary"
                        size="lg"
                        className="bg-tertiary/35 font-bold text-2xl absolute bottom-[20%] backdrop-blur-[1.5px]"
                    >
                        Get Started!
                    </Button>
                </DialogTrigger>
                <DialogContent
                    closeicon="false"
                    className="w-10/12 flex items-center justify-center flex-col bg-primary/80 text-primary-foreground backdrop-blur-[3px] border-none rounded-lg shadow-modal"
                >
                    <DialogHeader>
                        <div className="flex items-center justify-center w-full flex-col gap-2">
                            <img
                                src={Logo}
                                className="w-[60%] py-4"
                                alt="Fishh"
                            />
                            <DialogTitle>
                                {formType === "registration"
                                    ? "Create an Account!"
                                    : formType === "login"
                                    ? "Welcome Back!"
                                    : "Enter The OTP"}
                            </DialogTitle>
                            {formType === "otp" ? (
                                <DialogDescription className="text-sm font-medium text-center w-full">
                                    We've sent an OTP on your email, that starts
                                    with said***
                                </DialogDescription>
                            ) : null}
                        </div>
                    </DialogHeader>
                    <div className="w-full flex items-center justify-center flex-col gap-4">
                        {formType === "otp" ? <OTP /> : null}

                        {["registration", "login"].includes(formType) ? (
                            <div className="w-full flex items-center justify-center relative">
                                <IonIcon
                                    className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                    icon={mail}
                                />
                                <Input
                                    ref={emailField}
                                    id="emailField"
                                    type="email"
                                    value={emailValue}
                                    onChange={(e) => {
                                        setEmailValue(e.target.value);
                                    }}
                                    placeholder="your email"
                                    className="bg-primary text-primary-foreground placeholder:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground outline-none ring-[5px] ring-border py-6 pl-12 rounded-lg shadow-modal"
                                />
                            </div>
                        ) : null}

                        {formType === "registration" && (
                            <div className="w-full flex items-center justify-center relative">
                                <IonIcon
                                    className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                    icon={person}
                                />
                                <Input
                                    ref={usernameField}
                                    id="usernameField"
                                    type="name"
                                    value={usernameValue}
                                    onChange={(e) => {
                                        setUsernameValue(e.target.value);
                                    }}
                                    placeholder="username"
                                    className="bg-primary text-primary-foreground placeholder:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground outline-none ring-[5px] ring-border py-6 pl-12 rounded-lg shadow-modal"
                                />
                            </div>
                        )}

                        {["registration", "login"].includes(formType) ? (
                            <div className="w-full flex items-center justify-center relative">
                                <IonIcon
                                    className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                    icon={key}
                                />
                                <Input
                                    ref={passwordField}
                                    id="passwordField"
                                    value={passwordValue}
                                    onChange={(e) => {
                                        setPasswordValue(e.target.value);
                                    }}
                                    placeholder="password"
                                    type={
                                        passwordVisibility === "off"
                                            ? "password"
                                            : "text"
                                    }
                                    className="bg-primary text-primary-foreground placeholder:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground outline-none ring-[5px] ring-border py-6 pl-12 rounded-lg shadow-modal"
                                />
                                {passwordVisibility === "off" ? (
                                    <IonIcon
                                        onClick={togglePasswordVisibility}
                                        className="text-primary-foreground/60 text-xl absolute right-[5%] z-[2]"
                                        icon={eyeOff}
                                    />
                                ) : (
                                    <IonIcon
                                        onClick={togglePasswordVisibility}
                                        className="text-primary-foreground/60 text-xl absolute right-[5%] z-[2]"
                                        icon={eye}
                                    />
                                )}
                            </div>
                        ) : null}

                        {formType === "registration" && (
                            <div className="w-full flex items-center justify-center relative">
                                <IonIcon
                                    className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                    icon={calendar}
                                />
                                <Input
                                    ref={ageField}
                                    id="ageField"
                                    value={ageValue}
                                    onChange={(e) => {
                                        setAgeValue(e.target.value);
                                    }}
                                    type="number"
                                    min="14"
                                    placeholder="age"
                                    className="bg-primary text-primary-foreground placeholder:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground outline-none ring-[5px] ring-border py-6 pl-12 rounded-lg shadow-modal"
                                />
                            </div>
                        )}

                        {error.length > 0 ? (
                            <div className="w-full flex items-center justify-center">
                                <p className="text-sm font-semibold text-center w-full">
                                    {error}
                                </p>
                            </div>
                        ) : null}

                        {["registration", "login"].includes(formType) ? (
                            <div
                                className={[
                                    "w-full flex items-center justify-center",
                                    formType === "login" ? "pt-8" : "",
                                ].join(" ")}
                            >
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    className="text-base bg-secondary/80 text-secondary-foreground w-full py-7 px-12 rounded-xl shadow-primary-light shadow-modal backdrop-blur-[2px]"
                                    onClick={handleFormSubmit}
                                >
                                    sign in with email
                                </Button>
                            </div>
                        ) : null}
                    </div>

                    <DialogFooter className="pb-4">
                        <p className="text-sm font-medium text-center w-full">
                            {formType === "registration"
                                ? "Aready have an account? "
                                : formType === "login"
                                ? "Don't have an account yet? "
                                : "Didn't get the OTP? "}

                            {formType === "otp" ? (
                                <span className="text-secondary underline">
                                    Resend
                                </span>
                            ) : (
                                <span
                                    onClick={toggleFormType.bind(
                                        this,
                                        formType === "login"
                                            ? "registration"
                                            : "login"
                                    )}
                                    className="text-secondary underline"
                                >
                                    {formType === "registration"
                                        ? "Sign In!"
                                        : "Register now!"}
                                </span>
                            )}
                        </p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default LoginRegistrationModal;
