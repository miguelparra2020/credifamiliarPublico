
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd1quincena.css';

import Toolbar from '../../components/Toolbar';


const cd1quincena: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            <IonButton expand="block" color="secondary" href='/solicitud/cd1'>Volver</IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Ya Escogió: $100.000 "Cien mil pesos m/cte" 💵</IonCardTitle>
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
        </IonContent>
        </IonPage>
    );
};

export default cd1quincena;
