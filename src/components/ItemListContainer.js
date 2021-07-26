import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
    const{categoryId} = useParams();    
    return (
        <>    
            <div className="itemListContainer container">
                <ItemList
                    categoryId={categoryId}/>
            </div>
        </>
    )
}