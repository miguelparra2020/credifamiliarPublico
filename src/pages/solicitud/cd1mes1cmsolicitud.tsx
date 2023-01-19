
import React, { useEffect, useState } from 'react';
import {IonCard,  IonContent, IonHeader,  IonLabel, IonPage, IonIcon, IonButton, IonChip,  IonCardSubtitle, IonCardTitle, IonItem, IonInput, IonNote, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import './cd1mes1cmsolicitud.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, } from 'ionicons/icons';
import { IonProgressBar } from '@ionic/react';



const cd1mes1cmsolicitud: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [progress, setProgress] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
const interval = setInterval(() => {
    setProgress((prevProgress) => prevProgress + 0.01);
}, 50);

return () => clearInterval(interval);
}, []);

if (progress > 1) {
setTimeout(() => {
    setProgress(0);
}, 1000);
}

    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        
        <IonContent fullscreen >
        <IonProgressBar value={progress}></IonProgressBar>
        
        <div id="contenido_body">
            <div id='contenido_div2'>
            <IonButton href='/solicitud/cd1mes1cm'>
            <IonChip color="success">
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
                <IonItem >
                <IonLabel position="floating">Nombre completo</IonLabel>
                <IonInput type="text" ></IonInput>
                <IonNote slot="helper">Por favor ingrese su ☝️</IonNote>
                </IonItem>
                <IonList>
                    <IonItem>
                        <IonSelect placeholder="Tipo de documento identidad" okText="Ok" cancelText="Cancelar">
                        <IonSelectOption value="cc">Cedula de Ciudadanía</IonSelectOption>
                        <IonSelectOption value="ce">Cedula Extranjera</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                <IonItem  >
                <IonLabel position="floating">Número de documento identidad</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su número 📇☝️</IonNote>
                </IonItem>
                <IonItem >
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput type="email" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su 📧☝️</IonNote>
                </IonItem>
                <IonItem  >
                <IonLabel position="floating">Número de celular</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su 📱☝️</IonNote>
                </IonItem>
                <IonItem >
                <IonLabel position="floating">Departamento</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su ubicación 🗺️☝️</IonNote>
                </IonItem>
                <IonItem  >
                <IonLabel position="floating">Ciudad</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar su ubicación 🗺️☝️</IonNote>
                </IonItem>
                <IonItem >
                <IonLabel position="floating">Empresa</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar donde labora 🗺️☝️</IonNote>
                </IonItem>
                

            </IonCard>
            <IonCard>
                <IonCardTitle>Formulario Capacidad de pago</IonCardTitle>
                <IonItem >
                <IonLabel position="floating">Ingresos mensuales</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingrese sus ingresos ☝️</IonNote>
                </IonItem>
                <IonItem  >
                <IonLabel position="floating">Gastos mensuales</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar sus gastos ☝️</IonNote>
                </IonItem>
            </IonCard>
            <IonCard>
                <IonCardTitle>Formulario Referencias</IonCardTitle>
                <IonItem >
                <IonLabel position="floating">Nombre de una referencia personal</IonLabel>
                <IonInput type="text" ></IonInput>
                <IonNote slot="helper">Por favor ingrese su nombre 🧑‍🤝‍🧑☝️</IonNote>
                </IonItem>
                <IonItem >
                <IonLabel position="floating">Número de la referencia personal</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar el numero celular 📱☝️</IonNote>
                </IonItem>
                <IonItem  >
                <IonLabel position="floating">Nombre de una referencia laboral</IonLabel>
                <IonInput type="text" ></IonInput>
                <IonNote slot="helper">Por favor ingrese su nombre 🧑‍🤝‍🧑☝️</IonNote>
                </IonItem>
                <IonItem  >
                <IonLabel position="floating">Número de la referencia laboral</IonLabel>
                <IonInput type="number" ></IonInput>
                <IonNote slot="helper">Por favor ingresar el numero celular 📱☝️</IonNote>
                </IonItem>
            </IonCard>
            <IonCard>
                <IonCardTitle>Firma del pagaré</IonCardTitle>
                <IonItem >
                <IonLabel position="floating">Firma virtual</IonLabel>
                <IonInput type="text" ></IonInput>
                </IonItem>
            </IonCard>
            
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1mes1cmsolicitud;
