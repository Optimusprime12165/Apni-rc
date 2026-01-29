"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Shield } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Admin Profile</h1>
        <p className="text-sm text-slate-500">Manage your account details</p>
      </div>

      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-blue-600 text-white text-2xl">
                A
              </AvatarFallback>
            </Avatar>

            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Admin
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-sm text-slate-500">Name</p>
              <p className="font-semibold text-slate-800">Admin</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700">admin@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700">+91 99999 99999</span>
            </div>

            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4 text-slate-500" />
              <span className="text-slate-700">
                Role: <strong>Admin</strong>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Change Password
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Current Password" type="password" />
            <Input placeholder="New Password" type="password" />
          </div>

          <Input placeholder="Confirm New Password" type="password" />

          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
