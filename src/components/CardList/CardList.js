import Card from "../Card/Card"





function CardList(props) {
    
    const {data, removeItem} = props

    return (
        <div className="block">
            {data.map(elem => <Card
                                key={elem.id}
                                id={elem.id}
                                name={elem.name}
                                price={elem.price}
                                count={elem.count}
                                removeItem={removeItem}
                                />)}
        </div>
    )
}


export default CardList