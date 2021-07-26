import React from 'react';
import { useState } from 'react';

export default function ItemCount({ onAdd, stock, initial }) {
    const [counter, setCounter] = useState(initial);

    const addItem = () => {
        counter < stock ? setCounter(counter + 1) : setCounter(counter);
    }

    const removeItem = () => {
        counter > 0 ? setCounter(counter - 1) : setCounter(counter);
    }

    return (
        <>
            <div className='itemCounter'>
                <button className='btn btn-lg btn-outline-primary text-uppercase' type='submit' onClick={() => onAdd(counter)}>Agregar al carrito</button>
                <button className='btn-primary' type='button' onClick={removeItem}>-</button>
                <input className="counterInput" type='number' disabled value={counter}></input>                
                <button className='btn-primary' type='button' onClick={addItem}>+</button>
            </div>
        </>
    )
}