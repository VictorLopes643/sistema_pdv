import style from "@/styles/components/dialog/components/footer.module.scss";


type Props = {
  children: React.ReactNode;
};

export default function DialogFooter({ children }: Props) {
  return <div className={style.container}>{children}</div>;
}
