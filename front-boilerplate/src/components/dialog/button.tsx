"use client";

import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import style from "@/styles/components/dialog/components/button.module.scss";
import { DialogContext } from "@/components/dialog/context/dialog-context";

type Props = {
  type: "CLOSE" | "SUBMIT";
  text: string;
};

export default function DialogButton({ type, text }: Props) {
  const context = useContext(DialogContext);
  const router = useRouter();
  const pathname = usePathname();

  const onClose = () => {
    context?.data.dialogRef.current?.close();
    if (pathname) router.push(pathname, { scroll: false });
  };

  const onSubmit = () => {};

  const handler = type === "CLOSE" ? onClose : onSubmit;

  return (
    <button className={style.btn} onClick={handler}>
      {text}
    </button>
  );
};
