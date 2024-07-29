import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { toast } from 'react-toastify'; // then this

const Login = () => {

    const apiurl = import.meta.env.VITE_API_URL;

    const [auth,setAuth] = useAuth()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(`${apiurl}/api/v1/auth/login`,
                {email,password}
            );
            if(res.data.success){
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate('/')
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
    <Layout title={"Login"}>
      <div
        className="flex justify-center items-center flex-col bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://queue-it.com/media/fk0l0y5l/product-drop-marketing.jpeg)",
        }}
      >
        <h1 className="md:text-2xl m-4 text-center">
          Welcome Back.. Login Now
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
              <label htmlFor="password" className="block font-bold">
                Password:
              </label>
              <input
                type="text"
                name="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two"
                required
              />
            </div>
            <h2 className="m-6 underline hover:text-skinn-two hover:cursor-pointer" onClick={()=> navigate('/forgot-password')}>Forgot Password</h2>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-skinn-two text-white font-bold text-center rounded w-1/2 m-auto">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
