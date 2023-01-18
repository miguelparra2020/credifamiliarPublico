
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd3quincena.css';

import Toolbar from '../../components/Toolbar';


const cd3quincena: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div'>
            <IonButton href='/solicitud/cd3'>
                <IonChip color="secondary">Volver</IonChip>
            </IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Ya Escogió: $300.000 "Trescientos mil pesos m/cte" 💵</IonCardTitle>
                    <IonCardTitle>💲Para pagar de manera Quincenal</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>Tiene la opción de escoger cuantas cuotas desea pagar:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd1" color="secondary">
                            <IonLabel>👉 1 cuota quincenal</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd1" color="primary">
                            <IonLabel>👉 2 cuotas quincenales</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd1" color="tertiary">
                        <IonLabel>👉 3 cuotas quincenales</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd3quincena;
