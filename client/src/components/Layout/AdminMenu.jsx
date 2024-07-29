import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="relative flex flex-col shadow-md rounded-xl bg-clip-border m-4">
        <div className="flex flex-col gap-1 p-2 bg-skinn rounded-xl">
          <NavLink
            to={"/dashboard/admin/users"}
            href="#"
            className="text-initial"
          >
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              Users
            </div>
          </NavLink>
          <NavLink
            to={"/dashboard/admin/new-category"}
            href="#"
            className="text-initial"
          >
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              New Category
            </div>
          </NavLink>
          <NavLink
            to={"/dashboard/admin/new-product"}
            href="#"
            className="text-initial"
          >
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              New Product
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default AdminMenu;
