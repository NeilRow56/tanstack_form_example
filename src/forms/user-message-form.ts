// "use server";

// Notice the import path is different from the client
import { formOptions } from "@tanstack/react-form/nextjs";
import { string, z } from "zod";

export type FormValues = {
  name: string;
  email: string;
  message: string;
};
export const userMessageFormOpts = formOptions({
  defaultValues: {
    name: "",
    email: "",
    message: "",
  } as FormValues,
  validators: {
    onChange: z.object({
      name: z.string().min(3, "Name is required"),
      email: z.string().email("Invalid email"),
      message: z.string().min(10, {
        message: "Message must be at least 10 characters",
      }),
    }),
  },
});
