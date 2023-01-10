import './Bienvenida.css';
import { IonGrid,IonRow, IonCol, IonButton} from '@ionic/react';
// import {  download } from 'ionicons/icons';
const IniciarSolicitud: React.FC = () => {
    return (
        <IonGrid>
            <IonRow >
                <IonCol></IonCol>
                <IonCol size="12">
                <IonButton color="secondary" href="./Tab2">🚀 Solicitar crédito</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};
export default IniciarSolicitud;