import style from "@/styles/modules/crm/home.module.scss";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Home",
  description: "Business management home page"
};

export default async function Home() {
  const session = await getServerSession();
  console.log("session", session);

  return (
    <>
    getServerSession Result
    {session?.user?.name ? (
      <div>{session?.user?.name}</div>
    ) : (
      <div>Not logged in</div>
    )}
  </>
    // <div className={style.container}>
    //   <h1>Hey</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium in
    //     modi fugit, ab corrupti doloremque distinctio. Ut similique maiores
    //     nihil quia expedita soluta nesciunt et quas recusandae, accusamus,
    //     adipisci impedit! Lorem ipsum dolor sit amet consectetur, adipisicing
    //     elit. Praesentium in modi fugit, ab corrupti doloremque distinctio. Ut
    //     similique maiores nihil quia expedita soluta nesciunt et quas
    //     recusandae, accusamus, adipisci impedit!accusamus, adipisci
    //     impedit!adipisci impedit!adipisci impedit!adipisci impedit!adipisci
    //     impedit!adipisci impedit!adipisci impedit!adipisci impedit!
    //   </p>
    // </div>

  );
};