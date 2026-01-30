"use client";

import { useEffect, useState } from "react";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0">
        <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />

        <main className="flex-1 px-3 sm:px-6 py-6 overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
