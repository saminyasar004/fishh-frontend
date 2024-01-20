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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwordIcon from "../../assets/icons/sword.svg";
import chatIcon from "../../assets/icons/chat.svg";
import chatFillIcon from "../../assets/icons/chat-fill.svg";
import gearIcon from "../../assets/icons/gear.svg";

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

const ChatList = () => {
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

                                <div className="chat-online-container flex items-center justify-around flex-col gap-3">
                                    <div className="w-full flex items-center justify-start">
                                        <h4 className="text-sm font-medium">
                                            Online
                                        </h4>
                                    </div>

                                    <Swiper spaceBetween={50} slidesPerView={5}>
                                        {avatarImages.map(() => {
                                            return (
                                                <SwiperSlide
                                                    key={Math.random()}
                                                >
                                                    {isLoading === true ? (
                                                        <Skeleton className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full" />
                                                    ) : (
                                                        <AvatarBox url={URL} />
                                                    )}
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </div>

                                <div className="chat-list-container flex items-center justify-start flex-col gap-4 pt-4 h-[80svh]">
                                    <div className="w-full flex items-center justify-start">
                                        <h4 className="text-sm font-medium">
                                            Chat Now
                                        </h4>
                                    </div>

                                    {isLoading === true
                                        ? Array.from({ length: 12 }).map(
                                              (_el) => {
                                                  return (
                                                      <div className="w-full flex items-center space-x-4">
                                                          <Skeleton className="h-12 w-12 rounded-full" />
                                                          <div className="space-y-2">
                                                              <Skeleton className="h-4 w-[250px]" />
                                                              <Skeleton className="h-4 w-[200px]" />
                                                          </div>
                                                      </div>
                                                  );
                                              }
                                          )
                                        : Array.from({ length: 12 }).map(
                                              (_el, index) => {
                                                  return (
                                                      <div className="w-full h-12 active:bg-input focus:bg-input hover:bg-input text-primary-foreground flex items-center justify-start rounded-lg py-9 px-2 border-b-[1px] border-secondary last:border-b-0">
                                                          <Avatar>
                                                              <AvatarImage
                                                                  src={
                                                                      "https://i.pravatar.cc/300"
                                                                  }
                                                                  alt="AB"
                                                              />
                                                              <AvatarFallback>
                                                                  AB
                                                              </AvatarFallback>
                                                          </Avatar>
                                                          <div className="w-full flex items-center justify-center flex-col">
                                                              <h3 className="w-full pl-4 text-lg font-medium">
                                                                  Angel Sadia{" "}
                                                                  {index}
                                                              </h3>
                                                              <div className="w-full flex items-center justify-between pr-4">
                                                                  <h6 className="w-full pl-4 text-sm">
                                                                      Ami ki
                                                                      tomake
                                                                      kichu...
                                                                  </h6>
                                                                  <div className="flex items-center justify-center gap-1 align-middle">
                                                                      <IonIcon
                                                                          icon={
                                                                              checkmarkDoneOutline
                                                                          }
                                                                          className="text-primary-foreground text-lg"
                                                                      />
                                                                      <span className="text-xs italic">
                                                                          10:57
                                                                      </span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  );
                                              }
                                          )}
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

export default ChatList;
