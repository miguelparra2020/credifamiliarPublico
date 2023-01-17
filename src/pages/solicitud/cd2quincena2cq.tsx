
import {IonCard, IonCardContent, IonCardHeader,  IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd2quincena2cq.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, checkbox, ellipse } from 'ionicons/icons';


const cd2quincena2cq: React.FC = () => {
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
                                <IonLabel>$200.000 pesos mcte</IonLabel>
                        </IonItem>
                        <IonItem >
                                <IonIcon icon={checkbox} color="success"/>
                                <IonLabel>Pago quincenal</IonLabel>
                        </IonItem>
                        <IonItem >
                            <IonIcon icon={checkbox} color="success"/>
                            <IonLabel>2 cuotas quincenales</IonLabel>
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
                            <IonLabel>2 cuotas quincenales de: $120.000</IonLabel>
                        </IonItem>
                    </IonCard>
                    <IonButton color="primary" expand="full">Hacer Solicitud</IonButton>
                </IonCardContent>
            </IonCard>
            <IonButton href='/solicitud/cd2quincena'>
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

export default cd2quincena2cq;