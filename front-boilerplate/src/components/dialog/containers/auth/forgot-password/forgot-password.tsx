"use client";

import Image from "next/image";
import Link from "next/link";
import style from "@/styles/components/dialog/containers/auth/forgot-password.module.scss";
import Button from "@/components/button";
import { object, string } from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";

type InputScreenProps = {
  setScreen: Dispatch<SetStateAction<"INPUT_SCREEN" | "CONFIRMATION_SCREEN">>;
};

const renderError = (message: string) => (
  <p className="input-message-error">{message}</p>
);

const validationSchema = object({
  email: string().email("Enter a valid e-mail").required("E-mail is required"),
});

function InputScreen({ setScreen }: InputScreenProps): JSX.Element {
  return (
    <section className={style.inputScreenContainer}>
      <div className={style.imgContainer}>
        <Image
          src={"/send-email.png"}
          alt={"Send e-mail representation"}
          className={style.sendEmailImg}
          width={450}
          height={250}
        />
      </div>
      <div className={style.inputContainer}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          validateOnBlur={false}
          initialTouched={{ email: false }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);

            setScreen("CONFIRMATION_SCREEN");
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <p className={style.recoveryText}>
                Please enter your e-mail address to recovery your password
              </p>
              <Field
                type={"email"}
                name={"email"}
                id={"email"}
                placeholder={"Enter your e-mail"}
              />
              <ErrorMessage name="email" render={renderError} />
              <Button
                id={"signInButton"}
                type={"submit"}
                disabled={isSubmitting}
                className={style.submitButton}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
        <Link className={style.tryAnotherWay} href={"#"}>
          Try another way
        </Link>
      </div>
    </section>
  );
}

function ConfirmationScreen() {
  return (
    <section className={style.confirmationScreenContainer}>
      <p>
        If an account with this e-mail exists, we will send a recovery e-mail
      </p>
      <div className={style.imgContainer}>
        <Image
          src={"/check-icone.png"}
          alt={"E-mail sent"}
          className={style.sendEmailImg}
          width={350}
          height={250}
        />
      </div>
    </section>
  );
}

export default function ForgotPasswordContainer(): JSX.Element {
  const [screen, setScreen] = useState<"INPUT_SCREEN" | "CONFIRMATION_SCREEN">(
    "INPUT_SCREEN"
  );

  return screen === "INPUT_SCREEN" ? (
    <InputScreen setScreen={setScreen} />
  ) : (
    <ConfirmationScreen />
  );
}
