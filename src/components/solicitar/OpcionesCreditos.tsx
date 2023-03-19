import './OpcionesCreditos.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
import React from 'react';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel  } from '@ionic/react';
import {LinkFormularioOpciones, ImagenProtada} from '../variables'


const OpcionesCreditos: React.FC = () => {
    return (
        <div id='contenedor_OpcionesCreditos'>
            <div id='center'><a href={LinkFormularioOpciones} rel="noopener noreferrer" target="_blank"><img src={ImagenProtada} alt="" /></a></div>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Escoge la mejor opción Acorde a su necesidad</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>Escoge la cantidad de dinero:</IonCardSubtitle>
                    <br />
                    <IonItem href={LinkFormularioOpciones} color="secondary" target='_blank'>
                        <IonLabel>$100.000 "Cien mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href={LinkFormularioOpciones} color="primary" target='_blank'>
                        <IonLabel>$200.000 "Docientos mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href={LinkFormularioOpciones} color="tertiary" target='_blank'>
                        <IonLabel>$300.000 "Trescientos mil pesos m/cte" 💵</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </div>
    );
};
export default OpcionesCreditos;



