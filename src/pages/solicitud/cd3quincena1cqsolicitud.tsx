
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader,  IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd3quincena1cqsolicitud.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, } from 'ionicons/icons';
import { IonProgressBar } from '@ionic/react';
import Iframe from 'react-iframe'


const cd3quincena1cqsolicitud: React.FC = () => {
    
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
            <IonButton href='/solicitud/cd3quincena1cq'>
            <IonChip color="success">
                <IonIcon icon={arrowUndoCircleOutline}></IonIcon>
                <IonLabel>Volver</IonLabel>
            </IonChip>
            </IonButton>
            <Iframe url="https://script.google.com/macros/s/AKfycbwKx6F7O9vySi2bHdJU6UVxA3BX5djEGYKoKbYe9Ag9MbXExMkIPdOJT_yMOtzT7nk/exec"
                width="350px"
                height="2600px"
                id=""
                allowFullScreen 
                styles={{border: "0px"}}
                className=""
                display="block"
                position="relative"/>
            </div>
        </div>
        
    
        </IonContent>
        </IonPage>
    );
};

export default cd3quincena1cqsolicitud;
