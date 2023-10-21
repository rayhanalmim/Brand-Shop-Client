import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkContext } from '../Component/Root/Root';

const ShowBrand = ({ brand }) => {

    const {isDarkMode} = useContext(DarkContext);

    const { brandName, imageURL } = brand;

    return (
        <div>
            <Link to={`/brand/${brandName}`}>
                <div className={`${isDarkMode ? '' : 'bg-base-100'} p-5 px-8 card shadow-xl md:px-12 lg:px-12 xl:px-8  cursor-pointer text-2xl hover:text-rose-800`}>
                    <figure><img className='object-cover h-28 rounded-full w-28' src={imageURL} alt="Shoes" /></figure>
                    <div className="">
                        <div className='flex justify-center items-center'>
                            <h2 className="font-bold ">{brandName}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
ShowBrand.propTypes = {
    brand: PropTypes.object,
};
export default ShowBrand;