import {  chevronForwardCircleOutline } from 'ionicons/icons';
import './SliderBanner1.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonImg, IonIcon} from '@ionic/react';

const SliderBanner1: React.FC = () => {
    return (
        <div id='contenedor'>
            <IonCard>
                <div id='content_img'>   
                <IonImg src="/assets/img/prestamos.jpg" id='img'></IonImg>
                </div> 
                <IonCardHeader>
                    <IonCardTitle>Bienvenido al proceso de solicitud</IonCardTitle>
                    <IonCardSubtitle>Otorgamos créditos de libre inversión</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    En nuestra plataforma tratamos de hacer un proceso muy fácil de realizar, fácil de solicitar y fácil de pagar. Desliza a la derecha para continuar. <IonIcon icon={chevronForwardCircleOutline}/>
                </IonCardContent>
            </IonCard>
        </div>
    );
};
export default SliderBanner1;