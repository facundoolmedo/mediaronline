 import React , {useState, Fragment} from 'react';

 const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log("Incrementar Clickeado")
        setNumero(numero + 1)
    }

     return (  
     <Fragment>
        <h2>Numero: {numero}</h2>
        <button onClick = {aumentar}>Incrementar</button>
     </Fragment>
     );
 }
  
 export default Contador;