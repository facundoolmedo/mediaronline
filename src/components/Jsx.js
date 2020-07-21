import React, {Fragment} from 'react';

const Jsx = () => {

    const temperatura = 2;

    return (  
        <Fragment>
            <h1>Hace frio o calor?</h1>
            <h2>
                {
                    temperatura > 20 ? 'Calor' : 'Frio' 
                }
            </h2>
        </Fragment>
    );
}

export default Jsx;