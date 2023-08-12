import GoodItem from "./GoodItem";


export default function GoodList(props){

    const {goods = [], addToBasket} =  props;
    // console.log(addToBasket);


    if(!goods.length){
        return <h2>Nothing here</h2>
    }

    return (
        
           <div className="goods">
             {
                goods.map((good)=>(
                    <GoodItem key={good.id} {...good} addToBasket={addToBasket} />
                ))
             }
           </div>
        
    )

}