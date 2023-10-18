import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";

const BrandDetails = () => {
    const data = useLoaderData();
    const { name } = useParams();
    const [advinig, setAdvisig] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/advisig/${name}`)
            .then(res => res.json())
            .then(result => setAdvisig(result))
    }, []);


    return (
        <div className="">
            <div className="">
                {
                    data.length ? <div className="">
                        <div className="mx-4 md:mx-14">
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
                        <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto">
                            {
                                data.map(dataInfo => <ShowProduct key={dataInfo._id} dataInfo={dataInfo}></ShowProduct>)
                            }
                        </div>
                    </div> : <div className="text-center">
                        <div className="flex justify-center">
                            <img className="w-2/5" src="https://i.ibb.co/p0zvNR2/Pngtree-not-found-5408094.png" alt="" />
                        </div>
                        <h3 className="text-2xl -mt-20 font-semibold">No data avalable in this section</h3>
                    </div>
                }
            </div>
        </div>
    );
};

export default BrandDetails;