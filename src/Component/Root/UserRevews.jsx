import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import PropTypes from 'prop-types';
import { DarkContext } from "./Root";
import { useContext } from "react";

const UserRevews = ({ review }) => {
    const {isDarkMode} = useContext(DarkContext);
    const { reviews, user_img, rating, name, user_profession} = review || {};

    return (

        <article className={`border p-3  ${isDarkMode ? '' : 'bg-slate-50'} rounded`}>
            <div>
                <div className="flex items-center mb-4 space-x-4">
                    <img className="w-12 h-12 rounded-full object-cover" src={user_img} alt="" />
                    <div className="font-medium dark:text-white">
                        <p>{name}</p>
                        <p>{user_profession}</p>
                    </div>
                </div>
                <Rating
                    initialRating={rating}
                    emptySymbol={<AiOutlineStar className='text-xl'></AiOutlineStar>}
                    fullSymbol={<AiFillStar className='text-xl'></AiFillStar>}
                    readonly
                />
            </div>
            <div>
                <p>{reviews}</p>
            </div>


        </article>

    );
};
UserRevews.propTypes = {
    review: PropTypes.object,
}
export default UserRevews;