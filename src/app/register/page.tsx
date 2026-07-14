"use client";

import { authClient } from "@/lib/auth-client";
import {
  Alert,
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiUserPlus } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUserCircle } from "react-icons/hi2";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
      image: user.image ? (user.image as string) : undefined,
    });

    setIsLoading(false);

    if (data) {
      window.location.href = "/";
      toast.success("Account created successfully!");
    }

    if (error) {
      setMessage(error.message as string);
      toast.error(error.message as string);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleDemoLogin = async () => {
    setMessage("");
    setIsLoading(true);

    const { data, error } = await authClient.signIn.email({
      email: "demo@dwellspot.com",
      password: "Demo12345",
    });

    setIsLoading(false);

    if (data) {
      toast.success("Logged in as Demo User");
      window.location.href = "/";
    }

    if (error) {
      setMessage(error.message as string);
      toast.error(error.message as string);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-4 py-10">
      <Card className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 flex flex-col items-center">
          <Link href="/" className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5A3C] text-white">
              <FaBuilding size={20} />
            </div>

            <h1 className="text-2xl font-bold text-[#2C2C2C]">DwellSpot</h1>
          </Link>

          <h2 className="text-3xl font-bold text-[#2C2C2C]">Create Account</h2>

          <p className="mt-2 text-center text-sm text-gray-500">
            Create an account to start discovering your perfect apartment.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
          <TextField isRequired name="name" className="w-full">
            <Label>Full Name</Label>

            <Input
              placeholder="John Doe"
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-sm focus:border-[#FF5A3C] focus:ring focus:ring-[#FF5A3C]/50"
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address.";
              }

              return null;
            }}
          >
            <Label>Email Address</Label>

            <Input
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-sm focus:border-[#FF5A3C] focus:ring focus:ring-[#FF5A3C]/50"
            />

            <FieldError />
          </TextField>

          <TextField name="image" type="url" className="w-full">
            <Label>Profile Image URL (Optional)</Label>

            <Input
              placeholder="https://example.com/profile.jpg"
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-sm focus:border-[#FF5A3C] focus:ring focus:ring-[#FF5A3C]/50"
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
          >
            <Label>Password</Label>

            <Input
              placeholder="••••••••"
              className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-sm focus:border-[#FF5A3C] focus:ring focus:ring-[#FF5A3C]/50"
            />

            <FieldError />
          </TextField>

          {message && <Alert color="danger">{message}</Alert>}

          <Button
            type="submit"
            isDisabled={isLoading}
            className="mt-2 h-12 w-full bg-[#FF5A3C] font-semibold text-white hover:bg-[#ef4b2d]"
          >
            <BiUserPlus size={20} />
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </Form>

        <div className="my-6">
          <Separator />
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            onPress={handleGoogleLogin}
            className="h-12 w-full border-gray-300 bg-white font-semibold hover:bg-gray-50"
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          <Button
            variant="outline"
            onPress={handleDemoLogin}
            isDisabled={isLoading}
            className="h-12 w-full border-[#FF5A3C] font-semibold text-[#FF5A3C] hover:bg-[#FFF3F0]"
          >
            <HiOutlineUserCircle size={22} />
            Demo Login
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#FF5A3C] hover:underline"
          >
            Sign In
          </Link>
        </p>
      </Card>
    </section>
  );
};

export default RegisterPage;
