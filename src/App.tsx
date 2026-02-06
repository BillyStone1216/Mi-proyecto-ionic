import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonList, IonItem, IonMenu, IonMenuButton, 
  IonButtons, setupIonicReact, IonSplitPane 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, calculatorOutline, languageOutline, gridOutline, videocamOutline } from 'ionicons/icons';

/* Importar tus páginas */
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        {/* MENU LATERAL */}
        <IonMenu contentId="main" type="overlay">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Menú Tarea</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/home" routerDirection="none">
                <IonIcon slot="start" icon={homeOutline} />
                <IonLabel>Portada</IonLabel>
              </IonItem>
              <IonItem routerLink="/sumadora" routerDirection="none">
                <IonIcon slot="start" icon={calculatorOutline} />
                <IonLabel>Sumadora</IonLabel>
              </IonItem>
              <IonItem routerLink="/traductor" routerDirection="none">
                <IonIcon slot="start" icon={languageOutline} />
                <IonLabel>Traductor</IonLabel>
              </IonItem>
              <IonItem routerLink="/tabla" routerDirection="none">
                <IonIcon slot="start" icon={gridOutline} />
                <IonLabel>Tabla Multiplicar</IonLabel>
              </IonItem>
              <IonItem routerLink="/experiencia" routerDirection="none">
                <IonIcon slot="start" icon={videocamOutline} />
                <IonLabel>Experiencia</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        
        <IonRouterOutlet id="main">
  
  <Route exact path="/home" component={Home} />
  <Route exact path="/sumadora" component={Sumadora} />
  <Route exact path="/traductor" component={Traductor} />
  <Route exact path="/tabla" component={Tabla} />
  <Route exact path="/experiencia" component={Experiencia} />

  
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;