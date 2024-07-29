import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="relative flex flex-col shadow-md rounded-xl bg-clip-border m-4">
        <div className="flex flex-col gap-1 p-2 bg-skinn rounded-xl">
            <div
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              Order 1
            </div>
            <div
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              Order 2
            </div>
            <div
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              Order 3
            </div>
        </div>
      </div>
    </>
  );
};
export default UserMenu;
