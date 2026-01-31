"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Settings,
  User,
  Shield,
  Bell,
  Palette,
  Mail,
  Phone,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
        <p className="text-sm text-slate-500">
          Manage your account and preferences
        </p>
      </div>

      {/* ACCOUNT OVERVIEW (PROFILE-LIKE) */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-slate-700 text-white text-2xl">
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

      {/* SECURITY SETTINGS */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Change Password
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Current Password" type="password" />
            <Input placeholder="New Password" type="password" />
          </div>

          <Input placeholder="Confirm New Password" type="password" />

          <Button className="bg-slate-700 hover:bg-blue-700 rounded-xl w-full sm:w-auto">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* NOTIFICATION SETTINGS */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Notifications
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-700">System Notifications</span>
            <Switch disabled />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-700">Email Notifications</span>
            <Switch disabled />
          </div>
        </CardContent>
      </Card>

      {/* APPEARANCE / SYSTEM */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Palette className="h-5 w-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Appearance & System
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-700">Compact Layout</span>
            <Switch disabled />
          </div>
        </CardContent>
      </Card>

      {/* FOOTER NOTE */}
      <div className="text-center text-sm text-slate-400 pt-2">
        Some settings are currently read-only
      </div>
    </div>
  );
}
