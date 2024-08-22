import { Suspense } from "react";
import Link from "next/link";
import style from "@/styles/modules/auth/sign-in.module.scss";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Dialog from "@/components/dialog/dialog";
import SocialMediaIcon from "@/components/social-media/icon";
import ForgotPasswordContainer from "@/components/dialog/containers/auth/forgot-password/forgot-password";
import { Metadata } from "next";
import DialogBody from "@/components/dialog/body";
import DialogFooter from "@/components/dialog/footer";
import DialogButton from "@/components/dialog/button";
import SignInForm from "./(components)/form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Business management sign in",
};

export default function SignIn(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Dialog
          id={"dialog"}
          name={"forgot-password"}
          title={"Password Recovery"}
        >
          <DialogBody>
            <ForgotPasswordContainer />
          </DialogBody>
          <DialogFooter>
            <DialogButton text={"Close"} type={"CLOSE"} />
          </DialogFooter>
        </Dialog>
      </Suspense>

      <section className={style.formSection} data-testid={"formSection"}>
        <div className={style.formInformation} data-testid={"formInformation"}>
          <h1>Sign In</h1>
          <p>It&apos;s good to see you back!</p>
        </div>
        <section className={style.loginWithSocialMedia}>
          <SocialMediaIcon icon={faGoogle} title={"Acessar com Google"} />
          <SocialMediaIcon icon={faApple} title={"Acessar com iCloud"} />
          <SocialMediaIcon icon={faFacebook} title={"Acessar com Facebook"} />
        </section>
        <p className={style.formSeparator}> or </p>
        <SignInForm />
        <p className={style.registration}>
          Not member yet?&nbsp;
          <Link href={"/auth/sign-up"} title={"Sign up"}>
            Sign up now!
          </Link>
        </p>
      </section>
    </>
  );
}
