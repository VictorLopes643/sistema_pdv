import Image from "next/image";
import style from "@/styles/modules/auth/auth.module.scss";

export interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={style.loginContainer} data-testid={"loginContainer"}>
      <Image
        src={"/loginimg.jpg"}
        alt={"login img"}
        className={style.imgContainer}
        width={800}
        height={0}
        data-testid={"imgContainer"}
      />
      {children}
    </div>
  );
}
