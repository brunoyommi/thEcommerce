import React from 'react';
import { useState } from 'react';
import { useCartContext } from './Context';

export default function ItemCount({ item, stock, initial }) {
    const [counter, setCounter] = useState(initial);

    const { addToCart } = useCartContext();

    const addItem = () => {
        counter < stock ? setCounter(counter + 1) : setCounter(counter);
    }

    const removeItem = () => {
        counter > 0 ? setCounter(counter - 1) : setCounter(counter);
    }

    return (
        <>
            <div className='itemCounter'>
                <button className='btn btn-lg btn-outline-primary text-uppercase' type='submit' onClick={() => addToCart(item,counter)}>Agregar al carrito</button>
                <button className='btn-danger'  type='button' onClick={removeItem}>-</button>
                <input className="counterInput" type='number' disabled value={counter}></input>
                <button className='btn-primary' type='button' onClick={addItem}>+</button>
            </div>
        </>
    )
}