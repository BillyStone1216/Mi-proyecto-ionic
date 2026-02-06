import React, { useState } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonItem, IonLabel, IonInput, 
  IonButton, IonCard, IonCardContent, IonText 
} from '@ionic/react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const realizarSuma = () => {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(isNaN(suma) ? 0 : suma);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Primer Número</IonLabel>
              <IonInput 
                type="number" 
                placeholder="0" 
                value={num1} 
                onIonChange={e => setNum1(e.detail.value!)} 
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Segundo Número</IonLabel>
              <IonInput 
                type="number" 
                placeholder="0" 
                value={num2} 
                onIonChange={e => setNum2(e.detail.value!)} 
              />
            </IonItem>

            <IonButton expand="block" className="ion-margin-top" onClick={realizarSuma}>
              Calcular Suma
            </IonButton>
          </IonCardContent>
        </IonCard>

        {resultado !== null && (
          <IonCard color="success">
            <IonCardContent className="ion-text-center">
              <h1 style={{ color: 'white' }}>Resultado: {resultado}</h1>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;