// import {  chevronForwardCircleOutline } from 'ionicons/icons';
import './SliderBanner1.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonImg,  } from '@ionic/react';

const SliderBanner1: React.FC = () => {
    return (
        <div id='contenido_cards'>
        <div id='contenedor_SliderBanner1'>
            <a   href='/solicitud/soloOpciones'>
            <IonCard>
                <div id='content_img_SliderBanner1'> 
                
                <IonImg src="/assets/img/prestamos.jpg" id='img_SliderBanner1'></IonImg>
                </div> 
                
                <IonCardHeader>
                    <IonCardTitle>Bienvenido al proceso de solicitud</IonCardTitle>
                    <IonCardSubtitle>Otorgamos créditos de libre inversión</IonCardSubtitle>
                </IonCardHeader>
                
                <IonCardContent id='parrafo'>
                    En nuestra plataforma tratamos de hacer un proceso muy fácil de realizar, fácil de solicitar y fácil de pagar. 
                </IonCardContent>
            </IonCard>
            </a>
        </div>
        </div>
    );
};
export default SliderBanner1;