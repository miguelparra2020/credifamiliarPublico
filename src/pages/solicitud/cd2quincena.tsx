
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd2quincena.css';

import Toolbar from '../../components/Toolbar';


const cd2quincena: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            <IonButton expand="block" color="secondary" href='/solicitud/cd2'>Volver</IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Ya Escogió: $200.000 "Doscientos mil pesos m/cte" 💵</IonCardTitle>
                    <IonCardTitle>💲Para pagar de manera Quincenal</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>Tiene la opción de escoger cuantas cuotas desea pagar:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd2quincena1cq" color="secondary">
                            <IonLabel>👉 1 cuota quincenal</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2quincena2cq" color="primary">
                            <IonLabel>👉 2 cuotas quincenales</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2quincena3cq" color="tertiary">
                        <IonLabel>👉 3 cuotas quincenales</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd2quincena;
