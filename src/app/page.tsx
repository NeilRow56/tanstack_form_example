import { SignUp } from "@/forms/sign-up";
import { RegisterForm } from "@/forms/sign-up-advanced";
import TanstackFormExample from "@/forms/tanstack-example.form";

export default async function Home() {
  return (
    <div className="  ">
      {/* <TanstackFormExample /> */}
      <RegisterForm />
    </div>
  );
}
