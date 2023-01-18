
import React from 'react';
import {IonCard,  IonContent, IonHeader,  IonLabel, IonPage, IonIcon, IonButton, IonChip,  IonCardSubtitle, IonCardTitle, IonItem, IonInput, IonNote } from '@ionic/react';
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
            <IonButton href='/solicitud/cd1mes1cm'>
            <IonChip>
                <IonIcon icon={arrowUndoCircleOutline}></IonIcon>
                <IonLabel>Volver</IonLabel>
            </IonChip>
            </IonButton>
            <IonCard>
                <IonCardTitle>Pagaré virtual</IonCardTitle>
                <IonCardSubtitle>Detalles de la solictud</IonCardSubtitle>
                <IonItem>💵Valor préstamo: $100.000</IonItem>
                <IonItem>💲Forma de pago: Mensual</IonItem>
                <IonItem>👉Numero de cuotas: 1</IonItem>
                <IonItem>👉Valor cuota: $120.000</IonItem>
                <IonItem>
                <IonCardSubtitle>Apartir del día del desembolso cuenta el tiempo, Ejemplo desembolso el día 25, al mes siguiente el día 25 será el pago.</IonCardSubtitle>
                </IonItem>
            </IonCard>
            <IonCard>
                <IonCardTitle>Formulario de contacto</IonCardTitle>
                <IonItem fill="solid" >
                <IonLabel position="floating">Nombre completo</IonLabel>
                <IonInput type="text" ></IonInput>
                <IonNote slot="helper">Por favor ingrese su ☝️</IonNote>
                </IonItem>
                <IonItem fill="solid" >
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput type="email" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su 📧☝️</IonNote>
                </IonItem>
                <IonItem fill="solid" >
                <IonLabel position="floating">Número de celular</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su 📱☝️</IonNote>
                </IonItem>
                <IonItem fill="solid" >
                <IonLabel position="floating">Departamento</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su ubicación 🗺️☝️</IonNote>
                </IonItem>
                <IonItem fill="solid" >
                <IonLabel position="floating">Ciudad</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su ubicación 🗺️☝️</IonNote>
                </IonItem>
                <IonItem fill="solid" >
                <IonLabel position="floating">Empresa</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar donde labora 🗺️☝️</IonNote>
                </IonItem>
                <IonItem fill="solid" > Siguiente formulario👇</IonItem>

            </IonCard>
                
            
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1mes1cmsolicitud;
