import style from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import SidebarHeader from "@/components/structure/sidebar/components/header";
import SidebarFunctionalities from "@/components/structure/sidebar/components/functionalities/functionalities";
import SidebarFooter from "@/components/structure/sidebar/components/footer";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
}: SidebarProps): JSX.Element => {
  return (
    <aside className={style.aside}>
      <nav
        id={"sidebar"}
        className={`${style.sidebar} ${!isSidebarOpen ? style.close : ""}`}
      >
        <SidebarHeader setSidebarOpen={setSidebarOpen} />
        <SidebarFunctionalities setSidebarOpen={setSidebarOpen} />
        <SidebarFooter />
      </nav>
    </aside>
  );
};

export default Sidebar;
