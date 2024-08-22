"use client";

import { ErrorMessage, Field, Formik, Form } from "formik";
import { object, string } from "yup";
import style from "@/styles/modules/auth/sign-up.module.scss";
import Button from "@/components/button";

const passwordValidation = (value: string): string[] | null => {
  const messages = [];
  const validationOptions = [
    {
      text: "Password must contain at least one special character",
      rule: /^[a-zA-Z0-9]*$/,
    },
    {
      text: "Password must contain at least 12 character",
      rule: /^.{1,11}$/,
    },
    {
      text: "Password must contain at least one capital letter",
      rule: /^[^A-Z]*$/,
    },
  ];

  for (let i = 0; i < validationOptions.length; i++) {
    if (value.match(validationOptions[i].rule)) {
      messages.push(validationOptions[i].text);
    }
  }

  return messages.length > 0 ? messages : null;
};

const validationSchema = object({
  username: string()
    .min(8, "Username must contain at least 8 characters")
    .required(),
  email: string()
    .email("Please, enter a valid e-mail")
    .required("E-mail is required"),
});

const renderError = (message: string | string[]): JSX.Element => {
  if (typeof message != "string") {
    return message.length > 0 ? (
      <ul className="input-message-error">
        {message.map((element, index) => {
          return <li key={index}> - {element}</li>;
        })}
      </ul>
    ) : (
      <></>
    );
  }
  return <p className="input-message-error">{message}</p>;
};

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("alo");
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form
          onSubmit={handleSubmit}
          className={style.formElement}
          data-testid="formElement"
        >
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" render={renderError} />
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail"
          />
          <ErrorMessage name="email" render={renderError} />
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            validate={passwordValidation}
          />
          <ErrorMessage name="password" render={renderError} />
          <Button id={"signUpButton"} type={"submit"} disabled={isSubmitting}>
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
}
