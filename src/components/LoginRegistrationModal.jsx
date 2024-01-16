import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { person, key, mail, eye, eyeOff } from "ionicons/icons";

import Logo from "../../assets/images/logo-198.png";

const LoginRegistrationModal = () => {
    const [formType, setFormType] = useState("login");
    const [passwordVisibility, setPasswordVisibility] = useState("off");
    const passwordField = useRef();

    const toggleFormType = () => {
        setFormType(formType === "login" ? "registration" : "login");
    };

    const togglePasswordVisibility = (e) => {
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
                        <div className="flex items-center justify-center w-full flex-col">
                            <img src={Logo} className="w-[70%]" alt="Fishh" />
                            <DialogTitle>
                                {formType === "registration"
                                    ? "Create an Account!"
                                    : "Welcome Back!"}
                            </DialogTitle>
                        </div>
                    </DialogHeader>
                    <div className="w-full flex items-center justify-center flex-col gap-4">
                        <div className="w-full flex items-center justify-center relative">
                            <IonIcon
                                className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                icon={mail}
                            />
                            <Input
                                id="emailField"
                                type="email"
                                placeholder="your email"
                                className="bg-primary text-primary-foreground placeholder:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground outline-none ring-[5px] ring-border py-6 pl-12 rounded-lg shadow-modal"
                            />
                        </div>

                        {formType === "registration" && (
                            <div className="w-full flex items-center justify-center relative">
                                <IonIcon
                                    className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                    icon={person}
                                />
                                <Input
                                    id="usernameField"
                                    placeholder="username"
                                    type="name"
                                    className="bg-primary text-primary-foreground placeholder:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground outline-none ring-[5px] ring-border py-6 pl-12 rounded-lg shadow-modal"
                                />
                            </div>
                        )}

                        <div className="w-full flex items-center justify-center relative">
                            <IonIcon
                                className="text-primary-foreground text-xl absolute left-[5%] z-[2] pointer-events-none"
                                icon={key}
                            />
                            <Input
                                id="passwordField"
                                ref={passwordField}
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
                            >
                                sign in with email
                            </Button>
                        </div>
                    </div>

                    <DialogFooter className="pb-4">
                        <p className="text-sm font-medium text-center w-full">
                            {formType === "registration"
                                ? "Aready have an account? "
                                : "Don't have an account yet? "}
                            <span
                                onClick={toggleFormType}
                                className="text-secondary underline"
                            >
                                {formType === "registration"
                                    ? "Sign In!"
                                    : "Register now!"}
                            </span>
                        </p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default LoginRegistrationModal;
