import React, { useEffect, useState } from "react";
import {
    IonContent,
    IonPage,
    IonRefresher,
    IonRefresherContent,
} from "@ionic/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { IonIcon } from "@ionic/react";
import {
    arrowForwardOutline,
    checkmarkOutline,
    checkmarkDoneOutline,
} from "ionicons/icons";

import SwordIcon from "../../assets/icons/sword.svg";
import chatIcon from "../../assets/icons/chat.svg";
import chatFillIcon from "../../assets/icons/chat-fill.svg";
import gearIcon from "../../assets/icons/gear.svg";
import MessageSender from "@/components/MessageSender";

const AvatarBox = ({ url }) => {
    return (
        <>
            <Avatar className="w-12 h-12">
                <AvatarImage src={url} alt="AB" />
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>
        </>
    );
};

const Inbox = () => {
    const [isLoading, setLoading] = useState(true);
    const URL = "https://avatar.iran.liara.run/public";
    const avatarImages = Array.from({ length: 30 });

    const handleRefresh = (event) => {
        setLoading(true);
        setTimeout(() => {
            // Any calls to load data go here

            event.detail.complete();
            setLoading(false);
        }, 3000);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <>
            <IonPage>
                <IonContent>
                    <div className="w-full h-svh bg-background overflow-y-hidden">
                        <div className="row w-full h-full flex items-start justify-start flex-col">
                            <div className="header w-full grid grid-cols-4 bg-primary mt-4 mb-2 p-3 rounded-xl">
                                <div className="">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="AB"
                                        />
                                        <AvatarFallback>AB</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="col-span-2 flex items-center justify-center">
                                    <h3 className="text-2xl font-medium">
                                        Friends
                                    </h3>
                                </div>
                                <div className="flex items-center justify-end">
                                    <IonIcon
                                        icon={arrowForwardOutline}
                                        className="text-primary-foreground text-2xl"
                                    />
                                </div>
                            </div>

                            <div className="body-content w-full h-svh px-3 overflow-y-auto">
                                <IonRefresher
                                    slot="fixed"
                                    className="z-[100]"
                                    onIonRefresh={handleRefresh}
                                >
                                    <IonRefresherContent></IonRefresherContent>
                                </IonRefresher>

                                <div className="w-full flex items-center justify-center flex-col">
                                    <MessageSender
                                        avatarImg={URL}
                                        message={
                                            "how are you babesh? bolo bolo..."
                                        }
                                    />
                                </div>
                            </div>

                            <div className="footer w-full grid grid-cols-3 bg-primary mt-2 mb-4 p-3 px-6 rounded-xl">
                                <div className="w-full flex items-center justify-start py-1">
                                    <img
                                        src={SwordIcon}
                                        className="w-[30%]"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <img
                                        src={chatFillIcon}
                                        className="w-[30%]"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full flex items-center justify-end">
                                    <img
                                        src={gearIcon}
                                        className="w-[30%]"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Inbox;
