import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const company = form.company.value;
        const price = form.price.value;
        const photoUrl = form.url.value;
        const rating = form.number.value;

        const data = { productName, category, company, price, photoUrl, rating };

        console.log(data)
        fetch(`https://tech-and-electronic-server-kepsshe3n-rayhan-al-mims-projects.vercel.app/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire(
                        'Congratulation!',
                        'Product updated successfully!',
                        'success'
                    )
                    form.productName.value = '';
                    form.category.value = '';
                    form.company.value = '';
                    form.price.value = '';
                    form.url.value = '';
                    form.number.value = '';
                }
            })
    }

    return (
        <div className="mx-auto w-11/12 pb-5 md:pb-[40vh]">
            <h3 className=" text-center font-bold text-3xl">Update {product.productName}</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mt-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Product name</label>
                        <input defaultValue={product.productName} name='productName' type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Category</label>
                        <input defaultValue={product.category} type="text" name='category' id="last_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Company</label>
                        <input defaultValue={product.company} type="text" name='company' id="company" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Price</label>
                        <input defaultValue={product.price} type="number" id="price" name='price' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$Price" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Product photo URL</label>
                        <input defaultValue={product.photoUrl} type="url" name='url' id="website" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photoUrl" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Avalable quantity</label>
                        <input defaultValue={product.rating} type="number" name='number' id="rating" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rating" required />
                    </div>
                </div>
                <button type="submit" className="bg-gray-600 hover:bg-gray-900 border text-white text-lg font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com">Update</button>

                {/* <button type="submit" className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
            </form>
        </div>
    );
};

export default UpdateProduct;