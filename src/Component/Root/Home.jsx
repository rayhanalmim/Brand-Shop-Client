import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>

            <div className="w-11/12 mx-auto">
                <div className="bg-[url('https://i.ibb.co/s1mRmwP/Pngtree-5g-smart-phone-technology-banner-930357-1.jpg')] bg-cover bg-center h-full w-full rounded mb-4">
                    <div data-aos="fade-down" className="text-center py-28 space-y-3">
                        <h3 data-aos="fade-right" className="text-white text-3xl font-bold">Renowned Brands, Remarkable Choices</h3>
                        <p data-aos="fade-left" className="text-white font-medium">Your gateway to top tech brands. Explore, shop, and experience excellence in electronics. <br /> Renowned brands, your choice.</p>
                    </div>
                </div>

                <div className="flex bg-slate-100 rounded w-10/12 mx-auto">
                    <button className="btn btn-active btn-secondarybtn-sm md:btn-md  ml-3 my-2 !bg-[#D72050] text-white">Top Brands,Your Way</button>
                    <Marquee className="text-black font-medium">
                        <p className="pr-7">Apple</p>
                        <p className="pr-7">Samsung</p>
                        <p className="pr-7">Google</p>
                        <p className="pr-7">Microsoft</p>
                        <p className="pr-7">Sony</p>
                        <p className="pr-7">LG</p>
                        <p className="pr-7">Huawei</p>
                        <p className="pr-7">Dell</p>
                        <p className="pr-7">Lenovo</p>
                        <p className="pr-7">HP (Hewlett-Packard)</p>
                        <p className="pr-7">Harman Kardon</p>
                        <p className="pr-7">Logitech</p>
                        <p className="pr-7">Philips</p>
                        <p className="pr-7">Asus</p>
                    </Marquee>
                </div>
            </div>
            {/* ---------------footer-------------- */}
        </div>
    );
};

export default Home;