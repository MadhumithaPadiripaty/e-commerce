import axios from "axios"
import{useEffect,useState} from "react"
import {useDispatch} from 'react-redux'
import{add} from '../Store/cartSlice'


export default function Product(){
    let [products,setproducts]=useState([])
    let dispatch=useDispatch()
    let handleAdd=(product)=>{
        dispatch(add(product))
    }
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setproducts(res.data)
        })
    },[])
    return(
        <div className="productsWrapper">
            {products.map((product)=>{
                return <div key={product.id} className="card">
                        <img src={product.image}/>
                        <h6>{product.title}</h6>
                        <h5>{product.price}$</h5>
                        <button onClick={()=>handleAdd(product)} className="btn">Add to cart</button>
                        </div>

            })}
            
        </div>
    )
}