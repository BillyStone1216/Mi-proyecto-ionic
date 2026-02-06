import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonItem, IonLabel, IonInput, IonCard, IonCardContent, IonText } from '@ionic/react';

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<string>('');
  const [letras, setLetras] = useState<string>('');

  const convertirALetras = (num: string) => {
    const n = parseInt(num);
    if (isNaN(n) || n < 1 || n > 1000) return "Ingresa un número del 1 al 1000";
    
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (n === 1000) return "mil";
    if (n === 100) return "cien";

    let resultado = '';
    const c = Math.floor(n / 100);
    const d = Math.floor((n % 100) / 10);
    const u = n % 10;

    if (c > 0) resultado += centenas[c] + ' ';
    if (d === 1) {
      resultado += especiales[u];
    } else {
      if (d > 1) resultado += decenas[d] + (u > 0 ? ' y ' : '');
      if (u > 0) resultado += unidades[u];
    }
    return resultado.trim();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle>Traductor de Números</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Número (1-1000)</IonLabel>
              <IonInput type="number" value={numero} onIonChange={e => {
                setNumero(e.detail.value!);
                setLetras(convertirALetras(e.detail.value!));
              }} />
            </IonItem>
            <div className="ion-padding-top ion-text-center">
              <IonText color="secondary"><h3>{letras}</h3></IonText>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Traductor;