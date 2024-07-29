import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import "react-toastify/dist/ReactToastify.css"; // import first
import { toast } from "react-toastify"; // then this
import axios from "axios";
import AdminInfo from "../../components/Layout/AdminInfo"
import ProductCard from "./productCard";


const AdminDashboard = () => {

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
    <Layout title="Admin Dashboard - EcomExpress">
      <h2 className="m-2 text-center text-2xl">Admin Dashboard</h2>
      <AdminInfo></AdminInfo>
      {/*
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* <div>
          <AdminMenu />
        </div>
      </div>
      */}
      <ProductCard products={products}></ProductCard>


      
      
    </Layout>
    
  )
}
export default AdminDashboard