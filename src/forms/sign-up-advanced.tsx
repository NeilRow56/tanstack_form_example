"use client";

// import { useState } from "react";
import { useActionState } from "react";
import { mergeForm, useForm, useTransform } from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { formOpts } from "../lib/shared-code";

// interface RegisterFormProps {
//   firstName: string;
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

export const RegisterForm: React.FC = () => {
  //   const [formData, setFormData] = useState<RegisterFormProps>({
  //     username: "",
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //     age: 0,
  //     birthdate: "",
  //     isMarried: false,
  //     nationality: "canada",
  //     password: "",
  //     confirm_password: "",
  //   });

  const form = useForm({
    ...formOpts,
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    },
  });
  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  //   ) => {
  //     const { name, type, value } = e.target;
  //     const newValue =
  //       type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: newValue,
  //     }));
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     alert(JSON.stringify(formData, null, 2));
  //   };

  return (
    <div className="flex flex-col h-full w-[600px] container mx-auto mt-24 ">
      <form
        className="space-y-4 "
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <h1 className="text-2xl font-bold">Register</h1>
        </div>

        {/* Username */}

        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "Username is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="firstName">Username</label>
              <input
                className="border p-2 "
                type="text"
                id="username"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* Email */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              const emailRegex =
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              return !emailRegex.test(value)
                ? "Please enter a valid email address"
                : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="firstName">Email</label>
              <input
                className="border p-2"
                type="email"
                id="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* First Name */}
        <form.Field
          name="firstName"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "First name is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="firstName">First Name</label>
              <input
                className="border p-2 "
                type="text"
                id="firstName"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* Last Name */}
        <form.Field
          name="lastName"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "Last name is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="border p-2 "
                type="text"
                id="lastName"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* Age */}
        <form.Field
          name="age"
          validators={{
            onChange: ({ value }) =>
              value < 8
                ? "Client validation: You must be at least 8"
                : undefined,
          }}
        >
          {(field) => {
            return (
              <div className="flex flex-col mb-2">
                <label htmlFor="age">Age</label>
                <input
                  className="border p-2 "
                  name="age"
                  type="number"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                />
                {field.state.meta.errors.length > 0 && (
                  <div className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors.join(", ")}
                  </div>
                )}
              </div>
            );
          }}
        </form.Field>

        {/* Birthdate */}
        <form.Field
          name="birthdate"
          validators={{
            onChange: ({ value }) => {
              return value === "" ? "Birthdate is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                className="border p-2 "
                type="date"
                id="birthdate"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* is Married */}
        <form.Field
          name="isMarried"
          validators={{
            onChange: ({}) => undefined,
          }}
        >
          {(field) => (
            <div className="flex  mb-2">
              <label htmlFor="isMarried">
                Are you married?
                <input
                  className="border p-2 ml-4 "
                  type="checkbox"
                  id="isMarried"
                  checked={field.state.value}
                  onChange={(e) => field.handleChange(e.target.checked)}
                />
              </label>
            </div>
          )}
        </form.Field>

        {/* Nationality */}

        <form.Field
          name="nationality"
          validators={{
            onChange: ({ value }) =>
              value === "" ? "Please select a nationality" : undefined,
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="nationality">Nationality</label>
              <select
                className="border "
                id="nationality"
                name="nationality"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              >
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
                <option value="brazil">Brazil</option>
              </select>
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* Password */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) => {
              return value.length < 8
                ? "Password must be at least 8 characters"
                : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="password">Password</label>
              <input
                className="border p-2 "
                type="password"
                id="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        {/* Confirm Password */}
        <form.Field
          name="confirm_password"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) =>
              value !== fieldApi.form.getFieldValue("password")
                ? "Passwords do not match"
                : undefined,
          }}
        >
          {(field) => (
            <div className="flex flex-col mb-2">
              <label htmlFor="confirm_password">Confirm password</label>
              <input
                className="border p-2 "
                type="password"
                id="confirm_password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <div className="text-red-500 text-sm mt-1">
                  {field.state.meta.errors.join(", ")}
                </div>
              )}
            </div>
          )}
        </form.Field>

        <button className="bg-blue-500 text-white rounded-lg p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
