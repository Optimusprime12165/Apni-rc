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

  /* ---------- DUMMY CREDS ---------- */
  const DUMMY_MOBILE = "9999999999";
  const DUMMY_PASSWORD = "admin123";

  const handleLogin = () => {
    setError("");

    if (!mobile || !password) {
      setError("Please enter mobile number and password");
      return;
    }

    if (mobile === DUMMY_MOBILE && password === DUMMY_PASSWORD) {
      // fake login success
      localStorage.setItem(
        "user",
        JSON.stringify({
          mobile,
          role: "admin",
          loggedIn: true,
        }),
      );

      router.push("/"); // redirect after login
    } else {
      setError("Invalid mobile number or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
              <p className="text-sm text-gray-500">Login to continue</p>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  className="pl-10 h-11 rounded-xl"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="pl-10 pr-10 h-11 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot */}
            <div className="text-right">
              <button className="text-sm text-blue-600 hover:underline">
                <Link href="/forget-password">Forgot password?</Link>
              </button>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold"
            >
              Login
            </Button>

            {/* Signup */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>

            {/* Dummy hint */}
            <p className="text-xs text-gray-400 text-center">
              Demo Login → 9999999999 / admin123
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
