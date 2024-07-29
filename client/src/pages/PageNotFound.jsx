import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom"

export default function PageNotFound(){
    return(
        <Layout title={'404..Page Not Found'}>
            <div className="flex justify-center items-center flex-col h-96">
            <h1 className="text-6xl text-slate-600">404</h1>
            <h1 className="text-4xl text-slate-600">Oops...Page Not Found</h1>
            <Link className="text-3xl text-slate-600 m-2 border-2 p-2 rounded-sm">Back To Home</Link>
            </div>
            
        </Layout>
    )
}