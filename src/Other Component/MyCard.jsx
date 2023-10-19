
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/Authentication/AuthProvider";

const MyCard = () => {

    const [products, setProducts] = useState([]);

    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(email);

    useEffect(() => {
        fetch(`http://localhost:5000/card/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(result => setProducts(result))
    }, []);


    const handleRemove = (id) => {

        console.log(id);
        fetch(`http://localhost:5000/card/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Item has been deleted.',
                        'success'
                    )
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto my-6">

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    products.length > 0 && products.map(card => <div key={card._id}>
                        <div className="flex border rounded bg-slate-50">
                            <div className="w-1/2">
                                <img className="rounded-l h-48 object-cover" src={card.photoUrl} alt="" />
                            </div>
                            <div className="pl-3 flex-1 space-y-1 flex flex-col justify-between pb-5">
                                <div>
                                    <h3 className="font-semibold pb-1 text-2xl pt-2">{card.productName}</h3>
                                    <div className="space-y-1">
                                        <p><span className='font-semibold'>Company:</span> {card.company}</p>
                                        <p><span className='font-semibold'>Price:</span> {card.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(card._id)} className="btn btn-warning mr-6">Remove</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            {
                products.length < 1 && <div className="text-center">
                    <div className="flex justify-center">
                        <img className="w-1/5" src="https://i.ibb.co/GvwP03y/no-shopping-cart.png" alt="" />
                    </div>
                    <h3 className="text-3xl pt-4 font-bold">You have not added any cards yet</h3>
                </div>
            }
        </div>
    );
};

export default MyCard;