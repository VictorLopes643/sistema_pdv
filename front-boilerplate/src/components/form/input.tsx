import style from "@/styles/components/form/input.module.scss";
import React, { FC, InputHTMLAttributes } from 'react';

type InputProps = {
    id: string;
    name: string;
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({ id, label, ...rest }) => {
    return (
        <div className={style.container}>
            {label && <label htmlFor={id} className={style.label}>{label}</label>}
            <input type={rest.type || 'text'} className={`${rest.className ? rest.className : ""} ${style.input}`} {...rest} />
        </div>
    );
};

export default Input;