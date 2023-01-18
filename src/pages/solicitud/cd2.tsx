
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd2.css';

import Toolbar from '../../components/Toolbar';


const cd2: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div'>
            <IonButton href='/solicitud/soloOpciones'>
                <IonChip color="success">Volver</IonChip> 
            </IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Al esgoger: $200.000 "Doscientos mil pesos m/cte" 💵</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>De que forma le queda fácil el pago:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd2mes" color="secondary">
                        <IonLabel>💲Mesual: "Cada mes el pago"</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2quincena" color="primary">
                        <IonLabel>💲Quincenal: "Cada 15 días el pago"</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd2;

