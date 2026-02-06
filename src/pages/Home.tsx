import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
  IonAvatar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonIcon 
} from '@ionic/react';
import { idCardOutline, mailOutline, schoolOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Mi Portada ITLA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        <IonCard>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <IonAvatar style={{ width: '150px', height: '150px', border: '3px solid #3880ff' }}>
              
              <img alt="Yoskal García" src="/assets/yoskal.jpeg" />
            </IonAvatar>
          </div>
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Yoskal García Contreras</IonCardTitle>
            <IonCardSubtitle>Matrícula: 2022-0497</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="full">
              <IonItem>
                <IonIcon slot="start" icon={schoolOutline} color="primary" />
                <IonLabel>Desarrollo de Software</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={mailOutline} color="primary" />
                <IonLabel>20220497@itla.edu.do</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Home;
