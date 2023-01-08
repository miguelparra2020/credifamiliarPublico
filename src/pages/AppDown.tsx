import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
const AppDown: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>AppDown</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">AppDown</IonTitle>
            </IonToolbar>
            </IonHeader>
            <ExploreContainer name="AppDown page" />
        </IonContent>
        </IonPage>
    );
};

export default AppDown;