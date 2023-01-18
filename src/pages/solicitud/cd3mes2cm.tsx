
import {IonCard, IonCardContent, IonCardHeader,  IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd3mes2cm.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, checkbox, ellipse } from 'ionicons/icons';


const cd3mes2cm: React.FC = () => {
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
                                <IonLabel>$300.000 pesos mcte</IonLabel>
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
                        <div id='items'>
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Valor a Capital: $150.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Costos administrativos: $30.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Costos plataforma: $17.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Interés: $13.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                        <IonIcon icon={checkbox} color="primary"/>
                            <IonLabel>2 cuotas mensuales de: $210.000</IonLabel>
                        </div>
                    </IonCard>
                    <IonButton color="primary" expand="full" href='/solicitud/cd3mes2cmsolicitud'>Hacer Solicitud</IonButton>
                </IonCardContent>
            </IonCard>
            <IonButton href='/solicitud/cd3mes'>
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

export default cd3mes2cm;
