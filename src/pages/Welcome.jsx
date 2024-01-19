import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LoginRegistrationModal from "@/components/LoginRegistrationModal";

import Logo from "../../assets/images/logo-198.png";
import Faces from "../../assets/images/faces-2.svg";

const Welcome = () => {
    return (
        <>
            <IonPage>
                <IonContent>
                    <div className="w-full min-h-screen max-h-min bg-welcome-bg bg-no-repeat bg-center">
                        <div className="flex items-start justify-center flex-col row">
                            <div className="flex items-center justify-center w-full">
                                <img
                                    src={Logo}
                                    className="w-[50%]"
                                    alt="Fishh"
                                />
                            </div>
                            <div className="w-full flex items-start justify-center flex-col gap-2">
                                <h5 className="text-sm">
                                    Shoot the shots before you match 🎯
                                </h5>
                                <h1 className="welcome-header-1 text-primary font-semibold text-[2.8rem]  leading-6">
                                    Make waves
                                </h1>
                                <h4 className="text-[2.2rem] font-light">on</h4>
                                <h1 className="welcome-header-2 text-secondary font-black text-[3.5rem]  leading-10">
                                    Fishh.
                                </h1>
                            </div>

                            <div className="w-full flex items-start justify-center flex-col gap-1 pt-6">
                                <p className="text-sm font-medium bg-primary/60 rounded-md px-2 py-1">
                                    Anonymous Chatting 🤡
                                </p>
                                <p className="text-sm font-medium bg-tertiary/60 rounded-md px-2 py-1">
                                    Prioritize Your Personality 🎉
                                </p>
                                <p className="text-sm font-medium bg-secondary/60 rounded-md px-2 py-1">
                                    Get Matched! 💖
                                </p>
                            </div>

                            <div className="w-full flex items-center justify-center pt-8 flex-col relative">
                                <img src={Faces} className="w-11/12" alt="" />
                                <LoginRegistrationModal />
                            </div>
                            <div className="w-full flex items-center justify-center pt-3">
                                <p className="text-xs font-medium">
                                    by accepting, you agree to our{" "}
                                    <span className="text-secondary underline">
                                        terms & services
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Welcome;
