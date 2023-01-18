import './soloOpciones.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
import React from 'react';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage  } from '@ionic/react';
import Toolbar from '../../components/Toolbar';
const SoloOpciones: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent>
        <div id="contenido_body">
            <div id='contenido_div'>
            
            <h1>Empecemos 👇</h1>
            <IonCard >
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
        </div>
        </IonContent>
        </IonPage>
        
    );
};
export default SoloOpciones;



