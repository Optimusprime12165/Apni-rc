"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Car, FileText, Activity, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const USERS = [
  {
    id: 1,
    name: "Ankit Sharma",
    mobile: "9571082881",
    email: "ankit@gmail.com",
    balance: "Rs. 550",
    updated: "29 Jan 2026",
  },
  {
    id: 2,
    name: "Rohit Verma",
    mobile: "9876543210",
    email: "rohit@gmail.com",
    balance: "Rs. 1,200",
    updated: "28 Jan 2026",
  },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [openRecharge, setOpenRecharge] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [amount, setAmount] = useState("");

  const openRechargeModal = (user: any) => {
    setSelectedUser(user);
    setAmount("");
    setOpenRecharge(true);
  };

  const handleAmountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleRecharge();
    }
  };

  const handleRecharge = () => {
    if (!amount) return alert("Enter amount");
    console.log("Recharge", selectedUser.name, amount);
    setOpenRecharge(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value="1,248"
          icon={<Users className="w-6 h-6 text-blue-600" />}
        />
        <StatCard
          title="Total Vehicles"
          value="3,842"
          icon={<Car className="w-6 h-6 text-green-600" />}
        />
        <StatCard
          title="Total RC"
          value="2,976"
          icon={<FileText className="w-6 h-6 text-indigo-600" />}
        />
        <StatCard
          title="Transactions"
          value="9,430"
          icon={<Activity className="w-6 h-6 text-orange-600" />}
        />
      </div>
      <div className="flex justify-end gap-3">
        <Input placeholder="Search User Mobile or Name" className="max-w-sm" />
        <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-slate-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Full name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Mobile
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Balance
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Last Update
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold">
                View History
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {USERS.map((u, i) => (
              <tr key={u.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3 text-sm">{i + 1}</td>
                <td className="px-4 py-3 text-sm font-medium">{u.name}</td>
                <td className="px-4 py-3 text-sm">{u.mobile}</td>
                <td className="px-4 py-3 text-sm">{u.email}</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-600">
                  {u.balance}
                </td>
                <td className="px-4 py-3 text-sm">{u.updated}</td>

                <td className="px-4 py-3 text-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-lg"
                    asChild
                  >
                    <Link href="/admin/history">History</Link>
                  </Button>
                </td>

                <td className="px-4 py-3 text-center">
                  <Button
                    size="sm"
                    onClick={() => openRechargeModal(u)}
                    className="bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Recharge
                  </Button>
                </td>
              </tr>
            ))}

            {USERS.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-12 text-slate-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={openRecharge} onOpenChange={setOpenRecharge}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Recharge Wallet</DialogTitle>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-4">
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-sm text-slate-500">Customer</p>
                <p className="font-semibold text-slate-800">
                  {selectedUser.name}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Amount
                </label>

                <Input
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onKeyDown={handleAmountKeyDown}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {[100, 200, 500, 1000].map((v) => (
                  <Button
                    key={v}
                    type="button"
                    variant={amount === String(v) ? "default" : "outline"}
                    className="rounded-full px-4"
                    onClick={() => setAmount(String(v))}
                  >
                    Rs. {v}
                  </Button>
                ))}
              </div>

              <Button
                onClick={handleRecharge}
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
              >
                Recharge
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-100">{icon}</div>
      </CardContent>
    </Card>
  );
}
