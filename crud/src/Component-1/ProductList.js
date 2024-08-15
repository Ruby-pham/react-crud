import {useEffect, useState} from "react";
import axios from "axios";
import {FaRegTrashAlt} from "react-icons/fa";
import {MdMovieEdit} from "react-icons/md";
import {Link} from "react-router-dom";

export function ProductList() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getList();
    }, []);
    const getList = () => {
        axios.get('http://localhost:3000/products').then((res) => {
            let data = res.data;
            setProduct(data)
        })
    }

    const remove = (id) => {
        let isConfirm = window.confirm('Are you sure?');
        if (isConfirm) {
            axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
                alert('deleted');
                getList();
            })
        }

    }
    return (
        <>
            <h3>Product List</h3>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {product.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Link to={`update/`+item.id}>
                                <MdMovieEdit/>
                            </Link>
                        </td>
                        <td onClick={() => remove(item.id)}><FaRegTrashAlt/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}