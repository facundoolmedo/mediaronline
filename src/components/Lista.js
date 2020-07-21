import React, {useState, Fragment} from 'react';

const Lista = () => {
    
    const [arrayNumero, setarrayNumero] = useState([0,10,20,30])
    const [numero, setNumero] = useState(40)

    const agregarElemento = () => {
        
        console.log("Elemento Agregado");
        setNumero(numero + 10)
        setarrayNumero([...arrayNumero,numero]);
    
    }

    return ( 
        <Fragment>
            <h1>Lista</h1>
            <button onClick={agregarElemento}>Agregar Elemento</button>
            {
                arrayNumero.map((item, index) => <p key={index}>{item} - {index}</p>)
            }
        </Fragment>
    );
}
 
export default Lista;