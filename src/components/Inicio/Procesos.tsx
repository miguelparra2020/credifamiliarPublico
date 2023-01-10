import './Procesos.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
const Procesos: React.FC = () => {
    return (
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
    );
};
export default Procesos;