import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage } from '@ionic/react';
import './Tab4.css';
import Toolbar from '../components/Toolbar';
const Tab4: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <IonCard>
                <IonCardContent>
            <IonCardTitle>Términos y Condiciones</IonCardTitle>
            <IonCardSubtitle>CrediFast, es una plataforma web y móvil de intermediación en el proceso de préstamos de dinero entre personas Naturales de manera virtual, Esta plataforma busca que dichas negociaciones se den en un ámbito bilateral y de mutuo acuerdo, se pueda parametrizar todos los aspectos que conllevan la relación de un pagaré indicando primero quien es el solicitante del préstamo, y la persona que presta dicho dinero que factores puede analizar para otorgarlo sin perder su patrimonio, por ejemplo datos necesarios del solicitante que sea una persona real, capacidad de pago y referencias que lo acrediten, al tener estos factores en cuenta el prestamista decide aceptar o rechazar la solicitud, en caso positivo se termina de pactar el pagaré con la fecha de entrega y comprobante de entrega del dinero, firma del pagaré y adjunto de su cédula en respaldo. Esto indica que ante la ley se está dando forma al contrato de préstamo entre particulares y ambas partes quedan en mutuo acuerdo de desembolso y cobro de las cuotas. Lea detenidamente los presentes Términos y Condiciones antes de acceder a cualquier servicio o producto ofrecido por Credifast. Al acceder al aplicativo móvil o web así como cualquiera de los sitios relacionados y vinculados a Credifast, el Usuario manifiesta que ha leído y aceptado las condiciones de uso. Si el Usuario no está de acuerdo con todos estos términos y condiciones, queda prohibido su utilización del aplicativo y debe interrumpir el uso de manera inmediata.
            Al aceptar estos Términos y Condiciones, el Usuario se está vinculado jurídicamente con los servicios que a través de la plataforma tecnológica presta Credifast, toda vez que las mencionadas condiciones constituyen un documento con plena validez jurídica.
            </IonCardSubtitle>
</IonCardContent>
</IonCard>

            <IonCard>
                <IonCardContent>
            <IonCardTitle>Derechos de Autor y Propiedad Intelectual</IonCardTitle>
            <IonCardSubtitle>Todos los textos, gráficas, diseños, interfaces de Usuario, publicidad, imágenes, íconos, logos, software, bases de datos puestos a disposición del público y cualquier otro material (al cual en adelante se hará referencia como “Contenido”), tanto del sitio web como de la aplicación son de propiedad exclusiva de Credifast
            Todo el Contenido que hace parte de la página web y de la aplicación se encuentran protegidos por normas de Derechos de Autor y por todas las normas nacionales e internacionales que le sean aplicables.
            El Contenido no puede ser copiado, reproducido, posteado, transmitido, republicado, trasladado o distribuido de ninguna manera a otro computador, servidor, o cualquier otro medio sin autorización por escrito de Credifast, el uso no autorizado del Contenido puede constituir una violación de las leyes colombianas y/o internacionales de Propiedad Intelectual.
            Ningún Usuario podrá vender o modificar el Contenido de manera alguna, ni ejecutar o anunciar públicamente el mismo, ni distribuirlo para propósitos distintos a los establecidos en estos Términos y Condiciones.
            Queda prohibido hacer web scraping en la plataforma de Credifast y demás productos asociados.</IonCardSubtitle>
</IonCardContent>
</IonCard>

            
        </IonContent>
        </IonPage>
    );
};

export default Tab4;