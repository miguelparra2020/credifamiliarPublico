
import { IonContent, IonHeader, IonPage, IonChip,IonAvatar, IonItem, IonCol, IonGrid, IonRow, IonIcon, IonTitle,IonButton, IonImg    } from '@ionic/react';
import './Tab1.css';
import {  download, flagOutline } from 'ionicons/icons';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <IonImg alt="Imagen de la Empresa" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonTitle>Titulo de la empresa</IonTitle>
        </IonItem>
      </IonHeader>
      <IonContent fullscreen >
      <div id="contenido">
        {/* Boton para descargar la app */}
        <div id='div_boton_descargar'>
            <IonButton href="./AppDown" id='button_chip'>
              <IonChip color="success" >
                  <IonIcon icon={download} /> 
                  &nbsp;&nbsp;
                  Descarga la app 
                
              </IonChip>
              </IonButton>
        </div>
        {/* Boton para descargar la app */}
        {/* Hero contenido de Bienvenida */}
        <div id='hero_content'>
        <div id='contenido_bienvenida'>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol></IonCol>
            <IonCol size="12" id='col_parrafo'>
            <span id='title_inicio'>Te vamos a ayudar 💵</span>
              <br /><br />
              <span id='parrafo_resaltado'>
              Muchas veces vemos la necesidad de que alguien nos saque de un apuro y esas veces nos dan la espalda.</span> 
              <span id='parrafo_normal'> Comprendemos que no siempre alcanzamos a cubrir los gastos en el mes o inclusive se nos presenta un evento con el que no contábamos, Nosotros trataremos de ayudarle, </span> <span id='parrafo_resaltado'>Te prestamos de una forma ágil, créditos salva vidas, tratamos de cobrar de una manera muy económica y adicional el trámite, el desembolso y los cobros son de manera virtual. "Te hacemos la vida fácil porque confiamos en tí..."</span>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        </div>
        </div>
        {/* Hero contenido de Bienvenida */}
        {/* Iniciar Solicitud */}
        <IonGrid>
          <IonRow >
            <IonCol></IonCol>
            <IonCol size="12">
              <IonButton color="secondary" href="./Tab2">🚀 Solicitar crédito</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* Boton para descargar la app */}
        {/* Imagen Hero */}
          <IonImg src="https://res.cloudinary.com/ddllgbo70/image/upload/v1673224379/assets%20prestamos%20en%20linea/Hero_eqbsyx.jpg" alt="Imagen Hero"></IonImg>
        {/* Imagen Hero */}
        {/* Filosofía */}
          <div id='filosofia'>
              <div id='palabras_filosofia'>
              <IonIcon icon={flagOutline}/> Filosofía: Simplicidad, precios bajos, rapidez en trámites
              </div>
          </div>
        {/* Filosofía */}
        {/* brindar opciones banner */}
        <div id='banner_opciones'>
          <div id='banner_opciones_palabras'>
              <div id='titulo_banner_opciones'>
              Brindamos varias opciones de crédito
              </div>
              <div id='parrafo_banner_opciones'>
              Puedes escoger la mejor opción que se ajuste a tu necesidad y capacidad de pago.
              </div>
          </div>
        </div>
        {/* brindar opciones banner */}
        {/* proceso del prestamo */}
          <div id='contenedor_proceso'>
            <div id='centro_contenedor_proceso'>
              <div id='titulo_proceso'>
                Un proceso muy sencillo de realizar y 100% en línea.
              </div>
              <div id='pasos_proceso'>
                <div id='pasos_proceso_icons'>
                  <div id='pasos_proceso_icons_superior'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" id='icon_down'/>
</svg>
                  </div>
                  <div id='pasos_proceso_icons_inferior'>

                  </div>
                </div>
                <div id='pasos_proceso_palabras'>
                  <div id='pasos_proceso_palabras_superior'>

                  </div>
                  <div id='pasos_proceso_palabras_inferior'>

                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* proceso del prestamo */}
        <div>

        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
