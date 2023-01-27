
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader,  IonLabel, IonPage, IonIcon, IonButton, IonChip } from '@ionic/react';
import './cd2mes2cmsolicitud.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, } from 'ionicons/icons';
import { IonProgressBar } from '@ionic/react';
import Iframe from 'react-iframe'


const cd2mes2cmsolicitud: React.FC = () => {
    
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
            <Iframe url="https://script.google.com/macros/s/AKfycbyDPply7O6IGY6zCfnhiLkouyP9yGdNJvd8RrZ2aNx_n9w-BD5ntyHYLTGqKyakjtwW/exec"
                width="350px"
                height="3000px"
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

export default cd2mes2cmsolicitud;
