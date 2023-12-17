import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import useRoutes from "../../../hooks/useRoutes";
import { TiTimes } from "react-icons/ti";
import { BsFillDoorOpenFill } from "react-icons/bs";
import useStore from "../../../store";
const Sidebar = ({ setShowNav }) => {
  const routes = useRoutes();
  const { setAuth } = useStore();
  const handleLogout = () => {
    setAuth(null);
  };
  return (
    <aside className="fixed z-40 top-0 flex flex-col justify-between h-screen  bg-purple-200 transition duration-300 xl:w-64 w-60">
      <div className="w-full flex p-2 justify-end text-white absolute">
        <button
          onClick={() => {
            setShowNav(false);
          }}
        >
          <TiTimes size={30} />
        </button>
      </div>
      <Link to={"/"} className="flex justify-center items-center px-5 ">
        <div className="flex flex-col text-center text-3xl font-bold gap-2 pt-5 pb-3 bg-purple-200 mb-8 text-white w-full border-b-2 border-b-white">
          <p className="text-gray-700">SALON</p>
          <p>ANNISA</p>
          <p>MUSLIMAH</p>
        </div>
      </Link>
      <div className="flex flex-col h-full justify-between overflow-y-auto overflow-x-hidden blue-scroll">
        <div className="flex flex-col">
          {routes[0]?.top?.map((item) => (
            <SidebarItem
              key={item.mainLabel}
              mainLabel={item.mainLabel}
              items={item.items}
            />
          ))}
        </div>
        <div>
          <button
            onClick={handleLogout}
            className={`pl-6 py-3 mx-5 rounded-md text-center cursor-pointer mb-3 flex items-center transition-colors md:text-base text-sm `}
          >
            <BsFillDoorOpenFill className="h-5 w-5 shrink-0 mr-2" />
            <div>
              <p>Keluar</p>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
