import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { toast } from 'react-toastify'; // then this

const ForgotPassword = () => {

    const apiurl = import.meta.env.VITE_API_URL;

    const [email,setEmail] = useState("");
    const [answer,setAnswer] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(`${apiurl}/api/v1/auth/forgot-password`,
                {email,answer,newPassword}
            );
            if(res.data.success){
                toast.success(res.data.message);
                navigate('/login')
            }
            else{
                toast.error(res.data.message);
            }
        }
        catch(error){
            console.log(error);
            toast.error('Oops.. Something went wrong!');
        }
    }

  return (
    <Layout title="Forgot-Passowrd">
        <div
        className="flex justify-center items-center flex-col bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://queue-it.com/media/fk0l0y5l/product-drop-marketing.jpeg)",
        }}
      >
        <h1 className="md:text-2xl m-4 text-center">
          Forgot your password... Set a new one now
        </h1>

        <div className="max-w-xl p-2 bg-skinn rounded shadow-xl m-4 md:w-1/2 w-4/5 bg-opacity-50">
          <form onSubmit={handleSubmit}>
            <div className="m-6">
              <label htmlFor="email" className="block font-bold">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="@email"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two"
                required
              />
            </div>
            <div className="m-6">
              <label htmlFor="answer" className="block font-bold">
              Security Question : What is your pet's name?
              </label>
              <input
                type="text"
                name="answer"
                id="answer"
                value={answer}
                placeholder="Your Pet's Name"
                onChange={(e)=>setAnswer(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two"
                required
              />
            </div>
            <div className="m-6">
              <label htmlFor="newPassword" className="block font-bold">
                Password:
              </label>
              <input
                type="text"
                name="newPassword"
                id="newPassword"
                value={newPassword}
                placeholder="New Password"
                onChange={(e)=>setNewPassword(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two"
                required
              />
            </div>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-skinn-two text-white font-bold text-center rounded w-1/2 m-auto">
              Reset
            </button>
          </form>
        </div>
      </div>
    </Layout>
    
  )
}
export default ForgotPassword