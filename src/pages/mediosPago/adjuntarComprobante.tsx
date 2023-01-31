
import { IonButton, IonChip, IonContent, IonFab, IonFabButton, IonHeader,  IonIcon,  IonLabel,  IonPage } from '@ionic/react';
import './adjuntarComprobante.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, logoWhatsapp } from 'ionicons/icons';


const adjuntarComprobante: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id='centrar'>
        <div id='contenedor_botones'>
            <div>
                <IonButton href='/tab3'>
                    <IonChip color="success">
                        <IonIcon icon={arrowUndoCircleOutline}></IonIcon>
                        <IonLabel>Volver</IonLabel>
                    </IonChip>
                </IonButton>
            
                </div>
            <div>
                Adjuntar Comprobante
            </div>
        </div>
        </div>
        <IonFab slot="fixed" vertical="bottom" horizontal="end" >
            <IonFabButton color="success" href="https://wa.link/2sm4io" target="_Blanck">
                <IonIcon icon={logoWhatsapp}></IonIcon>
            </IonFabButton>
        </IonFab>
        </IonContent>
        </IonPage>
    );
};

export default adjuntarComprobante;
