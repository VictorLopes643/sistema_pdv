import style from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import {
  faChevronDown,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
import FunctionalityItem from "@/components/structure/sidebar/components/functionalities/components/item";

const SidebarFooter = (): JSX.Element => {
  const [isUserOptionsVisible, setUserOptionsVisible] =
    useState<boolean>(false);

  const toggleOptions = () => {
    setUserOptionsVisible(!isUserOptionsVisible);

    if (!isUserOptionsVisible) {
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      var container = document.getElementById("sidebar");

      if (container) container.scrollTop = container.scrollHeight;
    }, 50);
  };

  return (
    <footer className={isUserOptionsVisible ? "" : style.optionsCollapsed}>
      <div className={style.imageText} onClick={toggleOptions}>
        <span className={style.image}>
          <Image src={"/Zuko.webp"} alt={"user img"} width={40} height={40} />
        </span>

        <div className={`${style.text} ${style.logoText}`}>
          <span className={style.name}>Username</span>
          <span className={style.profession}>Web developer</span>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className={style.userDropdown} />
      </div>
      <div className={style.userOptionsList}>
        <FunctionalityItem
          href="/user/settings"
          icon={faGear}
          title={"Settings"}
          itemName="Settings"
        />
        <FunctionalityItem
          href="#"
          icon={faRightFromBracket}
          title={"Logout"}
          itemName="Logout"
        />
      </div>
    </footer>
  );
};

export default SidebarFooter;
