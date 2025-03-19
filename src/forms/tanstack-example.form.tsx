"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is required"),
});

export default function TanstackFormExample() {
  const form = useForm({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <div className="max-w-7xl mx-auto mt-30 bg-gray-50">
      <div className="flex justify-center items-center mb-4 w-auto ">
        <h1 className="text-2xl font-bold ">Tanstack Form</h1>
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
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
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-red-500">
                  {error?.message}
                </p>
              ))}
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
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-red-500">
                  {error?.message}
                </p>
              ))}
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
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-red-500">
                  {error?.message}
                </p>
              ))}
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
