import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from '../src/config/firebase';
import{
FirebaseAppProvider
} from 'reactfire';


<<<<<<< HEAD
ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando con la App...'}>
      <App />
    </Suspense> 
  </FirebaseAppProvider>
  ), document.getElementById('root'));
  
  serviceWorker.unregister();
=======
// Si desea que su aplicación funcione sin conexión y se cargue más rápido, puede cambiar
// anular el registro () para registrar () a continuación. Tenga en cuenta que esto viene con algunas trampas.
// Obtenga más información sobre los trabajadores de servicios: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 7b7fc0dec9e80c66f2b15d82bcbfb26449edd935
