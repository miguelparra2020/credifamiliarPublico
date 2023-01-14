import { chevronForwardCircleOutline } from 'ionicons/icons';
import './SliderItems.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonImg, IonIcon } from '@ionic/react';

const SliderItems: React.FC = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Procesos Necesarios</IonCardTitle>
                <IonCardSubtitle>Necesitamos poder validar algunos aspectos para otorgarle el préstamo.</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                <IonItem>
                    <IonThumbnail slot="start">
                    <IonImg src="/assets/img/registro.jpg" id='img'></IonImg>
                    </IonThumbnail>
                    <IonLabel>Formulario de contacto</IonLabel>
                </IonItem>

                <IonItem>
                    <IonThumbnail slot="start">
                    <IonImg src="/assets/img/pago.jpg" id='img'></IonImg>
                    </IonThumbnail>
                    <IonLabel>Formulario capacidad de pago</IonLabel>
                </IonItem>

                <IonItem>
                    <IonThumbnail slot="start">
                    <IonImg src="/assets/img/referencias.jpg" id='img'></IonImg>
                    </IonThumbnail>
                    <IonLabel>Formulario referencias</IonLabel>
                </IonItem>

                <IonItem lines="none">
                    <IonThumbnail slot="start">
                    <IonImg src="/assets/img/pagare.jpg" id='img'></IonImg>
                    </IonThumbnail>
                    <IonLabel>Formulario Pagaré</IonLabel>
                </IonItem>
                </IonList>
                <IonCardSubtitle>Desliza a la derecha para continuar. <IonIcon icon={chevronForwardCircleOutline}/></IonCardSubtitle>
            </IonCardContent>
    </IonCard>
    );
};
export default SliderItems;