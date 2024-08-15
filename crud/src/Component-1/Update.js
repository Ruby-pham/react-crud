import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export function Update(){
    let [name, setName]=useState('');
    let [price, setPrice]=useState('');
    let [quantity, setQuantity]=useState('');
    const params=useParams();
    const idUpdate = params.id;

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
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${idUpdate}`).then((res)=>{
            let data=res.data
            setName(data.name);
            setPrice(data.price);
            setQuantity(data.quantity);

        })
    },[])
    const submit=()=>{
        let product={
            name:name,
            price:price,
            quantity:quantity,
        }
        axios.put(`http://localhost:3000/products/${idUpdate}`,product).then(()=>{
            alert('Update success');
            navigate('/');

        })
    }


    return(
        <>
            <div>
                <h4>UPDATE PRODUCT</h4>
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
                <button onClick={()=>{submit()}}>Save</button>
            </div>
        </>
    )
}