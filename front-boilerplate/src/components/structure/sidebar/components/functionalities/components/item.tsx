import style from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface FunctionalityItemProps {
  href: string;
  icon: IconProp;
  itemName: string;
  title: string;
}

const FunctionalityItem = ({
  href,
  icon,
  itemName,
  title
}: FunctionalityItemProps) => {
  return (
    <li className={style.navLink} title={title}>
      <Link href={href}>
        { icon && <FontAwesomeIcon className={style.icon} icon={icon} /> }
        <span className={`${style.text} ${style.navText}`}>{itemName}</span>
      </Link>
    </li>
  );
};

export default FunctionalityItem;
