"use client";

import { useState } from "react";

interface RegisterFormProps {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  birthdate: string;
  isMarried: boolean;
  nationality: string;
  password: string;
  confirm_password: string;
}

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormProps>({
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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="flex flex-col h-full w-[600px] container mx-auto mt-24 ">
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div>
          <h1 className="text-2xl font-bold">Register</h1>
        </div>

        {/* Username */}
        <div className="flex flex-col mb-2">
          <label htmlFor="username">Username</label>
          <input
            className="border "
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div className="flex flex-col mb-2">
          <label htmlFor="email">Email</label>
          <input
            className="border "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* First Name */}
        <div className="flex flex-col mb-2">
          <label htmlFor="firstName">FirstName</label>
          <input
            className="border "
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="flex flex-col mb-2">
          <label htmlFor="lastName">LastName</label>
          <input
            className="border "
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Birthdate */}
        <div className="flex flex-col mb-2">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            className="border "
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>

        {/* is Married */}
        <div className="flex flex-col mb-2">
          <label htmlFor="isMarried">
            <input
              className="border "
              type="checkbox"
              id="isMarried"
              name="isMarried"
              checked={formData.isMarried}
              onChange={handleChange}
            />
            Are you married?
          </label>
        </div>

        {/* Nationality */}
        <div className="flex flex-col mb-2">
          <label htmlFor="isMarried"></label>
          <select
            className="border "
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          >
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="brazil">Brazil</option>
          </select>
        </div>

        {/* Password */}
        <div className="flex flex-col mb-2">
          <label htmlFor="password">Password</label>
          <input
            className="border "
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-2">
          <label htmlFor="confirm_password"> Confirm Password</label>
          <input
            className="border "
            type="text"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 text-white rounded-lg p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
