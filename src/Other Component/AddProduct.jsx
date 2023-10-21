import Swal from "sweetalert2";

const AddProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const company = form.company.value;
        const price = form.price.value;
        const photoUrl = form.url.value;
        const rating = form.number.value;
        const productDetails = form.about.value;

        const data = { productName, category, company, price, photoUrl, rating, productDetails };

        console.log(data)
        fetch('https://tech-and-electronic-server-h2b6gqyhd-rayhan-al-mims-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    Swal.fire(
                        'Congratulation!',
                        'Product added successfully!',
                        'success'
                    )
                    form.reset();
                }
            })
    }

    return (
        <div className="w-11/12 mx-auto pb-4 md:pb-[20vh]">
            <h3 className=" text-center font-bold text-3xl">Add Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mt-4 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Product name</label>
                        <input name='productName' type="text" id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Type of product</label>
                        <input type="text" name='category' id="last_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Brand Name</label>
                        <input type="text" name='company' id="company" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Price</label>
                        <input type="number" id="price" name='price' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$Price" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Product photo URL</label>
                        <input type="url" name='url' id="website" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photoUrl" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Rating</label>
                        <input type="number" name='number' step="any" id="rating" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">About product</label>
                    <input type="text" id="text" name="about" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="details" required />
                </div>
                <button type="submit" className="bg-gray-600 hover:bg-gray-900 border text-white text-lg font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com">Add</button>

            </form>
        </div>
    );
};

export default AddProduct;