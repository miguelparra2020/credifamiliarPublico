
import { IonContent, IonHeader, IonPage   } from '@ionic/react';
import Toolbar from '../../components/Toolbar';

const cd3: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            CD3
            
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd3;
