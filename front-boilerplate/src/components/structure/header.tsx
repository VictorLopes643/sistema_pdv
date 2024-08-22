import style from "@/styles/modules/crm/components/header.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({
  isSidebarOpen,
  setSidebarOpen,
}: HeaderProps): JSX.Element => {
  return (
    <header className={style.header}>
      <div title={"Open menu"}>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setSidebarOpen(!isSidebarOpen);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
