import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function AddProduct(){
    let [name, setName]=useState('');
    let [price, setPrice]=useState('');
    let [quantity, setQuantity]=useState('');
    const navigate = useNavigate()
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changePrice=(e)=>{
        setPrice(e.target.value)
    }
    const changeQuantity=(e)=>{
        setQuantity(e.target.value)
    }
    const submit=()=>{
        let product={
            name:name,
           price:price,
            quantity:quantity,
        }
        axios.post('http://localhost:3000/products',product).then(()=>{
            alert('added success');
            navigate('/');

        })
    }


    return(
        <>
            <div>
                <label>Name</label>
                <input
                    value={name}
                    placeholder='Name'
                    onChange={changeName}

                /><br/>
                <label>Price</label>
                <input
                    value={price}
                    placeholder='Price'
                    onChange={changePrice}
                /><br/>
                <label>Quantity</label>
                <input
                    value={quantity}
                    placeholder='Quantity'
                    onChange={changeQuantity}
                /><br/>
                <button onClick={submit}>Save</button>
            </div>
        </>
    )
}