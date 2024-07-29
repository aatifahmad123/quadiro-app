import { useAuth } from "../../context/auth";

const UserInfo = () => {

    const [auth,setAuth] = useAuth();

  return (
    <>
      <div className="relative flex flex-col shadow-md rounded-xl bg-clip-border m-4">
        <div className="flex flex-col gap-1 p-2 bg-skinn rounded-xl">
            <div
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              User : {auth?.user?.name}
            </div>
            <div
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              Email : {auth?.user?.email}
            </div>
            <div
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-skinn-two hover:bg-opacity-80 hover:text-white"
            >
              Phone : {auth?.user?.phone}
            </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
