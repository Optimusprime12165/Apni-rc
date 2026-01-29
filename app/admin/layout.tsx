"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Main Area */}
      <div className="flex flex-1 flex-col">
        <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />

        <main className="flex-1 p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
