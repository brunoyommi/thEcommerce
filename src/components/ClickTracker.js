import React from "react"
import { useState, useEffect } from "react"

export default function ClickTracker(){
    const [count,setCount] = useState(0);
    const [date,SetDate] = useState(new Date);

    useEffect(()=>{
        window.addEventListener('click',getClick)

        return()=>{
            window.removeEventListener('click',getClick);
        }
    })

    const getClick = () =>{
        setCount(count + 1);
        SetDate(new Date);
    }
    
    return(
        <div>
            <h1>
                Total de clicks es: {count}
            </h1>

            <h2>
                Tu último click fue: {count == 0 ? 
                'No se registraron clicks' : date.toLocaleTimeString()}
            </h2>
        </div>

    )
}