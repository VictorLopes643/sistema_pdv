"use client";

import { useState } from "react";
import { DialogContext, DialogContextData } from "@/components/dialog/context/dialog-context";

type Props = {
  children: React.ReactNode;
} & DialogContextData;

export default function DialogContextProvider({
  children,
  id,
  name,
  title,
  dialogRef
}: Props) {
  const [data, setData] = useState({
    id,
    name,
    title,
    dialogRef
  });

  return (
    <DialogContext.Provider value={{ data, setData }}>{children}</DialogContext.Provider>
  );
}
