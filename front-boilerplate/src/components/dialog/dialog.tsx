"use client";

import style from "@/styles/components/dialog/dialog.module.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import DialogContextProvider from "@/components/dialog/context/dialog-provider";
import DialogHeader from "@/components/dialog/header";

type Props = {
  children?: React.ReactNode;
  name: string;
  title: string;
  id: string
};

export default function Dialog({
  children,
  name,
  title,
  id
}: Props): JSX.Element {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams?.get(name);

  useEffect(() => {
    if (showDialog != null) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const dialog =
    showDialog != null ? (
      <DialogContextProvider id={id} name={name} title={title} dialogRef={dialogRef}>
        <dialog id={id} ref={dialogRef} className={style.dialog}>
          <DialogHeader title={title}/>
          {children}
        </dialog>
      </DialogContextProvider>
    ) : (
      <></>
    );

  return dialog;
}
