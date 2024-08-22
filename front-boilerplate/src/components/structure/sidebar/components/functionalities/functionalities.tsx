"use client";

import style from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBoxesStacked,
  faHomeAlt,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FunctionalityItem from "@/components/structure/sidebar/components/functionalities/components/item";
import FunctionalityGroup from "@/components/structure/sidebar/components/functionalities/components/group-item";
import { useTheme } from "next-themes";
import { capitalize } from "lodash";
import { getCurrentTheme } from "@/utils/functions";

interface SidebarFunctionalitiesProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarFunctionalities = ({
  setSidebarOpen,
}: SidebarFunctionalitiesProps) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = getCurrentTheme(theme, systemTheme) || 'light';
  const [modeText, setModeText] = useState<'Light Mode' | 'Dark Mode'>('Light Mode')
  
  useEffect(() => {
    setModeText(`${capitalize(currentTheme) as 'Dark' | 'Light'} Mode`);
  }, [systemTheme, currentTheme])

  return (
    <div className={style.menuBar}>
      <div className={style.menu}>
        <li id={"search-box"} className={style.searchBox}>
          <FontAwesomeIcon
            className={style.icon}
            icon={faSearch}
            onClick={() => {
              setSidebarOpen(false);
            }}
          />
          <input type="text" placeholder="Search feature..." />
        </li>

        <ul className={style.menuLinks}>
          <FunctionalityItem
            title={"Home"}
            href="/"
            icon={faHomeAlt}
            itemName="Home"
          />
          <FunctionalityGroup
            icon={faBoxesStacked}
            groupName="Stock Management"
            title="Stock Management"
          >
            <FunctionalityItem
              href="/stock-management/intake"
              icon={faArrowRightToBracket}
              itemName="Intake"
              title={"Stock Management Intake"}
            />
            <FunctionalityItem
              href="/stock-management/outflow"
              icon={faArrowRightFromBracket}
              itemName="Outflow"
              title="Stock Management Outflow"
            />
          </FunctionalityGroup>
        </ul>
      </div>

      <div className={style.bottomContent}>
        <li className={style.mode}>
          <div className={style.sunMoon}>
            <FontAwesomeIcon
              className={`${style.icon} ${style.moon}`}
              icon={faMoon}
            />
            <FontAwesomeIcon
              className={`${style.icon} ${style.sun}`}
              icon={faSun}
            />
          </div>
          <span
            id={"mode-text"}
            title={modeText}
            className={`${style.modeText} ${style.text}`}
          >
            {modeText}
          </span>

          <div id={"toggle-switch"} className={style.toggleSwitch}>
            <span
              className={style.switch}
              onClick={() => {
                setTheme(theme == 'dark' ? 'light' : 'dark');
              }}
            ></span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default SidebarFunctionalities;
