
import {IonCard,  IonContent, IonHeader,  IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd1mes1cmsolicitud.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, } from 'ionicons/icons';


const cd1mes1cmsolicitud: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div2'>
            <IonCard>
                Solicitud cd1mes1cmsolicitud
            </IonCard>
                
            <IonButton href='/solicitud/cd1mes1cm'>
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

export default cd1mes1cmsolicitud;
