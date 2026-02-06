import React, { useState } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonItem, IonLabel, IonInput, 
  IonList, IonText, IonCard, IonCardContent 
} from '@ionic/react';

const Tabla: React.FC = () => {
  const [numero, setNumero] = useState<string>('1');

  const num = parseInt(numero) || 0;
  const multiplicaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Introduce un número</IonLabel>
              <IonInput 
                type="number" 
                value={numero} 
                onIonChange={e => setNumero(e.detail.value!)} 
              />
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonList inset={true}>
          {multiplicaciones.map((m) => (
            <IonItem key={m}>
              <IonLabel>{num} x {m}</IonLabel>
              <IonText slot="end" color="primary">
                <b>{num * m}</b>
              </IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tabla;