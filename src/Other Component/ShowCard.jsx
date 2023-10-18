import PropTypes from 'prop-types';

const ShowCard = ({card}) => {

    return (
        <div>
            <div className="flex border rounded bg-slate-50">
                <div className="w-1/2">
                    <img className="rounded-l h-full object-cover" src={card.photoUrl} alt="" />
                </div>
                <div className="pl-3 flex-1 space-y-1 flex flex-col justify-between pb-5">
                    <div>
                        <h3 className="font-semibold pb-1 text-2xl pt-2">{card.productName}</h3>
                        <div className="space-y-1">
                            <p><span className='font-semibold'>Company:</span> {card.company}</p>
                            <p><span className='font-semibold'>Price:</span> {card.price}</p>
                        </div>
                    </div>
                    <button className="btn btn-warning mr-6">Remove</button>
                </div>
            </div>
        </div>
    );
};
ShowCard.propTypes = {
    card: PropTypes.object,
};

export default ShowCard;