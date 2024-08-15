import {Link} from "react-router-dom";

export function NavBar(){
    return(
        <>
            <div>
                <Link to='/'>
                    <button>Product List</button>
                </Link>
                <Link to='add-product'>
                    <button>Add new Product</button>
                </Link>


            </div>
        </>
    )
}