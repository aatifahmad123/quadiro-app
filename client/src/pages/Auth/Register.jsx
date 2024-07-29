import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { toast } from 'react-toastify'; // then this

const Register = () => {

    const apiurl = import.meta.env.VITE_API_URL;

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(`${apiurl}/api/v1/auth/register`,
                {name,email,password,phone,address,answer}
            );
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/login')
            }
            else{
                toast.info(res.data.message)
                if(res.data.message == 'User already registered... Please Login'){
                    navigate('/login');
                }
            }
        }
        catch(error){
            console.log(error);
            toast.error('Oops.. Something went wrong!')
        }
    }

  return (
    <Layout title={"Register"}>
      <div
        className="flex justify-center items-center flex-col bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://queue-it.com/media/fk0l0y5l/product-drop-marketing.jpeg)",
        }}
      >
        <h1 className="md:text-2xl m-4 text-center">
          New to Quadiro Tech.. Register Now
        </h1>

        <div className="max-w-xl p-2 bg-skinn rounded shadow-xl m-4 md:w-1/2 w-4/5 bg-opacity-50">
          <form onSubmit={handleSubmit}>
            <div className="m-6">
              <label htmlFor="name" className="block font-bold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two :ring-indigo-600"
                required
              />
            </div>
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
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two :ring-indigo-600"
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
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two :ring-indigo-600"
                required
              />
            </div>
            <div className="m-6">
              <label htmlFor="phone" className="block font-bold">
                Phone [+91] :
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                placeholder="xxxxxxxxxx"
                onChange={(e)=>setPhone(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two :ring-indigo-600"
                required
              />
            </div>
            <div className="m-6">
              <label htmlFor="address" className="block font-bold">
                Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                placeholder="Area,City,State"
                onChange={(e)=>setAddress(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two :ring-indigo-600"
                required
              />
            </div>
            <div className="m-6">
              <label htmlFor="address" className="block font-bold">
                Security Question : What is your pet's name?
              </label>
              <input
                type="text"
                name="answer"
                id="answer"
                value={answer}
                placeholder="Your Pet's Name"
                onChange={(e)=>setAnswer(e.target.value)}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-skinn-two :ring-indigo-600"
                required
              />
            </div>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-skinn-two text-white font-bold text-center rounded w-1/2 m-auto">
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Register;
