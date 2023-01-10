import './Toolbar.css';
import { IonAvatar, IonToolbar, IonTitle,IonImg } from '@ionic/react';
const Toolbar: React.FC = () => {
    return (
        <div id="toolbar">
            <IonToolbar>
                <IonAvatar slot="start" id='avatar'>
                    <IonImg alt="Imagen de la Empresa"  src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonTitle>Titulo de la empresa</IonTitle>
            </IonToolbar>
        </div>
    );
};
export default Toolbar;