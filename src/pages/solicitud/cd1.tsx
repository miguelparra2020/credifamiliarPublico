
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonButton  } from '@ionic/react';
import './cd1.css';

import Toolbar from '../../components/Toolbar';


const cd1: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            <IonButton expand="block" color="success" href='/solicitud/soloOpciones'>Volver</IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Al esgoger: $100.000 "Cien mil pesos m/cte" 💵</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>De que forma le queda fácil el pago:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd1mes" color="secondary">
                        <IonLabel>💲Mesual: "Cada mes el pago"</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2" color="primary">
                        <IonLabel>💲Quincenal: "Cada 15 días el pago"</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1;
