import { useState } from "react"
import {NavLink} from 'react-router-dom'
import { useAuth } from "../../context/auth";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { toast } from 'react-toastify'; // then this

export default function Header(){

    const [auth,setAuth] = useAuth();

    const [isMenuOpen,setMenuOpen] = useState(false);

    const togglemenu = ()=>{
        setMenuOpen(!isMenuOpen);
    }

    const handlelogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        toast.success("Logged out successfully.. See You Again")
    }

    return (
        <nav className="p-4 bg-skinn">
            <div className="flex items-center justify-between">
                <div>
                {/* <img src="/shopping-cart.png" alt="ecom-icon" className="w-6 h-6 inline mb-2 mr-2 "/> */}
                <span className="text-2xl font-bold">Quadiro Tech</span>
                </div>
                

                <div className="md:hidden">
                    <img src="/menu.png" alt="menu" className="w-6 h-6 cursor-pointer" onClick={togglemenu}/>
                </div>

                <ul className="hidden md:flex space-x-12">
                    <li><NavLink to='/' href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Home</NavLink></li>
                    {/* <li><NavLink to='/category' href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Category</NavLink></li> */}
                    {/* <li><NavLink to='/register' href="#" className="hover:bg-black hover:text-white p-2 rounded-sm">Register</NavLink></li>
                    <li><NavLink to='/login' href="#" className="hover:bg-black hover:text-white p-2 rounded-sm">Login</NavLink></li> */}
                    {
                        !auth.user ? (<>
                        <li><NavLink to='/register' href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Register</NavLink></li>
                    <li><NavLink to='/login' href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Login</NavLink></li>
                        </>) : (<>
                            <li onClick={()=>console.log(auth.user)}><NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}
                             href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Dashboard</NavLink></li>
                            <li><NavLink onClick={handlelogout} to='/login' href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Logout</NavLink></li>

                        </>)
                    }
                    {/* <li><NavLink to='/cart' href="#" className="hover:bg-skinn-two hover:text-white p-2 rounded-sm">Cart [0]</NavLink></li> */}
                </ul>
            </div>
            {isMenuOpen ? 
            <ul className="flex-col md:hidden space-y-3 ml-1 mt-2">
            <li><NavLink to='/' href="#">Home</NavLink></li>
            {/* <li><NavLink to='/register' href="#">Register</NavLink></li>
            <li><NavLink to='/login' href="#">Login</NavLink></li> */}
            {
                !auth.user ? (<>
                <li><NavLink to='/register' href="#">Register</NavLink></li>
            <li><NavLink to='/login' href="#">Login</NavLink></li>
                </>) : (<>
                    <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}
                             href="#">Dashboard</NavLink></li>
                    <li><NavLink onClick={handlelogout} to='/login' href="#">Logout</NavLink></li>
                </>)
            }
            {/* <li><NavLink to='/cart' href="#">Cart [0]</NavLink></li> */}
        </ul> : null}
        </nav>
    )
}