import style from "@/styles/modules/crm/home.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Business management home page"
};

export default function Home() {
  return (
    <div className={style.container}>
      <h1>Hey</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium in
        modi fugit, ab corrupti doloremque distinctio. Ut similique maiores
        nihil quia expedita soluta nesciunt et quas recusandae, accusamus,
        adipisci impedit! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Praesentium in modi fugit, ab corrupti doloremque distinctio. Ut
        similique maiores nihil quia expedita soluta nesciunt et quas
        recusandae, accusamus, adipisci impedit!accusamus, adipisci
        impedit!adipisci impedit!adipisci impedit!adipisci impedit!adipisci
        impedit!adipisci impedit!adipisci impedit!adipisci impedit!
      </p>
    </div>
  );
};
