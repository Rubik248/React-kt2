// import { useState } from "react"
import BlockCard from '../CardList/CardList'
import AddItem from '../AddItem/AddItem'
import { useState } from 'react'

function App() {


    const data = [ 
        {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
        {id: 2, name: 'Самокат', price: 700, count: 1}, 
        {id: 3, name: 'Ролики', price: 1300, count: 2}, 
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ]


    const [item, setItem] = useState(data)


    function newItem() {
        let product = prompt()
        let products = product.split(' ')
        let newProduct = {
            id: Date.now,
            name: products[0],
            price: +products[1],
            count: 1
        }


        setItem([...item, newProduct])
    }



    return (
        <div>
            <AddItem newItem={newItem}/>
            <BlockCard data={item}/>
        </div>
    )
}

export default App


