import './OpcionesCreditos.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
import React from 'react';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel  } from '@ionic/react';
const OpcionesCreditos: React.FC = () => {
    return (
        <div id='contenedor'>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Escoge la mejor opción Acorde a su necesidad</IonCardTitle>
                    <IonCardSubtitle>Te podemos ofrecer: </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>Escoge la cantidad de dinero</IonCardSubtitle>
                    <IonItem href="#">
                        <IonLabel>$100.000 "Cien mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                    <IonItem href="#">
                        <IonLabel>$200.000 "Docientos mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                    <IonItem href="#">
                        <IonLabel>$300.000 "Trescientos mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </div>
    );
};
export default OpcionesCreditos;



