import React, { useState, useEffect } from 'react';

export default function Tarjeta({ titulo, moneda }) {
    const [value, setValue] = useState(null);

    async function obtenerDolarBlue() {
        try {
            const respuesta = await fetch("https://api.bluelytics.com.ar/v2/latest");
            if (!respuesta.ok) {
                throw new Error("Error al obtener los datos del dólar blue");
            }

            const datos = await respuesta.json();
            const valorBlue = datos.blue.value_sell;

            setValue(valorBlue); // acá actualizás el estado
        } catch (error) {
            console.error("Hubo un problema:", error.message);
        }
    }

    useEffect(() => {
        obtenerDolarBlue(); // se llama cuando la tarjeta se monta
        }
    , []);

    return (
        <div className="tarjeta">
            <div className="tarjeta-header">{titulo}</div>
            <div className="tarjeta-content">
                <p>{moneda === "pesos" ? "$" : "USD$"}</p>
                {value !== null ? value : "Cargando..."}
            </div>
        </div>
    );
}
