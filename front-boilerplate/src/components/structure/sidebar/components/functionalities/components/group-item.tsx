import style from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

interface FunctionalityGroupItemProps {
  icon: IconProp;
  groupName: string;
  children: ReactNode;
  title: string
}

const FunctionalityGroup = ({
  children,
  icon,
  groupName,
  title
}: FunctionalityGroupItemProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <li
      id={`functionality_${groupName}`}
      className={`${style.functionalitiesGroup} ${isVisible ? '' : style.closed}`}
      title={title}
    >
      <div>
        <div className={style.identification} onClick={toggleVisibility}>
          { icon && <FontAwesomeIcon className={style.icon} icon={icon} /> }
          <span className={`${style.text} ${style.navText}`}>{groupName}</span>
          <FontAwesomeIcon className={style.chevron} icon={isVisible ? faChevronDown : faChevronUp} />
        </div>
        <ul className={style.functionalities}>{children}</ul>
      </div>
    </li>
  );
};

export default FunctionalityGroup;
