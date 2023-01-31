import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cash,  home,  newspaper,  thumbsUp,  } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import AppDown from './pages/AppDown';
import Terminos from './pages/Terminos';
import SoloOpciones from './pages/solicitud/soloOpciones';
import Cd1 from './pages/solicitud/cd1';
import Cd2 from './pages/solicitud/cd2';
import Cd3 from './pages/solicitud/cd3';
import Cd1Mes from './pages/solicitud/cd1mes';
import Cd1Mes1Cm from './pages/solicitud/cd1mes1cm';
import Cd1Mes2Cm from './pages/solicitud/cd1mes2cm';
import Cd1Mes3Cm from './pages/solicitud/cd1mes3cm';
import Cd1Mes1CmSolicitud from './pages/solicitud/cd1mes1cmsolicitud';
import Cd1Mes2CmSolicitud from './pages/solicitud/cd1mes2cmsolicitud';
import Cd1Mes3CmSolicitud from './pages/solicitud/cd1mes3cmsolicitud';
import Cd2Mes from './pages/solicitud/cd2mes';
import Cd2Mes1Cm from './pages/solicitud/cd2mes1cm';
import Cd2Mes2Cm from './pages/solicitud/cd2mes2cm';
import Cd2Mes3Cm from './pages/solicitud/cd2mes3cm';
import Cd2Mes1CmSolicitud from './pages/solicitud/cd2mes1cmsolicitud';
import Cd2Mes2CmSolicitud from './pages/solicitud/cd2mes2cmsolicitud';
import Cd2Mes3CmSolicitud from './pages/solicitud/cd2mes3cmsolicitud';
import Cd3Mes from './pages/solicitud/cd3mes';
import Cd3Mes1Cm from './pages/solicitud/cd3mes1cm';
import Cd3Mes2Cm from './pages/solicitud/cd3mes2cm';
import Cd3Mes3Cm from './pages/solicitud/cd3mes3cm';
import Cd3Mes1CmSolicitud from './pages/solicitud/cd3mes1cmsolicitud';
import Cd3Mes2CmSolicitud from './pages/solicitud/cd3mes2cmsolicitud';
import Cd3Mes3CmSolicitud from './pages/solicitud/cd3mes3cmsolicitud';
import Cd1Quincena from './pages/solicitud/cd1quincena';
import Cd1Quincena1Cq from './pages/solicitud/cd1quincena1cq';
import Cd1Quincena2Cq from './pages/solicitud/cd1quincena2cq';
import Cd1Quincena3Cq from './pages/solicitud/cd1quincena3cq';
import Cd1Quincena1CqSolicitud from './pages/solicitud/cd1quincena1cqsolicitud';
import Cd1Quincena2CqSolicitud from './pages/solicitud/cd1quincena2cqsolicitud';
import Cd1Quincena3CqSolicitud from './pages/solicitud/cd1quincena3cqsolicitud';
import Cd2Quincena from './pages/solicitud/cd2quincena';
import Cd2Quincena1Cq from './pages/solicitud/cd2quincena1cq';
import Cd2Quincena2Cq from './pages/solicitud/cd2quincena2cq';
import Cd2Quincena3Cq from './pages/solicitud/cd2quincena3cq';
import Cd2Quincena1CqSolicitud from './pages/solicitud/cd2quincena1cqsolicitud';
import Cd2Quincena2CqSolicitud from './pages/solicitud/cd2quincena2cqsolicitud';
import Cd2Quincena3CqSolicitud from './pages/solicitud/cd2quincena3cqsolicitud';
import Cd3Quincena from './pages/solicitud/cd3quincena';
import Cd3Quincena1Cq from './pages/solicitud/cd3quincena1cq';
import Cd3Quincena2Cq from './pages/solicitud/cd3quincena2cq';
import Cd3Quincena3Cq from './pages/solicitud/cd3quincena3cq';
import Cd3Quincena1CqSolicitud from './pages/solicitud/cd3quincena1cqsolicitud';
import Cd3Quincena2CqSolicitud from './pages/solicitud/cd3quincena2cqsolicitud';
import Cd3Quincena3CqSolicitud from './pages/solicitud/cd3quincena3cqsolicitud';
import MediosDePago from './pages/mediosPago/mediosDePago';
import AdjuntarComprobante from './pages/mediosPago/adjuntarComprobante';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/AppDown">
            <AppDown />
          </Route>
          <Route path="/Terminos">
            <Terminos />
          </Route>
          <Route path="/solicitud/soloOpciones">
            <SoloOpciones />
          </Route>
          <Route path="/solicitud/cd1">
            <Cd1 />
          </Route>
          <Route path="/solicitud/cd1mes">
            <Cd1Mes />
          </Route>
          <Route path="/solicitud/cd1mes1cm">
            <Cd1Mes1Cm />
          </Route>
          <Route path="/solicitud/cd1mes2cm">
            <Cd1Mes2Cm />
          </Route>
          <Route path="/solicitud/cd1mes3cm">
            <Cd1Mes3Cm />
          </Route>
          <Route path="/solicitud/cd1mes1cmsolicitud">
            <Cd1Mes1CmSolicitud />
          </Route>
          <Route path="/solicitud/cd1mes2cmsolicitud">
            <Cd1Mes2CmSolicitud />
          </Route>
          <Route path="/solicitud/cd1mes3cmsolicitud">
            <Cd1Mes3CmSolicitud />
          </Route>
          <Route path="/solicitud/cd1quincena">
            <Cd1Quincena/>
          </Route>
          <Route path="/solicitud/cd1quincena1cq">
            <Cd1Quincena1Cq/>
          </Route>
          <Route path="/solicitud/cd1quincena2cq">
            <Cd1Quincena2Cq/>
          </Route>
          <Route path="/solicitud/cd1quincena3cq">
            <Cd1Quincena3Cq/>
          </Route>
          <Route path="/solicitud/cd1quincena1cqsolicitud">
            <Cd1Quincena1CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd1quincena2cqsolicitud">
            <Cd1Quincena2CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd1quincena3cqsolicitud">
            <Cd1Quincena3CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd2">
            <Cd2 />
          </Route>
          <Route path="/solicitud/cd2mes">
            <Cd2Mes />
          </Route>
          <Route path="/solicitud/cd2mes1cm">
            <Cd2Mes1Cm />
          </Route>
          <Route path="/solicitud/cd2mes2cm">
            <Cd2Mes2Cm />
          </Route>
          <Route path="/solicitud/cd2mes3cm">
            <Cd2Mes3Cm />
          </Route>
          <Route path="/solicitud/cd2mes1cmsolicitud">
            <Cd2Mes1CmSolicitud />
          </Route>
          <Route path="/solicitud/cd2mes2cmsolicitud">
            <Cd2Mes2CmSolicitud />
          </Route>
          <Route path="/solicitud/cd2mes3cmsolicitud">
            <Cd2Mes3CmSolicitud />
          </Route>
          <Route path="/solicitud/cd2quincena">
            <Cd2Quincena />
          </Route>
          <Route path="/solicitud/cd2quincena1cq">
            <Cd2Quincena1Cq/>
          </Route>
          <Route path="/solicitud/cd2quincena2cq">
            <Cd2Quincena2Cq/>
          </Route>
          <Route path="/solicitud/cd2quincena3cq">
            <Cd2Quincena3Cq/>
          </Route>
          <Route path="/solicitud/cd2quincena1cqsolicitud">
            <Cd2Quincena1CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd2quincena2cqsolicitud">
            <Cd2Quincena2CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd2quincena3cqsolicitud">
            <Cd2Quincena3CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd3">
            <Cd3 />
          </Route>
          <Route path="/solicitud/cd3mes">
            <Cd3Mes />
          </Route>
          <Route path="/solicitud/cd3mes1cm">
            <Cd3Mes1Cm />
          </Route>
          <Route path="/solicitud/cd3mes2cm">
            <Cd3Mes2Cm />
          </Route>
          <Route path="/solicitud/cd3mes3cm">
            <Cd3Mes3Cm />
          </Route>
          <Route path="/solicitud/cd3mes1cmsolicitud">
            <Cd3Mes1CmSolicitud />
          </Route>
          <Route path="/solicitud/cd3mes2cmsolicitud">
            <Cd3Mes2CmSolicitud />
          </Route>
          <Route path="/solicitud/cd3mes3cmsolicitud">
            <Cd3Mes3CmSolicitud />
          </Route>
          <Route path="/solicitud/cd3quincena">
            <Cd3Quincena />
          </Route>
          <Route path="/solicitud/cd3quincena1cq">
            <Cd3Quincena1Cq/>
          </Route>
          <Route path="/solicitud/cd3quincena2cq">
            <Cd3Quincena2Cq/>
          </Route>
          <Route path="/solicitud/cd3quincena3cq">
            <Cd3Quincena3Cq/>
          </Route>
          <Route path="/solicitud/cd3quincena1cqsolicitud">
            <Cd3Quincena1CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd3quincena2cqsolicitud">
            <Cd3Quincena2CqSolicitud/>
          </Route>
          <Route path="/solicitud/cd3quincena3cqsolicitud">
            <Cd3Quincena3CqSolicitud/>
          </Route>
          <Route path="/mediosPago/mediosDePago">
            <MediosDePago/>
          </Route>
          <Route path="/mediosPago/adjuntarComprobante">
            <AdjuntarComprobante/>
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={cash} />
            <IonLabel>Solicitar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={thumbsUp} />
            <IonLabel>Pagar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={newspaper} />
            <IonLabel>Información</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
