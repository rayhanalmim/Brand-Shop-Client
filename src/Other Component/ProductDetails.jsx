import { ToastContainer, toast } from "react-toastify";
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/Authentication/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const {user} = useContext(AuthContext);
    const [card, setCard] = useState([]);
    const [temp, setTemp] = useState(false);
    const data = useLoaderData();

    const UserEmail = user.email;

    const newData = {...data, UserEmail}; 

    const handleClick = () => {
        console.log('handle')
        newData._id = newData._id + UserEmail;
        console.log(newData)

        if(card.find(obj => obj._id == newData._id)){
            return  toast.error('Item already added', {
                position: "top-left",
                theme: "dark",
            });
        }



        fetch('https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/card', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {

                    Swal.fire(
                        'Added!',
                        'Item has been Added.',
                        'success'
                    )
                }
                setTemp(true);
            })

           
    }

    useEffect(()=>{
          fetch('https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/card')
          .then(res => res.json())
          .then(result => setCard(result));      
    },[temp]);

    return (
        <div className="w-11/12 mx-auto mt-7 pb-6 md:pb-[30vh]">
            <div className="flex flex-col-reverse md:flex-row gap-4">

                <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-3xl pt-2">{data.productName}</h3>
                    <hr />
                    <div className="flex justify-between">
                        <p className="text-lg">{data.productDetails}</p>
                    </div>

                    <button onClick={() => handleClick()} className="btn bg-rose-700 hover:bg-black  text-white"><BsFillBookmarkPlusFill></BsFillBookmarkPlusFill> Add to card</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img className="rounded" src={data.photoUrl} alt="" />
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;