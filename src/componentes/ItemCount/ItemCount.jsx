import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
        <div className="contador-container">
            <button className="contador-btn" onClick={decrementar}> - </button>
            <span className="contador-num">{contador}</span>
            <button className="contador-btn" onClick={incrementar}> + </button>
        </div>
        <button className="agregar-carrito-btn" onClick={() => funcionAgregar(contador)}>
            🛒 Agregar al carrito
        </button>
        </>
    )
}

export default ItemCount