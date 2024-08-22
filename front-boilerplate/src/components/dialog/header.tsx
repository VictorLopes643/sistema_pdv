import style from "@/styles/components/dialog/components/header.module.scss";


type Props = {
  title: string
}

export default function DialogHeader({ title }: Props): JSX.Element {
  return (
    <div className={style.container}>
        <h1>{ title }</h1>
    </div>
  );
}
