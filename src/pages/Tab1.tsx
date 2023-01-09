
import { IonContent, IonHeader, IonPage, IonChip,IonAvatar, IonItem, IonCol, IonGrid, IonRow, IonIcon, IonTitle,IonButton, IonImg    } from '@ionic/react';
import './Tab1.css';
import { download, flagOutline } from 'ionicons/icons';


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
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol></IonCol>
            <IonCol size="12">
            <IonButton href="./AppDown" id='button_chip'>
              <IonChip color="success" >
              
                <IonTitle>
                  <IonIcon icon={download} /> 
                  &nbsp;&nbsp;
                  Descarga la app 
                </IonTitle> 
                
              </IonChip>
              </IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
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
        {/* Folosofía */}
          <div id='filosofia'>
              <div id='palabras_filosofia'>
              <IonIcon icon={flagOutline}/> Filosofía: Simplicidad, precios bajos, rapidez en trámites
              </div>
          </div>
        {/* Folosofía */}
        <div>

        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
