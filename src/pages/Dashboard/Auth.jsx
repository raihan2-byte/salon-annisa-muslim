import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import InputForm from "../../components/Dashboard/Auth/InputForm";
import Button from "../../components/Dashboard/Auth/Button";
import Logo from "../../assets/log.svg";
import { login, registerAuth } from "../../service/auth/api";
import toast from "react-hot-toast";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Auth() {
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { auth, setAuth } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const handleLogin = async (data) => {
    toast.loading("Loading...");
    try {
      const res = await login({ email: data.email, password: data.password });
      if (res) {
        setAuth({
          token: res.data,
        });
        toast.dismiss();
        toast.success("Login Success");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
    }
  };

  const handleRegister = async (data) => {
    try {
      const res = await registerAuth({
        email: data.email,
        password: data.password,
      });
      toast.success("Register Success, Please Login");
      toggleVariant();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      handleRegister(data);
    } else if (variant === "LOGIN") {
      handleLogin(data);
    }
    setIsLoading(false);
  };
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center">
        <Link to="/" className="max-sm:w-[135px] max-sm:h-[15px] ml-[8px]">
          <img src={Logo} alt="" className="w-full" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {variant === "REGISTER" ? "Buat Akun" : "Masuk"}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <InputForm
                id="name"
                label="Name"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            )}
            <InputForm
              id="email"
              label="Email Address"
              type="email"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <InputForm
              id="password"
              label="Password"
              type="password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <div>
              <Button disable={isLoading} fullWidth type="submit">
                {variant === "REGISTER" ? "Register" : "Sign in"}
              </Button>
            </div>
          </form>
          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>
              {variant === "LOGIN"
                ? "New to Vichat Messenger?"
                : "Already have an account?"}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer ">
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
