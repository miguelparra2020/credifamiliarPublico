import './Toolbar.css';
import { IonAvatar, IonToolbar, IonTitle,IonImg } from '@ionic/react';
import {NombreEmpresa, IconNavbar192x192} from './variables'
const Toolbar: React.FC = () => {
    return (
        <div id="toolbar">
            <IonToolbar>
                <IonAvatar slot="start" id='avatar'>
                    <IonImg src={IconNavbar192x192} id='img'></IonImg>
                </IonAvatar>
                <IonTitle>{NombreEmpresa}</IonTitle>
            </IonToolbar>
        </div>
    );
};
export default Toolbar;