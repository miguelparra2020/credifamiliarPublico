import './SliderItems.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonImg } from '@ionic/react';

const SliderItems: React.FC = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Procesos Necesarios</IonCardTitle>
                <IonCardSubtitle>Necesitamos poder validar algunos aspectos para otorgarle el prestamo.</IonCardSubtitle>
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
            </IonCardContent>
    </IonCard>
    );
};
export default SliderItems;