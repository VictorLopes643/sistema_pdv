'use client'
import { RightCircleOutlined } from "@ant-design/icons";
import { MdShoppingCartCheckout } from "react-icons/md";
import { PiPicnicTable } from "react-icons/pi";
import MenuProvider, { useMenu } from "../MenuContext";
import { IoClose } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useDimensions } from "./use-dimensions";
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col w-full items-center justify-center space-y-2"
    >
      <MenuItem text="Home" icon={<AiOutlineHome size={30} />} />
      <MenuItem text="PDV" icon={<MdShoppingCartCheckout size={30} />} />
      <MenuItem text="Mesas" icon={<PiPicnicTable size={30} />} />
    </motion.div>
  );
};
const MenuItem = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  const { isOpen } = useMenu();
  return (
    <motion.a
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      href="/"
      className="p-4 text-gray-800 hover:bg-gray-200 w-full flex text-center justify-center"
      title={text}
    >
      {icon}
      {isOpen &&
      <div className="px-4 h-full flex items-center w-full">
        {text}
      </div>
      }
    </motion.a>
  );
};
 function Menu() {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { isOpen, toggleMenu } = useMenu();
  return (
    <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    // custom={height}
    ref={containerRef}
  >
      <div className={`flex flex-col h-full bg-white rounded-r-3xl ${isOpen ? 'w-96' : 'w-24'}`}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4">
            {isOpen ? (
              <MenuHeader/>
            ) : (
              <div className="flex flex-row w-full items-center justify-center">
               <motion.button
                onClick={() => toggleMenu()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RightCircleOutlined style={{ fontSize: "24px" }} className="hover:bg-gray-100 hover:text-blue-500" />
              </motion.button>
              </div>
            )}
          </div>
          <div className="w-full p-2">
            <div className="h-[0.2px] w-full bg-gray-300" />
          </div>
            <MenuContent />
        </div>
      </div>
      </motion.nav>
  );
}
export function MenuWithProvider() {
  return (
    <MenuProvider>
      <Menu />
    </MenuProvider>
  );
}
