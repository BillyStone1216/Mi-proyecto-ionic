import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardContent } from '@ionic/react';

const Experiencia: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h2 className="ion-text-center">Mi Video de Experiencia</h2>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://drive.google.com/embeddedfolderview?id=1VJW1tDFdruQuMbBLZLi0LeJvDW11FdfH#grid" 
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;