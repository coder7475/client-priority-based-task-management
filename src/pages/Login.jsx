import Navbar from "../components/shared/Navbar";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../authentications/providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function SubmitButton() {
  return (
    <button
      type="submit"
      className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
    >
      <span>Login</span>
    </button>
  );
}

const Login = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    const { email, password } = data;
    login(email, password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully Logged in!",
          icon: "success",
        });
        navigate("/dashboard");
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email/Password!",
        })
      );
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <main className="bg-slate-100 min-h-screen">
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-4  overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 max-w-lg pt-5 px-5 mx-auto mt-20"
      >
        <header className="mb-4 text-center">
          <h3 className="text-xl font-medium text-slate-700">Login Form</h3>
        </header>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
          className="border-2 rounded-lg px-2 text-sm font-light py-2"
        />
        {errors.email && (
          <span className="text-sm text-red-300 font-light">
            Email is required
          </span>
        )}
        <input
          type="password"
          placeholder="Your Password"
          {...register("password", { required: true, minLength: 6 })}
          className="border-2 rounded-lg px-2 text-sm font-light py-2"
        />
        {errors.password && (
          <span className="text-sm text-red-300 font-light">
            Password must be greater than 6 characters
          </span>
        )}

        <div className="flex justify-end pb-6 ">
          <SubmitButton></SubmitButton>
        </div>
      </form>
    </main>
  );
};

export default Login;
