import { Chip } from "@heroui/react";
import { Users, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RoomsFeaturedCard = ({ room }) => {
    // Correctly destructuring based on your actual data schema
    const { _id, image, name, description, floor, capacity, hourlyRate, amenities } = room;

    return (
        <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300">
            
            {/* Thumbnail Image Container */}
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <Image 
                    src={image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'}
                    alt={name || "Featured Room"}
                    // Using "fill" properly requires removing fixed height/width attributes
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Floor/Category Tag */}
                <div className="absolute top-3 right-3">
                    <Chip
                        size="sm"
                        className="bg-white/90 backdrop-blur-md text-slate-800 font-bold text-[10px] uppercase tracking-wide border border-white/20 shadow-xs"
                    >
                        {floor || "Premium"}
                    </Chip>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col grow space-y-3">
                <Link href={`/rooms/${_id}`}>
                    <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight text-base">
                        {name}
                    </h4>
                </Link>
                
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {description}
                </p>

                {/* Meta Row: Capacity and Pricing */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{capacity || "1-2 Pax"}</span>
                    </div>
                    
                    <div className="flex items-baseline gap-0.5">
                        {/* Strips out extra "$/hr" symbols if backend includes them to prevent duplicate strings */}
                        <span className="font-extrabold text-blue-600 text-lg">
                            {hourlyRate?.includes('$') ? hourlyRate.split('/')[0] : `$${hourlyRate}`}
                        </span>
                        {!hourlyRate?.includes('/hr') && <span className="text-[10px] font-semibold text-slate-400">/hr</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsFeaturedCard;