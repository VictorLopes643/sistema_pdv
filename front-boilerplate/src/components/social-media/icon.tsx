import style from "@/styles/components/social-media/icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type SocialMediaIconProps = {
  icon: IconDefinition;
  title: string;
};

export default function SocialMediaIcon({ icon, title }: SocialMediaIconProps) {
  return <FontAwesomeIcon className={style.icon} icon={icon} title={title} />;
}
