"use client";

import { ErrorMessage, Field, Formik } from "formik";
import { object, string } from "yup";
import style from "@/styles/modules/auth/sign-in.module.scss";
import Link from "next/link";
import Button from "@/components/button";

const validationSchema = object({
  email: string()
    .email("Please, enter a valid e-mail")
    .required("E-mail is required"),
  password: string()
    .min(6, "Password should contain at least 6 characters")
    .required("Password is required"),
});

const renderError = (message: string) => (
  <p className="input-message-error">{message}</p>
);

export default function SignInForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberPassword: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form
          className={style.formElement}
          data-testid={"formElement"}
          onSubmit={handleSubmit}
        >
          <Field
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your e-mail"}
          />
          <ErrorMessage name="email" render={renderError} />
          <Field
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Enter your password"}
          />
          <ErrorMessage name="password" render={renderError} />

          <div className={style.passwordOptions}>
            <label htmlFor={"rememberPassword"}>
              <Field
                type={"checkbox"}
                name={"rememberPassword"}
                id={"rememberPassword"}
              />
              Remember Password
            </label>
            <Link
              href={"/auth/sign-in?forgot-password"}
              className={style.forgotPassword}
            >
              Forgot password?
            </Link>
          </div>
          <Button id={"signInButton"} type={"submit"} disabled={isSubmitting}>
            Sign in
          </Button>
        </form>
      )}
    </Formik>
  );
}
