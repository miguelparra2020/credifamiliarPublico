
import {IonCard,  IonContent, IonHeader,  IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd1quincena2cqsolicitud.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, } from 'ionicons/icons';


const cd1quincena2cqsolicitud: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div2'>
            <IonCard>
                Solicitud cd1quincena2cqsolicitud
            </IonCard>
                
            <IonButton href='/solicitud/cd1quincena2cq'>
            <IonChip>
                <IonIcon icon={arrowUndoCircleOutline}></IonIcon>
                <IonLabel>Volver</IonLabel>
            </IonChip>
            </IonButton>
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1quincena2cqsolicitud;
