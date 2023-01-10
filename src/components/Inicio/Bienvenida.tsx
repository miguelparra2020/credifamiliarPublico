import './Bienvenida.css';
import { IonGrid,IonRow, IonCol} from '@ionic/react';
// import {  download } from 'ionicons/icons';
const Bienvenida: React.FC = () => {
    return (
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
    );
};
export default Bienvenida;