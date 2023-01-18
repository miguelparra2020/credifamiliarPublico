
import {IonCard, IonCardContent, IonCardHeader,  IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd2mes2cm.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, checkbox, ellipse } from 'ionicons/icons';


const cd2mes2cm: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div2'>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Estas son todas las opciones que escogió:</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCard>
                        <IonItem >
                                <IonIcon icon={checkbox} color="success"/>
                                <IonLabel>$200.000 pesos mcte</IonLabel>
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
                                <IonLabel>Valor a Capital: $100.000</IonLabel>
                        </IonItem>
                        <IonItem >
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Costos administrativos: $20.000</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Costos plataforma: $12.000</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Interés: $8.000</IonLabel>
                        </IonItem>
                        <IonItem >
                        <IonIcon icon={checkbox} color="primary"/>
                            <IonLabel>2 cuotas mensuales de: $140.000</IonLabel>
                        </IonItem>
                    </IonCard>
                    <IonButton color="primary" expand="full">Hacer Solicitud</IonButton>
                </IonCardContent>
            </IonCard>
            <IonButton href='/solicitud/cd2mes'>
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

export default cd2mes2cm;
