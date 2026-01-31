"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const VEHICLES = [
  {
    id: 1,
    vehicleNo: "HR26DK8337",
    chassisNo: "MA3EWB32S00K12345",
    date: "29 Jan 2026",
    response: {
      ownerName: "Ankit Sharma",
      vehicleClass: "LMV",
      fuelType: "Petrol",
      registrationDate: "12-06-2021",
      rcStatus: "Active",
      address: {
        plot_no: "ldkmcds",
        gali_no: "dncd",
        locality: "dkncdwnck",
        landmark: "pwodpedew",
        city: "Gurgaon",
        state: "Haryana",
        pincode: "122001",
        country: "cdmcdk",
      },
    },
  },
  {
    id: 2,
    vehicleNo: "RJ14UQ0173",
    chassisNo: "MBJAXXMRJAX123456",
    date: "28 Jan 2026",
    response: {
      ownerName: "Rohit Verma",
      vehicleClass: "MCWG",
      fuelType: "Petrol",
      registrationDate: "03-11-2020",
      rcStatus: "Active",
      address: {
        plot_no: "ldkmcds",
        gali_no: "dncd",
        locality: "dkncdwnck",
        landmark: "pwodpedew",
        city: "Jaipur",
        state: "Rajasthan",
        pincode: "302001",
        country: "cdmcdk",
      },
    },
  },
];

export default function VehiclesPage() {
  const [open, setOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const openModal = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setOpen(true);
  };

  return (
    <div className="space-y-6 px-4 sm:px-0">
      <h1 className="text-xl font-semibold text-slate-800">Vehicles</h1>

      {/* TABLE */}
      <div className="-mx-4 sm:mx-0">
        <div className="overflow-x-auto overflow-y-hidden border rounded-xl bg-white">
          <table className="min-w-[900px] w-full border-collapse">
            <thead className="bg-slate-700 text-white sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Vehicle No
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Chassis No
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Date
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {VEHICLES.map((v) => (
                <tr
                  key={v.id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-3 text-sm">{v.id}</td>
                  <td className="px-4 py-3 font-medium">{v.vehicleNo}</td>
                  <td className="px-4 py-3 text-sm">{v.chassisNo}</td>
                  <td className="px-4 py-3 text-sm">{v.date}</td>
                  <td className="px-4 py-3 text-center">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => openModal(v)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}

              {VEHICLES.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-slate-500">
                    No vehicles found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* VIEW MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl rounded-2xl">
          <DialogHeader>
            <DialogTitle>Vehicle Details</DialogTitle>
          </DialogHeader>

          {selectedVehicle && (
            <div className="space-y-4">
              {/* Vehicle Number */}
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-sm text-slate-500">Vehicle Number</p>
                <p className="font-semibold text-slate-800">
                  {selectedVehicle.vehicleNo}
                </p>
              </div>

              {/* JSON RESPONSE */}
              <div className="rounded-xl border bg-black text-green-400 p-4 max-h-[350px] overflow-auto text-sm">
                <pre className="whitespace-pre-wrap break-all">
                  {JSON.stringify(selectedVehicle.response, null, 2)}
                </pre>
              </div>

              {/* CLOSE BUTTON */}
              <div className="flex justify-end text-red-500">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
