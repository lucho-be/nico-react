import React from 'react'

export default function Tarjeta({titulo,moneda, valor}) {
    return (
        <div className="tarjeta">
            <div className="tarjeta-header">{titulo}</div>
            <div className="tarjeta-content"><p>{moneda == "pesos" ? "$" : "USD$"}</p>{valor}</div>
        </div>  
    )
}
