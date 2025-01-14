"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, {  useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import axios, { AxiosError } from "axios";

export default function SignUp() {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    terms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    text: "weak",
  });

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengthText =
      ["weak", "fair", "good", "strong"][score - 1] || "weak";
    return { score, text: strengthText };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      password: !formData.password || formData.password.length < 8,
      terms: !formData.terms,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Signing up...");

    try {
      const newUser = await axios.post("/api/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      if (newUser.status === 200) {
        const signInResponse = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (signInResponse?.error) {
          handleAuthError();
        } else {
          toast.success("Account created successfully!");
          router.push("/connectspotify");
        }
      }
    } catch (error:unknown) {
      if (error instanceof AxiosError) {
        handleAuthError(error.response?.status);
      } else {
        // Handle non-Axios errors or fallback
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      toast.dismiss(loadingToast);
      setIsLoading(false);
    }
  };

  const handleAuthError = (status?: number) => {
    switch (status) {
      case 401:
        toast.error("Invalid credentials");
        break;
      case 400:
        toast.error("Missing credentials");
        break;
      case 404:
        toast.error("Account not found");
        break;
      case 403:
        toast.error("Account not verified");
        break;
      default:
        toast.error("Something went wrong");
    }
  };

  const handleGoogleClick = () => {
        toast.loading("Please Wait");

    signIn("google", {
      callbackUrl: "/rssfeedsetup",
    })
      .then(() => {
        console.log("Google sign-in initiated.");
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <section className="bg-neutral-800 py-12 px-4 h-screen flex items-center justify-center flex-col">
      <div className="max-w-md mx-auto bg-[#171717] rounded-xl shadow-xl p-8 border border-neutral-700">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2 animate-fadeInDown">
            Create Account
          </h2>
          <p className="text-gray-400 animate-fadeInUp">
            Join the PodPulse community
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fadeInUp animate__delay-1s"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-neutral-700 border ${
                  errors.firstName ? "border-red-500" : "border-neutral-600"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all`}
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-neutral-700 border ${
                  errors.lastName ? "border-red-500" : "border-neutral-600"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all`}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-neutral-700 border ${
                errors.email ? "border-red-500" : "border-neutral-600"
              } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all`}
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-neutral-700 border ${
                  errors.password ? "border-red-500" : "border-neutral-600"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 transition-all`}
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {isPasswordVisible ? (
                    <>
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </>
                  ) : (
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  )}
                </svg>
              </button>
            </div>
            <div className="mt-2">
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`h-1 w-1/4 rounded ${
                      index <= passwordStrength.score
                        ? "bg-indigo-600"
                        : "bg-neutral-600"
                    }`}
                  ></div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Password strength: <span>{passwordStrength.text}</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                className={`h-4 w-4 bg-neutral-700 border-neutral-600 rounded text-indigo-600 focus:ring-indigo-500 ${
                  errors.terms ? "border-red-500" : ""
                }`}
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-300"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div
        id="socialAuth"
        className="bg-neutral-800 py-0 px-4"
      >
        <div className="max-w-md mx-auto">
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-neutral-800 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 animate-fadeInUp">
            <button
              className="flex items-center justify-center w-full px-4 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg border border-neutral-600 transition-colors"
              onClick={handleGoogleClick}
            >
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            By continuing, you agree to PodPulse&#39s
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Terms of Service
            </a>
            and
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
