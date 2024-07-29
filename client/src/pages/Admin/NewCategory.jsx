import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import "react-toastify/dist/ReactToastify.css"; // import first
import { toast } from "react-toastify"; // then this
import axios from "axios";

const NewCategory = () => {
  const apiurl = import.meta.env.VITE_API_URL;

  const [categories, setCategories] = useState();

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${apiurl}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops.. Something went wrong!");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <Layout title="Admin -  New Category">
        <h2 className="m-2 text-center text-2xl">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div>
            <AdminMenu />
          </div>
          <div>
          <div className="relative flex flex-col shadow-md rounded-xl bg-clip-border m-4">
      <table className="min-w-full bg-white rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-skinn">
            <th className="p-3 text-left text-sm">
              Serial Number
            </th>
            <th className="p-3 text-left text-sm">
              Category Name
            </th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <tr
              key={category._id}
              className="transition-all hover:bg-skinn-two hover:bg-opacity-80"
            >
              <td className="p-3 text-sm font-medium">
                {index + 1}
              </td>
              <td className="p-3 text-sm font-medium">
                {category.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default NewCategory;
