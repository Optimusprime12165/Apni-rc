"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

type Banner = {
  id: number;
  image: string;
  link?: string;
  active: boolean;
};

const INITIAL_BANNERS: Banner[] = [
  {
    id: 1,
    image: "https://dummyimage.com/600x200/2563eb/ffffff&text=Banner+1",
    link: "https://example.com/offer",
    active: true,
  },
  {
    id: 2,
    image: "https://dummyimage.com/600x200/16a34a/ffffff&text=Banner+2",
    link: "",
    active: false,
  },
];

export default function BannerPage() {
  const [banners, setBanners] = useState<Banner[]>(INITIAL_BANNERS);
  const [open, setOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const [imagePreview, setImagePreview] = useState("");
  const [link, setLink] = useState("");

  /* ---------------- OPEN ADD ---------------- */
  const openAddModal = () => {
    setEditingBanner(null);
    setImagePreview("");
    setLink("");
    setOpen(true);
  };

  /* ---------------- OPEN EDIT ---------------- */
  const openEditModal = (banner: Banner) => {
    setEditingBanner(banner);
    setImagePreview(banner.image);
    setLink(banner.link || "");
    setOpen(true);
  };

  /* ---------------- IMAGE PICK ---------------- */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));
  };

  /* ---------------- SAVE ---------------- */
  const handleSave = () => {
    if (!imagePreview) {
      alert("Please select banner image");
      return;
    }

    setBanners((prev) => {
      if (editingBanner) {
        return prev.map((b) =>
          b.id === editingBanner.id ? { ...b, image: imagePreview, link } : b,
        );
      }

      return [
        ...prev,
        {
          id: prev.length + 1,
          image: imagePreview,
          link,
          active: false,
        },
      ];
    });

    setOpen(false);
  };

  /* ---------------- TOGGLE ACTIVE ---------------- */
  const toggleStatus = (id: number) => {
    setBanners((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, active: !b.active } : { ...b, active: false },
      ),
    );
  };

  return (
    <div className="space-y-6 px-4 sm:px-0">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-slate-800">Banners</h1>
        <Button
          onClick={openAddModal}
          className="bg-blue-600 hover:bg-blue-700"
        >
          + Add Banner
        </Button>
      </div>

      {/* TABLE */}
      <div className="-mx-4 sm:mx-0">
        <div className="overflow-x-auto border rounded-xl bg-white">
          <table className="min-w-[750px] w-full border-collapse">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm">ID</th>
                <th className="px-4 py-3 text-left text-sm">Banner</th>
                <th className="px-4 py-3 text-left text-sm">Link</th>
                <th className="px-4 py-3 text-center text-sm">Status</th>
                <th className="px-4 py-3 text-center text-sm">Action</th>
              </tr>
            </thead>

            <tbody>
              {banners.map((b) => (
                <tr key={b.id} className="border-t hover:bg-slate-50">
                  <td className="px-4 py-3">{b.id}</td>

                  <td className="px-4 py-3">
                    <img
                      src={b.image}
                      className="w-24 h-12 object-cover rounded-md border"
                    />
                  </td>

                  <td className="px-4 py-3 text-sm text-blue-600">
                    {b.link ? (
                      <a href={b.link} target="_blank" className="underline">
                        {b.link}
                      </a>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <Switch
                      checked={b.active}
                      onCheckedChange={() => toggleStatus(b.id)}
                    />
                  </td>

                  <td className="px-4 py-3 text-center">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditModal(b)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}

              {banners.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    No banners found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingBanner ? "Edit Banner" : "Add Banner"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Banner Image</label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {imagePreview && (
              <img
                src={imagePreview}
                className="w-full h-32 object-cover rounded-lg border"
              />
            )}

            <div>
              <label className="text-sm font-medium">
                Banner Link (Optional)
              </label>
              <Input
                placeholder="https://example.com"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
