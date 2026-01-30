"use client";

import Link from "next/link";
import { Home, Truck, Settings, Image } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Vehicles", href: "/admin/vehicles", icon: Truck },
  { name: "Banner", href: "/admin/banner", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={clsx(
        "fixed lg:static inset-y-0 left-0 z-40 flex flex-col bg-white border-r",
        "transition-all duration-300",
        open ? "w-64 p-4" : "w-0 p-0 overflow-hidden",
        "lg:min-h-screen",
      )}
    >
      {open && (
        <>
          {/* TOP */}
          <div>
            <h1 className="text-xl font-bold mb-6 px-1 text-slate-800">
              Admin
            </h1>

            <nav className="space-y-1">
              {menu.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100",
                    )}
                  >
                    <item.icon
                      className={clsx(
                        "h-4 w-4",
                        active ? "text-blue-600" : "text-slate-500",
                      )}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* FOOTER */}
          <div className="mt-auto pt-4">
            <Separator className="mb-4" />
            <Link
              href="/admin/profile"
              className={clsx(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition",
                pathname.startsWith("/admin/profile")
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-slate-100",
              )}
            >
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-slate-500 text-white">
                  A
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <span className="text-sm font-semibold">Admin User</span>
                <span className="text-xs text-slate-500">View Profile</span>
              </div>
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}
