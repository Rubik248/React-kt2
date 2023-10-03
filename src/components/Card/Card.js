import { useState } from "react"
import s from './Card.css'



function Card(props) {

    const {name, count, price, removeItem, id} = props

    const [counts, setCounts] = useState(count)

    return (
        <div 
            className="item" 
            onDoubleClick={() => removeItem(id)}
        >
            <h2>{name}</h2>
            <p>{price}</p>
            <div className="mod">
                <button className="btn" onClick={() => setCounts(counts - 1)}>-</button>
                <p>{counts}</p>
                <button className="btn" onClick={() => setCounts(counts + 1)}>+</button>
            </div>
        </div>
    )
}


export default Card