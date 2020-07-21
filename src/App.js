import React from 'react';

/* import Contador from './components/Contador'
import Jsx from './components/Jsx'
import Lista from './components/Lista' */

import Formulario from './components/Formulario'
import Hform from './components/HookForm'

function App() {
  return (
    <div className = 'container mt-5'>
      <h2>Formulario de prueba</h2><br/><br/>
      <Formulario/>
      <br/><br/><br/>
      <Hform/>
    </div>
  );
}

export default App;
