"use client";

import style from "@/styles/layout/crm.module.scss"
import Footer from "@/components/structure/footer";
import Header from "@/components/structure/header";
import Sidebar from "@/components/structure/sidebar/sidebar";
import { ReactNode, useState } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
      <div className={style.wrapper}>
        <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={style.main}>
          {children}
        </main>
        <Footer/>
      </div>
  );
}