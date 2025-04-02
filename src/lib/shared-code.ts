import { formOptions } from "@tanstack/react-form/nextjs";

// interface RegisterFormValues {
//   username: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   age: number;
//   birthdate: string;
//   isMarried: boolean;
//   nationality: string;
//   password: string;
//   confirm_password: string;
// }

export const formOpts = formOptions({
  defaultValues: {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 0,
    birthdate: "",
    isMarried: false,
    nationality: "canada",
    password: "",
    confirm_password: "",
  },
  //    as RegisterFormValues,
});
