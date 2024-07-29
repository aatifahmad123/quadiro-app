import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

export default function HomePage(){

    const [auth,setAuth] = useAuth();

    return(
        // <Layout>
        //     <h1 className="text-3xl text-black">Home</h1>
        //     <pre>
        //         {JSON.stringify(auth,null,4)}
        //     </pre>
        // </Layout>
        <Layout>
            {/* <h1 className="text-3xl text-black">Home</h1>
            <pre>
                {JSON.stringify(auth,null,4)}
            </pre> */}
            <div
        className="flex justify-center items-center flex-col bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://queue-it.com/media/fk0l0y5l/product-drop-marketing.jpeg)",
        }}
      >
        <h1 className="md:text-2xl m-4 text-center bg-skinn bg-opacity-50 p-4 rounded-sm animate-pulse">
          Welcome to Quadiro Technologies..
          New users kindly register first.. 
          Existing users may login now..
        </h1>
        </div>
        </Layout>
    )
}