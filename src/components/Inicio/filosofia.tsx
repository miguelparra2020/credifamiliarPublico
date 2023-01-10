import './filosofia.css';
import { IonIcon} from '@ionic/react';
import {  flagOutline } from 'ionicons/icons';
const Filosofia: React.FC = () => {
    return (
        <div id='filosofia'>
            <div id='palabras_filosofia'>
            <IonIcon icon={flagOutline}/> Filosofía: Simplicidad, precios bajos, rapidez en trámites
            </div>
        </div>
    );
};
export default Filosofia;