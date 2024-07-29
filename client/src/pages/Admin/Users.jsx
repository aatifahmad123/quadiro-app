import Layout from "../../components/Layout/Layout"
import AdminMenu from "../../components/Layout/AdminMenu"

const Users = () => {
  return (
    <div>
        <Layout title="Admin -  New Category">
      <h2 className="m-2 text-center text-2xl">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div>
          <AdminMenu />
        </div>
      </div>
    </Layout>
        
    </div>
  )
}
export default Users