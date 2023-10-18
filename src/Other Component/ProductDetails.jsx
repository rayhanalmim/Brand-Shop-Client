import { ToastContainer, toast } from "react-toastify";
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const data = useLoaderData();

    const handleClick = () =>{
        console.log('handle')
        toast.success('Booked successfully', {
            position: "top-left",
            theme: "dark",
            });
    }
    return (
        <div className="w-11/12 mx-auto mt-7">
        <div className="flex flex-col-reverse md:flex-row gap-4">

            <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-3xl pt-2">{data.productName}</h3>
                <hr />
                <div className="flex justify-between">
                    <p className="text-lg">{data.productDetails}</p>
                </div>
                
                <button onClick={()=>handleClick()} className="btn bg-rose-700 hover:bg-black  text-white"><BsFillBookmarkPlusFill></BsFillBookmarkPlusFill> Add to card</button>
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