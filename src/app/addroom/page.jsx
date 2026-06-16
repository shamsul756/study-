"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { PlusCircle, Info, Image as ImageIcon, Layers, Users, DollarSign } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const AMENITIES_OPTIONS = [
  "Whiteboard", "Projector", "Wi‑Fi", "Power Outlets", "Quiet Zone", "Air Conditioning"
];

const AddRooms = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "", description: "", image: "", floor: "", capacity: "", hourlyRate: "",
  });
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((item) => item !== amenity) : [...prev, amenity]
    );
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const roomData = {
    name: formData.name,
    description: formData.description,
    image: formData.image,
    floor: formData.floor,
    capacity: Number(formData.capacity),
    hourlyRate: Number(formData.hourlyRate),
    amenities: selectedAmenities,
  };

  try {
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(roomData),
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Room added successfully!");

      setTimeout(() => {
        router.push("/my-listing");
      }, 1200);
    } else {
      toast.error(data?.message || "Failed to add room");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
        
        <div className="bg-linear-to-r from-blue-600 to-blue-800 p-8 text-white text-center">
          <h1 className="text-3xl font-black flex items-center justify-center gap-2">
            <PlusCircle className="w-8 h-8" /> Add New Premium Room
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
          {/* Room Name */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-600" /> Room Name *
            </label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g., Executive Boardroom" className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Description *</label>
            <textarea name="description" required rows={4} value={formData.description} onChange={handleChange} placeholder="Describe the room..." className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all resize-none" />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-600" /> Image URL *
            </label>
            <input type="url" name="image" required value={formData.image} onChange={handleChange} placeholder="https://images.unsplash.com/..." className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all" />
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Layers className="w-4 h-4 text-blue-600" /> Floor</label>
              <input type="text" name="floor" value={formData.floor} onChange={handleChange} placeholder="e.g., 3rd Floor" className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Users className="w-4 h-4 text-blue-600" /> Capacity</label>
              <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} placeholder="e.g., 4" className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><DollarSign className="w-4 h-4 text-blue-600" /> Hourly Rate ($)</label>
              <input type="number" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} placeholder="e.g., 5" className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none" />
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <label className="text-sm font-bold text-slate-700">Select Amenities</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {AMENITIES_OPTIONS.map((amenity) => (
                <label key={amenity} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer font-bold text-sm transition-all select-none ${selectedAmenities.includes(amenity) ? "bg-blue-50 border-blue-600 text-blue-700" : "bg-white border-slate-200 text-slate-600"}`}>
                  <input type="checkbox" checked={selectedAmenities.includes(amenity)} onChange={() => handleCheckboxChange(amenity)} className="w-4 h-4 text-blue-600" />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" disabled={loading} className="w-full h-14 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg disabled:opacity-50">
              {loading ? "Adding Room..." : "Publish Room Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRooms;