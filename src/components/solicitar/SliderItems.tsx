import './SliderItems.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';

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
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Formulario de contacto</IonLabel>
                </IonItem>

                <IonItem>
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Formulario capacidad de pago</IonLabel>
                </IonItem>

                <IonItem>
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Formulario referencias</IonLabel>
                </IonItem>

                <IonItem lines="none">
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Formulario Pagaré</IonLabel>
                </IonItem>
                </IonList>
            </IonCardContent>
    </IonCard>
    );
};
export default SliderItems;