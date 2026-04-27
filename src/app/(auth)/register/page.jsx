"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log({ data, errors });
    // sign up
    const { data: userData, error } = await authClient.signUp.email(data);
    console.log({ userData, error });
    if (!error) return toast.success("Registration successful");
    toast.error(error.message);
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-[80vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 flex-none border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-3xl text-center">
            Register
          </legend>
          <label className="label">Full Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", { required: "Email Address is required" })}
          />
          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-center text-gray-500">
          Dont’t Have An Account ? <span className="text-danger">Register</span>
        </p>
      </form>
    </div>
  );
};
export default RegisterPage;
