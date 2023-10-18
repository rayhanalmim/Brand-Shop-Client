import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

const BrandDetails = () => {
    const data = useLoaderData();
    const { name } = useParams();
    console.log(name);
    const [advinig, setAdvisig] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/advisig/${name}`)
            .then(res => res.json())
            .then(result => setAdvisig(result))
    }, []);


    return (
        <div>
            <div>
                {
                    data.length ? <div>
                        <div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    advinig.map(add => <SwiperSlide key={add._id}>
{/* 
                                        <img src={add.img} alt="" /> */}

                                        <div style={{
                                            backgroundImage: `url(${add.img})`,
                                        }} className="bg-cover  inset-0 bg-black bg-opacity-50 bg-blend-multiply bg-center h-full w-full rounded mb-4">
                                            <div data-aos="fade-down" className="text-center py-28 space-y-3">
                                                <h3 className="text-white text-3xl font-bold">{add.title}</h3>
                                                <div className="w-2/3 flex justify-items-center mx-auto items-center">
                                                <p className="text-white font-medium">{add.discription}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                        <h3>details comming soon: {data.length}</h3>
                    </div> : 'No data found'
                }
            </div>
        </div>
    );
};

export default BrandDetails;