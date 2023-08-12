export default function BasketItem (props) {
    const {id, name, price, quantity, incrementQuantity, decrementQuantity} = props;

    return(
        <li className="collection-item">
            {name}: {quantity} x {price} = <b>$</b>{price*quantity}

            <span className="secondary-content">
                <a href="/#" className="btn-floating  waves-effect waves-light  " onClick={()=>{incrementQuantity(id)}}>
                    <i className="material-icons">add</i></a>
                <a href="/#" className="btn-floating  waves-effect waves-light " onClick={()=>{decrementQuantity(id)}}>
                    <i className="material-icons">remove</i></a>

                <i className="material-icons delete-basket" onClick={()=> props.removeFromBasket(id)}>delete_forever</i>
            </span>
        </li>
    )

}