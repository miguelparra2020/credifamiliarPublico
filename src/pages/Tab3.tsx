import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Tab3.css';
import Toolbar from '../components/Toolbar';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent fullscreen>
          Pagar
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
