import Layout from "../components/Layout/Layout";

export default function About(){
    return(
        <Layout title={'About Us - EcommExpress'}>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img 
                        src="https://c2227cea.rocketcdn.me/wp-content/uploads/2023/03/ecommerce-contact-center-software-hodusoft-2feb23.jpg.webp" 
                        alt="Contact Us" 
                        className="w-full h-auto"
                    />
                </div>
                <div className="md:w-1/2 flex items-center justify-center p-4">
                    <div>
                    <h1 className="md:text-4xl text-2xl mb-4">About EcommExpress</h1>
                    <p className="text-lg mb-2">
                        Welcome to EcommExpress, your one-stop solution for all product
                        purchases ranging from groceries, fashion, electronics, books and much 
                        more.

                        Founded in 2020, we have come a long way extending our reach to 25 states
                        of India. We are committed to providing quality products to our customers
                        at affordable rates and delivering to them without delays.
                    </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}