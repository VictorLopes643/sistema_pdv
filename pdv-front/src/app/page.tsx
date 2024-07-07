
import { Header } from "@/components/Header";
import MenuProvider from "@/components/MenuContext";
import  { MenuWithProvider }  from "@/components/menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-400 flex flex-col h-screen ">
      <Header/>
      {/* <MenuProvider> */}
        <MenuWithProvider />
      {/* </MenuProvider> */}
        {/* <Content /> */}
      </div>
  );
}
