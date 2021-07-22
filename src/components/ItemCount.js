import React from 'react';
import { useState } from 'react';

export default function ItemCount({onAdd,stock, initial}) {
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
                <input className="counterInput" type='number' disabled value={counter}></input>
                <button className='btn-primary' type='button' onClick={addItem}>+</button>
                <button className='btn-primary' type='button' onClick={removeItem}>-</button>
                <button className='btn-success' type='submit' onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            </div>
        </>
    )
}