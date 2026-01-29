"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Truck, LogOut, Wallet } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const OFFER_IMAGE =
  "https://dummyimage.com/800x300/2563eb/ffffff&text=PAY+Rs. 500+GET+Rs. 1000+BALANCE";

const PRODUCTS = [
  { id: 1, title: "Solar Panel", price: "Rs. 25,000" },
  { id: 2, title: "Fastag", price: "Rs. 500" },
];

const TRANSACTIONS = [
  { id: "RC HR74A3859", date: "28 Jan 2026 • 04:08 PM", amount: 0 },
  { id: "RC HR74A3859", date: "22 Jan 2026 • 03:40 PM", amount: -15 },
  { id: "RC RJ45CX2306", date: "21 Jan 2026 • 11:29 PM", amount: -15 },
  { id: "RC RJ14UQ0173", date: "17 Jan 2026 • 12:48 PM", amount: -10 },
];

export default function Home() {
  const router = useRouter();

  const [vehicleInput, setVehicleInput] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChassis, setIsChassis] = useState(false);
  const [selectedService, setSelectedService] = useState<
    "mparivahan" | "rc1" | "rc2" | null
  >(null);

  const canOpenDialog = vehicleInput.trim().length > 0;

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      <div className="max-w-md mx-auto px-4 pt-4 space-y-6">
        {/* Offer */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img src={OFFER_IMAGE} alt="Offer" className="w-full" />
        </div>

        {/* Balance Card */}
        <Card className="rounded-2xl border border-blue-100 shadow-sm bg-white">
          <CardContent className="p-6 space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500">My Balance</p>
                <p className="text-4xl font-bold text-blue-600 tracking-tight">
                  Rs. 55.00
                </p>
              </div>
              <Wallet className="w-7 h-7 text-blue-600" />
            </div>

            <div className="flex justify-between items-center border border-blue-100 rounded-xl px-4 py-3">
              <div>
                <p className="font-semibold text-slate-800">Ankit Sharma</p>
                <p className="text-sm text-slate-500">9571082881</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Input */}
        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3">
          <Truck className="w-5 h-5 text-blue-600" />
          <input
            value={vehicleInput}
            onChange={(e) => setVehicleInput(e.target.value)}
            placeholder="Enter Vehicle or Chassis Number"
            className="flex-1 outline-none text-sm text-slate-700"
          />
        </div>

        {/* Get RC */}
        <Button
          disabled={!canOpenDialog}
          onClick={() => setIsDialogOpen(true)}
          className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-base font-semibold"
        >
          Get RC
        </Button>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="rounded-xl">
            Mparivahan
          </Button>
          <Button className="rounded-xl bg-blue-600 hover:bg-blue-700">
            RC Card
          </Button>
          <Button variant="outline" className="rounded-xl">
            RC Card 2
          </Button>
        </div>

        {/* Products */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800">Products</h3>
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.map((p) => (
              <Card key={p.id} className="rounded-xl shadow-sm">
                <CardContent className="p-4">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-slate-500">{p.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800">Recent Transactions</h3>

          {TRANSACTIONS.map((t, i) => (
            <Card key={i} className="rounded-xl shadow-sm">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.id}</p>
                    <p className="text-xs text-slate-500">{t.date}</p>
                  </div>
                </div>
                <p
                  className={`font-semibold ${
                    t.amount < 0 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {t.amount < 0 ? "-" : ""}Rs. {Math.abs(t.amount)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={() => window.open("https://wa.me/919999999999", "_blank")}
        >
          <FaWhatsapp className="w-9 h-9 text-white" />
        </Button>

        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg"
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <LogOut className="w-9 h-9" />
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>Vehicle Details</DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            <p className="text-sm">
              Vehicle: <span className="font-semibold">{vehicleInput}</span>
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">
                It’s a chassis number
              </span>
              <Switch checked={isChassis} onCheckedChange={setIsChassis} />
            </div>

            <div className="space-y-3">
              {[
                { id: "mparivahan", label: "Mparivahan", price: 10 },
                { id: "rc1", label: "RC Card", price: 15 },
                { id: "rc2", label: "RC Card 2", price: 15 },
              ].map((s) => (
                <Button
                  key={s.id}
                  onClick={() => setSelectedService(s.id as any)}
                  className={`w-full justify-between rounded-xl transition ${
                    selectedService === s.id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-blue-50"
                  }`}
                >
                  <span>{s.label}</span>Rs. {s.price}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
