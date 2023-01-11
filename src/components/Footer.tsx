import { IonButton } from '@ionic/react';
import './Footer.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
const Footer: React.FC = () => {
    return (
        <div id='footer_content'>
            <div id='footer_terminos'>
                <div id='footer_terminos_titulo'> Titulo de la empresa</div>
                
                <div id='footer_terminos_parrafo'><IonButton href="./Terminos"> Términos · Política de privacidad </IonButton></div>
                
            </div>
            <div id='footer_copy'>
                <div>
                <img src="https://onwidget.com/favicon/favicon-32x32.png" alt="Favicon Copy" />
                </div>
                <div>
                Copy right: 
                <IonButton href="https://www.facebook.com/MiguelPaezUnidigital" target='_blanck' id="miguel_page">
                Miguel Páez 
                </IonButton>
                · All rights reserved.
                
                </div>
            </div>
        </div>
    );
};
export default Footer;