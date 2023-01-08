import { IonContent, IonHeader, IonPage, IonChip,IonAvatar, IonItem, IonCol, IonGrid, IonRow, IonIcon, IonTitle } from '@ionic/react';
import './Tab1.css';
import { download } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonTitle>Titulo de la empresa</IonTitle>
        </IonItem>
      </IonHeader>
      <IonContent fullscreen >
      <div id="contenido">
        {/* Boton para descargar la app */}
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol></IonCol>
            <IonCol size="8"><IonChip color="success">
            <IonIcon icon={download} /> &nbsp;&nbsp;
            Descarga la app en su movil</IonChip></IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        {/* Boton para descargar la app */}
        {/*  */}
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
