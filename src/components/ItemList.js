import './ItemList.css';
import React from 'react';
import Item from './Item';


export default function ItemList() {
    return (
        <>
            <div className="itemList container">
                <Item/>
            </div>
        </>
    )
}