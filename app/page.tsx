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
  "https://dummyimage.com/900x300/22c55e/ffffff&text=PAY+₹500+GET+₹1000+BALANCE";

const offerImageFromBackend: string | null = OFFER_IMAGE;

const PRODUCTS = [
  { id: 1, title: "Solar Panel", price: "₹25,000" },
  { id: 2, title: "Fastag", price: "₹500" },
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
    <div className="min-h-screen bg-slate-50 pb-32">
      <div className="max-w-lg mx-auto px-4 pt-6 space-y-7">
        {offerImageFromBackend?.trim() && (
          <div className="w-full rounded-3xl overflow-hidden shadow-md">
            <img
              src={offerImageFromBackend}
              alt="Offer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <Card className="rounded-3xl shadow-md bg-gradient-to-br from-blue-600 to-blue-500 text-white">
          <CardContent className="p-7 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-90">My Balance</p>
                <p className="text-5xl font-bold mt-1">₹55.00</p>
              </div>
              <Wallet className="w-9 h-9 opacity-90" />
            </div>

            <div className="bg-white/10 rounded-2xl px-6 py-4">
              <p className="font-semibold text-lg">Ankit Sharma</p>
              <p className="text-sm opacity-80">9571082881</p>
            </div>
          </CardContent>
        </Card>

        <div className="w-full bg-white rounded-2xl shadow-md px-6 py-5 flex items-center gap-4 focus-within:ring-2 focus-within:ring-blue-500">
          <Truck className="w-6 h-6 text-blue-600" />
          <input
            value={vehicleInput}
            onChange={(e) => setVehicleInput(e.target.value)}
            placeholder="Enter Vehicle or Chassis Number"
            className="
              flex-1 bg-transparent outline-none
              text-base text-slate-900
              placeholder:text-slate-400
            "
          />
        </div>

        <Button
          disabled={!canOpenDialog}
          onClick={() => setIsDialogOpen(true)}
          className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-semibold shadow-md"
        >
          Get RC
        </Button>

        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="h-14 rounded-2xl">
            Mparivahan
          </Button>
          <Button className="h-14 rounded-2xl bg-blue-600 hover:bg-blue-700">
            RC Card
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl">
            RC Card 2
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800">Products</h3>
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.map((p) => (
              <Card key={p.id} className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <p className="font-semibold text-base text-slate-900">
                    {p.title}
                  </p>
                  <p className="text-sm text-slate-500">{p.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800">Recent Transactions</h3>

          {TRANSACTIONS.map((t, i) => (
            <Card
              key={i}
              className="
                    w-full rounded-2xl shadow-md
                    transition-all duration-200
                    hover:shadow-xl hover:-translate-y-[2px]
                    hover:bg-slate-50
                    cursor-pointer
                  "
            >
              <CardContent className="p-6 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.id}</p>
                    <p className="text-sm text-slate-500">{t.date}</p>
                  </div>
                </div>

                <span
                  className={`px-4 py-2 rounded-xl font-semibold text-sm ${
                    t.amount < 0
                      ? "bg-red-50 text-red-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {t.amount < 0 ? "-" : ""}₹{Math.abs(t.amount)}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl"
          onClick={() => window.open("https://wa.me/919785709719", "_blank")}
        >
          <FaWhatsapp className="w-11 h-11 text-white" />
        </Button>

        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 shadow-xl"
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <LogOut className="w-10 h-10 text-white" />
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="rounded-3xl text-slate-900">
          <DialogHeader>
            <DialogTitle>Vehicle Details</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <p className="text-sm">
              Vehicle: <span className="font-semibold">{vehicleInput}</span>
            </p>

            {[
              { id: "mparivahan", label: "Mparivahan", price: 10 },
              { id: "rc1", label: "RC Card", price: 15 },
              { id: "rc2", label: "RC Card 2", price: 15 },
            ].map((s) => {
              const active = selectedService === s.id;

              return (
                <Button
                  key={s.id}
                  variant={active ? "default" : "outline"}
                  onClick={() => setSelectedService(s.id as any)}
                  className={`w-full h-14 rounded-2xl justify-between ${
                    active
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "text-slate-800"
                  }`}
                >
                  <span className="font-medium">{s.label}</span>
                  <span className="font-semibold">₹{s.price}</span>
                </Button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
