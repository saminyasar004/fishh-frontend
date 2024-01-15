import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

const Home = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="ion-text-center">Fishh</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
                    <h3 className="uppercase">hello world</h3>
                    <IonButton color="primary">Less go!</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
