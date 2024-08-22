import style from "@/styles/modules/auth/sign-up.module.scss"
import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./(components)/form";

export const metadata: Metadata = {
  title: 'Sign up',
  description: "Business management sign up"
};

export default function SignUp () {
  return (
    <section className={style.formSection} data-testid="formSection">
      <div className={style.formInformation} data-testid="formInformation">
        <h1>Sign Up</h1>
        <p>Welcome! Please, fill up the form below</p>
      </div>
      <SignUpForm/>
      <p className={style.signInButton}>
        Already a member?&nbsp;
        <Link href={"/auth/sign-in"} title="Sign in">
          Sign in!
        </Link>
      </p>
    </section>
  );
};
