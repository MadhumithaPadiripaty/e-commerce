import {useSelector, useDispatch} from 'react-redux'
import {remove } from '../Store/cartSlice'

export default function Cart(){
    let items=useSelector((state)=>state.cart)
    // console.log(item)
    let dispatch=useDispatch()
    let handleRemove=(itemid)=>{
        dispatch(remove(itemid))
    }
    return(
        <div className="cartWrapper">
            {items.map((item)=>{
            return <div key={item.id} className="cartCard">
                    <img src={item.image}/>
                    <h6>{item.title}</h6>
                    <h5>{item.price}$</h5>
                    <button onClick={()=>handleRemove(item.id)} className="btn">Remove Item</button>
                    </div>

            })}
            
        </div>
    )
}