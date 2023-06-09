
import { IonContent, IonHeader, IonPage    } from '@ionic/react';
import './Tab1.css';
// import {   flagOutline } from 'ionicons/icons';
import Toolbar from '../components/Toolbar';
import DescargarApp from '../components/DescargarApp';
import Bienvenida from '../components/Inicio/Bienvenida';
import IniciarSolicitud from '../components/Inicio/IniciarSolicitud';
import ImagenHero from '../components/Inicio/ImagenHero';
import Filosofia from '../components/Inicio/filosofia';
import BannerOpciones from '../components/Inicio/BannerOpciones';
import Procesos from '../components/Inicio/Procesos';
import Footer from '../components/Footer';
import SliderBanner1 from '../components/solicitar/SliderBanner1';
import SliderItems from '../components/solicitar/SliderItems';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
        {/* Contenido Inicio */}
        {/* Boton para descargar la app */}
        <DescargarApp/>
        {/* Boton para descargar la app */}
        {/* Hero contenido de Bienvenida */}
        <Bienvenida/>
        {/* Hero contenido de Bienvenida */}
        {/* Iniciar Solicitud */}
        <IniciarSolicitud/>
        {/* Boton para descargar la app */}
        {/* Imagen Hero */}
        <ImagenHero/>
        {/* Imagen Hero */}
        {/* Filosofía */}
        <Filosofia/>
        {/* Filosofía */}
        {/* brindar opciones banner */}
        <BannerOpciones/>
        {/* brindar opciones banner */}
        {/* proceso del prestamo */}
        <Procesos/>
        {/* proceso del prestamo */}
        <SliderBanner1/>
        <SliderItems/>
        {/* Footer */}
        <Footer/>
        {/* Footer */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
