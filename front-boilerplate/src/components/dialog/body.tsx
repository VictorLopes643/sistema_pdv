import style from "@/styles/components/dialog/components/body.module.scss";


type Props = {
    children: React.ReactNode;
};


export default function DialogBody ({ children }:Props) {
    return (
        <section className={style.container}>
            { children }
        </section>
    );
};