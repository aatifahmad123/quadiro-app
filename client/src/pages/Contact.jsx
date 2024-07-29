import Layout from "../components/Layout/Layout";

export default function Contact(){
    return(
        <Layout title={'Contact Us - EcommExpress'}>
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
                        <h1 className="md:text-4xl text-2xl mb-4">Contact Us</h1>
                        <p className="text-lg mb-2">Email (Pri): b22ai002@iitj.ac.in</p>
                        <p className="text-lg mb-2">Email (Sec): ahmadaatif6@gmail.com</p>
                        <p className="text-lg mb-2">Phone: +91-6207392585</p>
                        <p className="text-lg mb-2">Address: Gulmohar,IIT Jodhpur,Jodhpur,Rajasthan,342030</p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}