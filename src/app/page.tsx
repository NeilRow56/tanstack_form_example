import { Listeners } from "@/components/Listeners";
import { ReactiveForm } from "@/components/ReactiveForm";
import { UserCard } from "@/components/UserCard";
import { UserForm } from "@/components/UserForm";
import { SignUp } from "@/forms/sign-up";
import { RegisterForm } from "@/forms/sign-up-advanced";
import TanstackFormExample from "@/forms/tanstack-example.form";

export default async function Home() {
  return (
    <div className="  ">
      {/* <SignUp /> */}
      {/* <ReactiveForm /> */}
      <UserCard />
      {/* <Listeners /> */}
      {/* <UserForm /> */}
    </div>
  );
}
