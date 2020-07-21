import React, {Fragment, useState} from 'react';


const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        console.log("Se esta modificando el "+event.target.name)
        setDatos({
            ...datos,
            [event.target.name] : [event.target.value]
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(datos.nombre + " " + datos.apellido)
    }

    return (  
        <Fragment>
            <form className = 'row' onSubmit={enviarDatos}>
                <div className = 'col-md-3'>
                    <input 
                        placeholder="Nombre"
                        className = "form-control"
                        type = "text"
                        name = "nombre"
                        onChange = {handleInputChange}
                    />

                </div>
                
                <div className = 'col-md-3'>
                    <input 
                        placeholder="Apellido"
                        className = "form-control"
                        type = "text"
                        name = "apellido"
                        onChange = {handleInputChange}
                    />
                </div>

                <div className = 'col-md-3'>
                    <button className = "btn btn-primary" type = "submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}
 
export default Formulario;