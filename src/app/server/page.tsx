"use client";

import { submitForm } from "@/actions/post-message";
import { userMessageFormOpts } from "@/forms/user-message-form";
import {
  mergeForm,
  useForm,
  useStore,
  useTransform,
} from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import React, { useActionState } from "react";

export default function ServerPage() {
  const [state, action] = useActionState(submitForm, initialFormState);
  const form = useForm({
    ...userMessageFormOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state!), [state]),
  });

  const formErrors = useStore(form.store, (formState) => formState.errors);
  console.log(formErrors);
  return (
    <div className="max-w-7xl mx-auto mt-30 bg-gray-50">
      <div className="flex justify-center items-center mb-4 w-auto ">
        <h1 className="text-2xl font-bold ">Tanstack Server Action Form</h1>
      </div>

      <form
        action={action as never}
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
          children={(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-600">
                Name
              </label>
              <input
                className="border border-gray-300 rounded-md p-2"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {formErrors.map(
                (error) =>
                  error?.name &&
                  error?.name.map((error) => (
                    <p className="text-red-500" key={error?.message}>
                      {error?.message}
                    </p>
                  ))
              )}
            </div>
          )}
        />
        <form.Field
          name="email"
          children={(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-300 rounded-md p-2"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {formErrors.map(
                (error) =>
                  error?.email &&
                  error?.email.map((error) => (
                    <p className="text-red-500" key={error?.message}>
                      {error?.message}
                    </p>
                  ))
              )}
            </div>
          )}
        />
        <form.Field
          name="message"
          children={(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <input
                className="border border-gray-300 rounded-md p-2"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {formErrors.map(
                (error) =>
                  error?.message &&
                  error?.message.map((error) => (
                    <p className="text-red-500" key={error?.message}>
                      {error?.message}
                    </p>
                  ))
              )}
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              className="bg-blue-500 disabled:opacity-50 rounded-md text-white p-2"
              type="submit"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "..." : "Submit"}
            </button>
          )}
        />
      </form>
    </div>
  );
}
