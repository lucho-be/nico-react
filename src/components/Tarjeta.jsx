
export default function Tarjeta({ titulo, moneda, importe }) {


    return (
        <div className="tarjeta">
            <div className="tarjeta-header">{titulo}</div>
            <div className="tarjeta-content">
                <p>{moneda === "pesos" ? "$ " : "USD$ "}{importe}</p>
            </div>
        </div>
    );
}
