"use server";

import { userMessageFormOpts } from "@/forms/user-message-form";
import {
  createServerValidate,
  ServerValidateError,
} from "@tanstack/react-form/nextjs";

const serverValidate = createServerValidate({
  ...userMessageFormOpts,
  onServerValidate: async ({ value }) => {
    if (value.email !== "t@t.com") {
      return { email: [{ message: "Server: This account is banned" }] };
    }
  },
});

export async function submitForm(prev: unknown, formData: FormData) {
  try {
    await serverValidate(formData);
  } catch (error) {
    if (error instanceof ServerValidateError) {
      return error.formState;
    }
    throw error;
  }
}
