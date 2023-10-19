# https://bejewelled-tarsier-355a2e.netlify.app/

-The front-end of this website has been implemented using React.js and the Tailwind CSS framework. On the backend, Firebase, Express.js, and MongoDB have been used for data storage and server-side operations.
- This website features a user authentication system that allows users to create accounts using their email and password, as well as sign in using their Google credentials.
- This website includes private routes that are only accessible to logged-in users. If a user who isn't signed in attempts to access a private route, they will be redirected to the login page. After successfully logging in, they will be redirected to the initially requested private route.
- Users have the ability to add products to the database. When a product's brand name matches the brand name displayed in the website's UI, it is automatically categorized under the corresponding brand.
-Users have the capability to update product details from within the product details card on the website. They can also add items to their cart and remove them. The 'My Cart' section displays only the items that each user has personally added.
-After logging in, users can view their information in the top right corner, where a button allows them to toggle between 'Log In' and 'Log Out.' Once logged in, this button converts to 'Log Out,' providing users with the option to log out from the website. Additionally, users can switch between light and dark modes using a toggle button.
