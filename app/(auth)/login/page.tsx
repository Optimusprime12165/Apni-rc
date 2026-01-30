"use client";

import { useState } from "react";
import { Phone, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // DUMMY CREDS
  const ADMIN = { mobile: "9999999999", password: "admin123" };
  const USER = { mobile: "8888888888", password: "user123" };

  const handleLogin = () => {
    setError("");

    if (!mobile || !password) {
      setError("Please enter mobile number and password");
      return;
    }

    // ADMIN LOGIN
    if (mobile === ADMIN.mobile && password === ADMIN.password) {
      document.cookie = "role=admin; path=/";
      router.push("/admin");
      return;
    }

    // USER LOGIN
    if (mobile === USER.mobile && password === USER.password) {
      document.cookie = "role=user; path=/";
      router.push("/");
      return;
    }

    setError("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Login</h1>
            <p className="text-sm text-gray-500">Access your account</p>
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          {/* MOBILE */}
          <div className="space-y-2">
            <Label>Mobile Number</Label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Enter mobile number"
                className="pl-10 h-11 rounded-xl"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <Label>Password</Label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="pl-10 pr-10 h-11 rounded-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link href="/forget-password" className="text-sm text-blue-600">
              Forgot password?
            </Link>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-semibold">
              Sign up
            </Link>
          </p>

          <p className="text-xs text-center text-gray-400">
            Admin → 9999999999 / admin123 <br />
            User → 8888888888 / user123
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
