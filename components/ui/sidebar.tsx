"use client";

import Link from "next/link";
import { Home, Truck, Settings, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menu = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Vehicles", href: "/admin/vehicles", icon: Truck },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={clsx(
        "min-h-screen border-r bg-white transition-all duration-300 flex flex-col",
        open ? "w-64 p-4" : "w-0 p-0 overflow-hidden",
      )}
    >
      {open && (
        <>
          {/* ================= TOP ================= */}
          <div>
            <h1 className="text-xl font-bold mb-6 px-1">Admin</h1>

            <nav className="space-y-2">
              {menu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* ================= FOOTER PROFILE ================= */}
          <div className="mt-auto pt-4">
            <Separator className="mb-4" />

            <Link
              href="/admin/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-100 transition"
            >
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-blue-600 text-white">
                  A
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-800">
                  Admin User
                </span>
                <span className="text-xs text-slate-500">View Profile</span>
              </div>
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}
