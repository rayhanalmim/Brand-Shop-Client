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
                <div className={`${isDarkMode ? '' : 'bg-base-100'} card w-96 shadow-xl cursor-pointer text-3xl hover:text-rose-800`}>
                    <figure><img className='h-48 object-cover w-full' src={imageURL} alt="Shoes" /></figure>
                    <div className="card-body">
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