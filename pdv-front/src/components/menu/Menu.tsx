'use client'
import { RightCircleOutlined } from "@ant-design/icons";
import { MdShoppingCartCheckout } from "react-icons/md";
import { PiPicnicTable } from "react-icons/pi";
import MenuProvider, { useMenu } from "../MenuContext";
import { IoClose } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
const MenuHeader = () => {
  const { toggleMenu } = useMenu();
  return (
    <div className="flex justify-between items-center p-4 w-full">
      <p className="text-lg font-semibold text-gray-800">Sistema PDV</p>
      <button
        onClick={toggleMenu}
        className="text-red-500 hover:text-red-600">
          <IoClose size={30}/>
      </button>
  </div>
)}
const MenuContent = () => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center space-y-2"
    >
      <MenuItem text="Home" icon={<AiOutlineHome size={30} />} />
      <MenuItem text="PDV" icon={<MdShoppingCartCheckout size={30} />} />
      <MenuItem text="Mesas" icon={<PiPicnicTable size={30} />} />
    </div>
  );
};
const MenuItem = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  const { isOpen } = useMenu();
  return (
    <a
      className="p-4 text-gray-800 hover:bg-gray-200 w-full flex text-center justify-center"
      title={text}
      href={text}
    >
      {icon}
      {isOpen &&
      <div className="px-4 h-full flex items-center w-full">
        {text}
      </div>
      }
    </a>
  );
};
 function Menu() {
  const { isOpen, toggleMenu } = useMenu();
  return (
      <div className={`flex flex-col h-full bg-zinc-400 rounded-r-3xl ${isOpen ? 'w-96' : 'w-24'}`}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4">
            {isOpen ? (
              <MenuHeader/>
            ) : (
              <div className="flex flex-row w-full items-center justify-center">
               <button
               onClick={toggleMenu}
              >
                <RightCircleOutlined style={{ fontSize: "24px" }} className="hover:bg-gray-100 hover:text-blue-500" />
              </button>
              </div>
            )}
          </div>
          <div className="w-full p-2">
            <div className="h-[0.2px] w-full bg-gray-300" />
          </div>
            <MenuContent />
        </div>
      </div>
  );
}
export function MenuWithProvider() {
  return (
    <MenuProvider>
      <Menu />
    </MenuProvider>
  );
}
