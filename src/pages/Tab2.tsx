import { IonContent, IonHeader, IonPage,  IonToolbar } from '@ionic/react';
import './Tab2.css';
import Toolbar from '../components/Toolbar';
import OpcionesCreditos from '../components/solicitar/OpcionesCreditos';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <div id='content_cards'> 
            <OpcionesCreditos/>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
