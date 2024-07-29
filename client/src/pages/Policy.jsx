import Layout from "../components/Layout/Layout";

export default function Policy(){
    return(
        <Layout title={'Privacy Policy - EcommExpress'}>
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
                    <h1 className="md:text-4xl text-2xl mb-4">Our Privacy Policy</h1>
                    <ul className="list-disc">
                        <li className="text-lg mb-2">
                        We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                        </li>
                        <li className="text-lg mb-2">
                        We collect various types of information to provide and improve our services. This includes personal identification information such as your name, email address, phone number, and payment details like your credit card information and billing address.
                        </li>
                        <li className="text-lg mb-2">
                        The information we collect is used to process and fulfill your orders, improve our website and services, and send you promotional offers and updates.
                        </li>
                        <li className="text-lg mb-2">
                        We do not sell your personal information to third parties. However, we may share your data with trusted service providers and partners, such as payment processors and shipping companies, to fulfill your orders and improve our services.
                        </li>
                        <li className="text-lg mb-2">
                        Our website uses cookies and other tracking technologies to enhance your browsing experience. These technologies help us improve website functionality, analyze site usage, and personalize your experience. 
                        </li>


                        
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}