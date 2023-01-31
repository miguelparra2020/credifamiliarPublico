import { IonButton, IonCard, IonCardContent, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage } from '@ionic/react';
import './Tab3.css';
import Toolbar from '../components/Toolbar';
import { arrowRedoCircleOutline, cardOutline, logoWhatsapp, newspaper } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent fullscreen>
      <div id='centrar'>
        <div id='contenedor_botones'>
      <IonCard>
                <IonCardContent>
                  <IonButton expand="block" color="success" href='/mediosPago/mediosDePago'><IonIcon icon={arrowRedoCircleOutline} size="large"  ></IonIcon> &nbsp;  Medios de pago &nbsp; <IonIcon icon={cardOutline} size="large"></IonIcon></IonButton>
</IonCardContent>

</IonCard>
<IonCard>
<IonCardContent>
                  <IonButton expand="block" color="secondary" href='/mediosPago/adjuntarComprobante'>Adjuntar comprobante de pago &nbsp;<IonIcon icon={newspaper}></IonIcon></IonButton>
</IonCardContent>
</IonCard>
</div></div>
<IonFab slot="fixed" vertical="bottom" horizontal="end" >
      <IonFabButton color="success" href="https://wa.link/2sm4io" target="_Blanck">
        <IonIcon icon={logoWhatsapp}></IonIcon>
      </IonFabButton>
    </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
