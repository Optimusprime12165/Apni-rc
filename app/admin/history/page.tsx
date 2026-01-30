"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RC_HISTORY = [
  {
    id: 1,
    vehicleNo: "HR26DK8337",
    type: "RC",
    date: "29 Jan 2026",
  },
  {
    id: 2,
    vehicleNo: "RJ14UQ0173",
    type: "Mparivahan",
    date: "28 Jan 2026",
  },
  {
    id: 3,
    vehicleNo: "HR12AB4321",
    type: "RC Card 2",
    date: "27 Jan 2026",
  },
  {
    id: 4,
    vehicleNo: "DL8CAF1234",
    type: "RC",
    date: "26 Jan 2026",
  },
];

const RECHARGE_HISTORY = [
  {
    id: 1,
    date: "29 Jan 2026",
    amount: 500,
  },
  {
    id: 2,
    date: "25 Jan 2026",
    amount: 1000,
  },
  {
    id: 3,
    date: "20 Jan 2026",
    amount: 500,
  },
];

export default function UserHistoryPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">User History</h1>
        <p className="text-sm text-slate-500">
          RC downloads and recharge details
        </p>
        <div className="flex justify-end">
          <Button variant="outline">
            <Link href="/admin">Back</Link>
          </Button>
        </div>
      </div>

      {/* ================= RC DOWNLOAD HISTORY ================= */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            RC Download History
          </h2>

          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-[600px] w-full border-collapse">
              <thead className="bg-slate-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Vehicle No
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    RC Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {RC_HISTORY.map((rc, i) => (
                  <tr key={rc.id} className="border-t hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm">{i + 1}</td>
                    <td className="px-4 py-3 font-medium">{rc.vehicleNo}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">{rc.type}</Badge>
                    </td>
                    <td className="px-4 py-3 text-sm">{rc.date}</td>
                  </tr>
                ))}

                {RC_HISTORY.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-10 text-slate-500"
                    >
                      No RC downloads found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* ================= RECHARGE HISTORY ================= */}
      <Card className="rounded-xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">
              Recharge History
            </h2>

            {/* TOTAL RECHARGE COUNT */}
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Total Recharges: {RECHARGE_HISTORY.length}
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-[500px] w-full border-collapse">
              <thead className="bg-slate-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {RECHARGE_HISTORY.map((r, i) => (
                  <tr key={r.id} className="border-t hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm">{i + 1}</td>
                    <td className="px-4 py-3 text-sm">{r.date}</td>
                    <td className="px-4 py-3 font-semibold text-green-600">
                      ₹{r.amount}
                    </td>
                  </tr>
                ))}

                {RECHARGE_HISTORY.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="text-center py-10 text-slate-500"
                    >
                      No recharge history found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
