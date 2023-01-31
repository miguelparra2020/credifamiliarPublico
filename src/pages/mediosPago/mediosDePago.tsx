
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonHeader,  IonIcon,  IonImg,  IonLabel,  IonPage } from '@ionic/react';
import './mediosDePago.css';

import Toolbar from '../../components/Toolbar';
import { arrowUndoCircleOutline, logoWhatsapp, qrCodeOutline } from 'ionicons/icons';


const mediosDePago: React.FC = () => {
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
            <IonCard>
            <IonImg src="/assets/img/qrBancolombia.jpg" id='img' alt='Qr Bancolombia'></IonImg>
            <IonCardHeader>
                <IonCardTitle>Cuenta de Ahorros BANCOLOMBIA 

                </IonCardTitle>
                <IonCardSubtitle>Numero: 073-063758-27</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
            <a href="/assets/img/qrBancolombia.jpg" download><IonButton color="light">Descargar QR &nbsp;<IonIcon icon={qrCodeOutline}></IonIcon></IonButton></a>
            </IonCardContent>
            </IonCard>
            </div>
            <div>
            <IonCard>
            <IonImg src="/assets/img/qrDaviplata.jpg" id='img' alt='Qr Bancolombia'></IonImg>
            <IonCardHeader>
                <IonCardTitle>Cuenta DAVIPLATA

                </IonCardTitle>
                <IonCardSubtitle>Numero: 311 707 4506</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
            <a href="/assets/img/qrDaviplata.jpg" download><IonButton color="light">Descargar QR &nbsp;<IonIcon icon={qrCodeOutline}></IonIcon></IonButton></a>
            </IonCardContent>
            </IonCard>
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

export default mediosDePago;
