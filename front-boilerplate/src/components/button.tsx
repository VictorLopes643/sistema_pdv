import React from "react";
import style from "@/styles/components/button.module.scss";

type Props = {
  id: string;
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  className?: string;
};

export default function Button({
  id,
  children,
  type,
  disabled,
  className,
}: Props): JSX.Element {
  return (
    <button
      id={id}
      className={`${style.btn} ${className}`}
      type={type || "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
