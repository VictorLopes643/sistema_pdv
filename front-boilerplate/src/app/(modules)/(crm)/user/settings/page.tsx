import Button from "@/components/button";
import Input from "@/components/form/input";
import style from "@/styles/modules/crm/user/settings.module.scss";
import Image from "next/image";

export default function Page() {
  return (
    <div className={style.wrapper}>
      <h1>Settings</h1>
      <section className={style.personalInformation}>
        <h2>Personal Information</h2>
        <div className={style.imageContainer}>
          <Image src={"/Zuko.webp"} alt={"user img"} width={150} height={150} />
        </div>
        <form>
          <Input id="firstName" label="First Name" name="firstName" />
          <Input id="lastName" label="Last Name" name="lastName" />
          <Input id="country" label="Country" name="country" />
          <Input id="city" label="City" name="city" />
          <Input id="address" label="Address" name="address" />
        </form>
      </section>
      <section className={style.security}>
        <h2>Security</h2>
        <form>
          <Input id="email" label="Email" name="email" type="email" />
          <div className={style.securityButtons}>
            <Button id="change-password">Change Password</Button>
            <Button id="2fa" type="button">Enable 2FA</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
