import React from "react";

export const Hijo = React.memo(({ numero, incrementar, valor = 0 }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero } - {valor}
        </button>
    )
})
