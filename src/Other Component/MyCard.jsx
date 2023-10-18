import { useLoaderData } from "react-router-dom";
import ShowCard from "./ShowCard";

const MyCard = () => {
    const cardData = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    cardData.map(card => <ShowCard key={card._id} card={card}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default MyCard;