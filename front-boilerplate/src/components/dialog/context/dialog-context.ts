"use client";

import { createContext, MutableRefObject } from "react";

export type DialogContextData = {
  id: string;
  name: string;
  title: string;
  dialogRef: MutableRefObject<HTMLDialogElement | null>
};

interface DialogContextType {
  data: DialogContextData;
  setData: React.Dispatch<React.SetStateAction<DialogContextData>>;
}

export const DialogContext = createContext<DialogContextType | null>(null);
