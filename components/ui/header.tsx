"use client";

import { Button } from "@/components/ui/button";
import { Bell, User, Menu } from "lucide-react";
import Link from "next/link";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle */}
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>

        <h2 className="text-lg font-semibold">
          <Link href="/admin">Admin Dashboard</Link>
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <Link href="/admin/profile">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
