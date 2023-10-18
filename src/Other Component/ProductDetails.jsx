import { ToastContainer, toast } from "react-toastify";
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const [card, setCard] = useState([]);
    const [temp, setTemp] = useState(false);
    const data = useLoaderData();
    const {id} = useParams();
    console.log(id);
    console.log(data)

    const handleClick = () => {
        console.log('handle')

        if(card.find(obj => obj._id == id)){
            return  toast.error('Item already added', {
                position: "top-left",
                theme: "dark",
            });
        }

        fetch('http://localhost:5000/card', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {

                    toast.success('Item added successfully', {
                        position: "top-left",
                        theme: "dark",
                    });
                }
                setTemp(true);
            })

           
    }

    useEffect(()=>{
          fetch('http://localhost:5000/card')
          .then(res => res.json())
          .then(result => setCard(result));      
    },[temp]);

    console.log(card);

    return (
        <div className="w-11/12 mx-auto mt-7">
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