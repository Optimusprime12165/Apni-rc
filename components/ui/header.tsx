"use client";
import { Bell, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/admin" className="text-lg font-semibold">
          Admin Dashboard
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <Link href="/admin/settings">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>

        {/* LOGOUT */}
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}
