import { IonContent, IonHeader, IonPage,  IonToolbar,IonSlides, IonSlide } from '@ionic/react';
import './Tab2.css';
import Toolbar from '../components/Toolbar';
import SliderBanner1 from '../components/solicitar/SliderBanner1'

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <SliderBanner1/>
          </IonSlide>
          <IonSlide>
            <h1>Slide 1</h1>
          </IonSlide>
          <IonSlide>
            <h1>Slide 2</h1>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
