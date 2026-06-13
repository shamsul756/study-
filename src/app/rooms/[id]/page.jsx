
import { Chip } from '@heroui/react';
import { BookOpen, Clock, BarChart, Users } from 'lucide-react';
import Image from 'next/image';

const fetchSingleRooms = async ({ id }) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`
    );
    const data = await res.json();
    return data || {};
};

export default async function RoomDetails({ params }) {
    const { id } = await params;
    const rooms = await fetchSingleRooms({ id });

    const {
        _id,
        image,
        name,
        description,
        floor,
        capacity,
        hourlyRate,
        amenities,
    } = rooms;

    const featuredItems = [
        {
            icon: Clock,
            label: floor ? `Floor ${floor}` : 'N/A',
        },
        {
            icon: BarChart,
            label: hourlyRate ? `$${hourlyRate}/hr` : 'N/A',
        },
        {
            icon: BookOpen,
            label: amenities?.length
                ? `${amenities.length} Amenities`
                : '0 Amenities',
        },
        {
            icon: Users,
            label: capacity
                ? `${capacity} Seats`
                : 'N/A',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                {/* Left Side */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Room Image */}
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover transform transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute top-6 left-6">
                            <Chip
                                color="primary"
                                variant="solid"
                                className="font-bold shadow-xl"
                            >
                                Library Room
                            </Chip>
                        </div>
                    </div>

                    {/* Room Info */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            {name}
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                        {featuredItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200 text-slate-900 font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <item.icon className="w-5 h-5 text-blue-600" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Amenities */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Room Amenities
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {amenities?.map((amenity, index) => (
                                <Chip
                                    key={index}
                                    color="primary"
                                    variant="flat"
                                >
                                    {amenity}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    {/* Room ID */}
                    <p className="text-xs font-bold text-slate-400 italic">
                        Room ID: {_id}
                    </p>

                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">

                        {/* Price */}
                        <div className="space-y-2">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                Booking Rate
                            </p>

                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-slate-900">
                                    ${hourlyRate}
                                </span>

                                <span className="text-slate-500 font-medium">
                                    / hour
                                </span>
                            </div>
                        </div>

                        {/* Room Details */}
                        <div className="space-y-4">
                            <p className="text-slate-700 font-medium">
                                <strong>Room Name:</strong> {name}
                            </p>

                            <div className="w-full h-px bg-slate-100"></div>

                            <ul className="space-y-3">
                                {[
                                    `Floor ${floor}`,
                                    `${capacity} Seat Capacity`,
                                    `${amenities?.length || 0} Amenities`,
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-sm font-bold text-slate-500"
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-center text-xs text-slate-500 font-bold">
                            Available for booking • Quiet Study Environment
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

const NotFound = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h2 className="text-2xl font-bold text-red-500">
                Room not found
            </h2>

            <p className="text-muted-foreground mt-2">
                This library room is currently unavailable.
            </p>
        </div>
    );
};

