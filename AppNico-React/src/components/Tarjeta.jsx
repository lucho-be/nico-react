import React, { useState } from 'react'

export default function Tarjeta({ titulo, moneda }) {
    const [value, setValue] = useState(0);

    async function obtenerDolarBlue() {
        try {
            const respuesta = await fetch("https://api.bluelytics.com.ar/v2/latest");
            if (!respuesta.ok) {
                throw new Error("Error al obtener los datos del dólar blue");
            }

            const datos = await respuesta.json();
            console.log("Dólar blue:", datos.blue.value_sell);
            let valorBlue = datos.blue.value_sell;

        } catch (error) {
            console.error("Hubo un problema:", error.message);
            alert(error);
        }
    }


    return (
        <div className="tarjeta">
            <div className="tarjeta-header">{titulo}</div>
            <div className="tarjeta-content"><p>{moneda == "pesos" ? "$" : "USD$"}</p>{valorBlue}</div>
        </div>
    )
}
