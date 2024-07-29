import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import UserInfo from "../../components/Layout/UserInfo"
import "react-toastify/dist/ReactToastify.css"; // import first
import { toast } from "react-toastify"; // then this
import axios from "axios";
import {useState, useEffect} from 'react';
import ProductCard from "./ProductCard";

const Dashboard = () => {

  const apiurl = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${apiurl}/api/v1/product/get-product`
      );
      if (data.success) {
        setProducts(data.products)
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops.. Something went wrong!");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);


  return (
    <Layout title="User Dashboard - EcomExpress">
      <h2 className="m-2 text-center text-2xl">User Dashboard</h2>
      <UserInfo />
      <ProductCard products={products}></ProductCard>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* <div>
          <UserMenu />
        </div> */}
        <div>
          
        </div>

      </div>
    </Layout>
    
  )
}
export default Dashboard