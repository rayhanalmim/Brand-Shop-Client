import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import ShowBrand from "../../Other Component/ShowBrand";
import { useEffect } from "react";
import { useState } from "react";
import UserRevews from "./UserRevews";


const Home = () => {
    const brandInfo = useLoaderData();
    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/review')
            .then(res => res.json())
            .then(result => setUserReview(result))
    }, []);

    console.log(userReview)


    return (
        <div >

            <div className="w-11/12 mx-auto">
                <div className="bg-[url('https://i.ibb.co/s1mRmwP/Pngtree-5g-smart-phone-technology-banner-930357-1.jpg')] bg-cover bg-center h-full w-full rounded mb-4">
                    <div data-aos="fade-down" className="text-center py-28 space-y-3">
                        <h3 data-aos="fade-right" className="text-white text-3xl font-bold">Renowned Brands, Remarkable Choices</h3>
                        <p data-aos="fade-left" className="text-white font-medium">Your gateway to top tech brands. Explore, shop, and experience excellence in electronics. <br /> Renowned brands, your choice.</p>
                    </div>
                </div>


                <div className="flex bg-slate-100 rounded w-11/12 mx-auto">
                    <button className="btn btn-active btn-secondarybtn-sm md:btn-md  ml-3 my-2 !bg-[#D72050] text-white">Our Brands</button>
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

                <div className="pt-5 pb-2 text-center">
                    <h3 className="font-bold text-2xl md:text-3xl">Premium Brand Collection</h3>
                </div>
                <div className="pb-4 px-1 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center xl:grid-cols-6 gap-4 mt-4 justify-items-center items-center">

                    {
                        brandInfo.map(brand => <ShowBrand key={brand.id} brand={brand}></ShowBrand>)
                    }
                </div>

            </div>

            <div className="pt-10">
                <h3 className="text-center font-bold text-3xl">Trusted By Thousands client</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-7 w-11/12 mx-auto">
                    {
                        userReview.map(review => <UserRevews review={review} key={review.id}></UserRevews>)
                    }
                </div>
            </div>

            <div className="w-11/12 mx-auto pb-5 space-y-1">
                <h3 className="text-2xl font-medium">Get more updates...</h3>
                <p>Do you want to get notified when we added something new? Sign up for our newsletter and youll be among the first to find out about new services, updated and more.</p>
                <div className="flex gap-4 pt-1">
                    <div className="">
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email Address" required />
                    </div>
                    <button className="bg-blue-800 px-4 rounded-lg text-white">Subscribe</button>
                </div>
            </div>

            {/* ---------------footer-------------- */}
            <footer className="footer mt-6 p-10 bg-neutral text-neutral-content">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>Tech Industries Ltd.<br />Providing reliable services since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Home;