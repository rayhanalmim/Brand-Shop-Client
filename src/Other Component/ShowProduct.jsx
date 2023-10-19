import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { DarkContext } from '../Component/Root/Root';
import { useContext } from 'react';

const ShowProduct = ({ dataInfo }) => {
    const {isDarkMode} = useContext(DarkContext);

    return (
        <div className={`flex border rounded ${isDarkMode ? '' : 'bg-neutral-50'}`}>
            <div className="w-1/2">
                <img className="rounded-l h-full object-cover" src={dataInfo.photoUrl} alt="" />
            </div>
            <div className="pl-3 pb-4 flex-1 space-y-1">
                <h3 className="font-semibold text-2xl pt-2">{dataInfo.productName}</h3>
                <div className="">
                    <p><span className='font-semibold'>Brand Name:</span> {dataInfo.company}</p>
                </div>
                    <h3><span className='font-semibold'>Price:</span> {dataInfo.price}</h3>
                    <h3><span className='font-semibold'>Type:</span> {dataInfo.category}</h3>
                <div>
                    <div>
                        <Rating
                            initialRating={dataInfo.rating}
                            emptySymbol={<AiOutlineStar className='text-2xl'></AiOutlineStar>}
                            fullSymbol={<AiFillStar className='text-2xl'></AiFillStar>}
                            readonly
                        />
                    </div>
                </div>
                <div className='flex justify-between mr-2 md:mr-7'>
                    <Link to={`/productDetails/${dataInfo._id}`}><button className='btn btn-active btn-neutral btn-sm'>details</button></Link>
                    <Link to={`/update/${dataInfo._id}`}><button className='btn btn-active btn-neutral btn-sm'>update</button></Link>
                </div>
            </div>
        </div>
    );
};
ShowProduct.propTypes = {
    dataInfo: PropTypes.object,
};
export default ShowProduct;