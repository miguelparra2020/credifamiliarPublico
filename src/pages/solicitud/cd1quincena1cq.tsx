
import {IonCard, IonCardContent, IonCardHeader,  IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd1quincena1cq.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, checkbox, ellipse } from 'ionicons/icons';


const cd1quincena1cq: React.FC = () => {
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
                                <IonLabel>$100.000 pesos mcte</IonLabel>
                        </IonItem>
                        <IonItem >
                                <IonIcon icon={checkbox} color="success"/>
                                <IonLabel>Pago quincenal</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={checkbox} color="success"/>
                            <IonLabel>1 cuota quincenal</IonLabel>
                        </IonItem>
                    </IonCard>
                    <IonCardTitle>Con estas opciones usted pagaría:</IonCardTitle>
                    <IonCard>
                        <div id='items'>
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Valor a Capital: $100.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                                <IonIcon icon={ellipse}/>
                                <IonLabel>Costos administrativos: $5.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Costos plataforma: 
                            $3.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                            <IonIcon icon={ellipse}/>
                            <IonLabel>Interés: $2.000</IonLabel>
                        </div>
                        <div id='linea'></div>
                        <div id='items'>
                        <IonIcon icon={checkbox} color="primary"/>
                            <IonLabel>1 cuota quincenal de: $110.000</IonLabel>
                        </div>
                    </IonCard>
                    <IonButton color="primary" expand="full">Hacer Solicitud</IonButton>
                </IonCardContent>
            </IonCard>
            <IonButton href='/solicitud/cd1quincena'>
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

export default cd1quincena1cq;
