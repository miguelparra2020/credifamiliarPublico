
import { IonContent, IonHeader, IonPage, IonChip,IonAvatar, IonItem, IonCol, IonGrid, IonRow, IonIcon, IonTitle,IonButton,    } from '@ionic/react';
import './Terminos.css';
import { download } from 'ionicons/icons';


const Terminos: React.FC = () => {
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
                <IonCol size="10">
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
            <IonGrid>
            <IonRow class="ion-justify-content-center">
                <IonCol></IonCol>
                <IonCol size="10">
                <span id='title_inicio'>Te vamos a ayudar 💵</span>
                <br /><br />
                <span id='parrafo_resaltado'>
                Muchas veces vemos la necesidad de que alguien nos saque de un apuro y esas veces nos dan la espalda.</span> 
                <span id='parrafo_normal'> Comprendemos que no siempre alcanzamos a cubrir los gastos en el mes o inclusive se nos presenta un evento con el que no contábamos, Nosotros trataremos de ayudarle, </span> <span id='parrafo_resaltado'>Te prestamos de una forma ágil, créditos salva vidas, tratamos de cobrar de una manera muy económica y adicional el trámite, el desembolso y los cobros son de manera virtual. "Te hacemos la vida fácil porque confiamos en tí..."</span>
                </IonCol>
                <IonCol></IonCol>
            </IonRow>
            </IonGrid>
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
            
        </div>
        </IonContent>
        </IonPage>
    );
};

export default Terminos;