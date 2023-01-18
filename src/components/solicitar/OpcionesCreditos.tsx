import './OpcionesCreditos.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
import React from 'react';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel  } from '@ionic/react';
const OpcionesCreditos: React.FC = () => {
    return (
        <div id='contenedor_OpcionesCreditos'>
            <div id='center'> <h1>Empecemos 👇</h1></div>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Escoge la mejor opción Acorde a su necesidad</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>Escoge la cantidad de dinero:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd1" color="secondary">
                        <IonLabel>$100.000 "Cien mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2" color="primary">
                        <IonLabel>$200.000 "Docientos mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd3" color="tertiary">
                        <IonLabel>$300.000 "Trescientos mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </div>
    );
};
export default OpcionesCreditos;



