function GoodItem(props){
    const {id, name, description, price, full_background, addToBasket} = props
    
    return(
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
                <span className="card-tittle p-3">{name}</span>
            </div>
            <div className="card-content white-text p-3">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button 
                className="btn btn-success" 
                onClick={()=>addToBasket({id, name, price})}
                 >Buy</button>
                <span className="right" style={{fontSize: "1.8rem"}}>{price}$</span>
            </div>
        </div>
    )

}

export default GoodItem