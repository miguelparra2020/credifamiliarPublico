import './DescargarApp.css';
import { IonButton, IonChip, IonIcon } from '@ionic/react';
import {  download } from 'ionicons/icons';
const DescargarApp: React.FC = () => {
    return (
        <div id='div_boton_descargar'>
            <IonButton href="./AppDown" id='button_chip'>
                <IonChip color="success" >
                    <IonIcon icon={download} /> 
                    &nbsp;&nbsp;
                    Descarga la app 
                </IonChip>
            </IonButton>
        </div>
    );
};
export default DescargarApp;