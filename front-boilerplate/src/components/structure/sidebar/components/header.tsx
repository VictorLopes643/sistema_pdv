"use client";

import style from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import Image from "next/image";
import { getCurrentTheme, isDarkMode, toggleSidebar } from "@/utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SidebarHeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarHeader = ({ setSidebarOpen }: SidebarHeaderProps) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = getCurrentTheme(theme, systemTheme);
  const [businessImageSrc, setBusinessImageSrc] = useState<string>(`/assets/simbolo.svg`)

  useEffect(() => {
    setBusinessImageSrc(`/assets/simbolo${isDarkMode(currentTheme) ? "_white" : ""}.svg`);
  }, [systemTheme, currentTheme]);

  return (
    <div className={style.logo}>
      <Image
        src={businessImageSrc}
        alt={"logo"}
        width={40}
        height={40}
      />
      <div title={"Close menu"}>
        <FontAwesomeIcon
          id={"toggle"}
          icon={faChevronCircleLeft}
          onClick={() => toggleSidebar(setSidebarOpen)}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
