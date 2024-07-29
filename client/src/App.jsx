import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Policy from './pages/Policy'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import { ToastContainer } from 'react-toastify'; // then this
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Routes/Private'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminRoute from './components/Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Users from './pages/Admin/Users'
import NewProduct from './pages/Admin/NewProduct'
import NewCategory from './pages/Admin/NewCategory'

function App() {

  return (
    <>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route  path='/' element={<HomePage></HomePage>} ></Route>
        <Route  path='/register' element={<Register></Register>} ></Route>
        {/* <Route path="/dashboard" element={<></>}></Route> */}
          <Route path="/dashboard/user" element={<Dashboard />} />
        
        {/* <Route path="/dashboard" element={<></>}></Route> */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/new-category" element={<NewCategory />} />
          <Route path="/dashboard/admin/new-product" element={<NewProduct />} />
          <Route path="/dashboard/admin/users" element={<Users />} />
        
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route  path='/about' element={<About></About>} ></Route>
        <Route  path='/contact' element={<Contact></Contact>} ></Route>
        <Route  path='/policy' element={<Policy></Policy>} ></Route>
        <Route  path='*' element={<PageNotFound></PageNotFound>} ></Route>
      </Routes>
    </>
  )
}

export default App
