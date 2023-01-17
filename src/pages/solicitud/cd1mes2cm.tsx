
import {IonCard, IonCardContent, IonCardHeader,  IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd1mes2cm.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, checkbox, ellipse } from 'ionicons/icons';


const cd1mes2cm: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Estas son todas las opciones que escogió:</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCard>
                        <IonItem >
                                <IonIcon icon={checkbox} color="success"/>
                                <IonLabel>$100.000 pesos mcte</IonLabel>
                        </IonItem>
                        <IonItem >
                                <IonIcon icon={checkbox} color="success"/>
                                <IonLabel>Pago mensual</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={checkbox} color="success"/>
                            <IonLabel>2 cuotas mensuales</IonLabel>
                        </IonItem>
                    </IonCard>
                    <IonCardTitle>Con estas opciones usted pagaría:</IonCardTitle>
                    <IonCard>
                        <IonItem >
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Valor a Capital: $50.000</IonLabel>
                        </IonItem>
                        <IonItem >
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Costos administrativos: $10.000</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Costos plataforma: $6.000</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Interés: $4.000</IonLabel>
                        </IonItem>
                        <IonItem >
                        <IonIcon icon={checkbox} color="primary"/>
                            <IonLabel>2 cuotas mensuales de: $70.000</IonLabel>
                        </IonItem>
                    </IonCard>
                    <IonButton color="primary" expand="full">Hacer Solicitud</IonButton>
                </IonCardContent>
            </IonCard>
            <IonButton href='/solicitud/cd1mes'>
            <IonChip>
                <IonIcon icon={arrowUndoCircleOutline}></IonIcon>
                <IonLabel>Volver</IonLabel>
            </IonChip>
            </IonButton>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1mes2cm;
