import { Button, Chip } from "@heroui/react";
import { MoveRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RoomsCards = ({ room }) => {
  const { _id, image, name, description, floor, capacity, hourlyRate, amenities } = room;

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300">
      
      {/* Image / Header Media Section */}
      <div className="relative overflow-hidden aspect-16/10 bg-slate-100">
        <Image
          alt={name}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          fill
          sizes="(max-w-7xl) 33vw, 50vw"
        />
        {/* Subtle Overlay Gradient for Depth */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent" />
        
        {/* Floating Floor Tag */}
        <div className="absolute top-4 left-4">
          <Chip 
            size="sm" 
            className="bg-white/90 backdrop-blur-md text-slate-800 font-semibold tracking-wide shadow-xs border border-white/40"
          >
            {floor}
          </Chip>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col grow space-y-5">
        
        {/* Text Details */}
        <div className="space-y-2">
          <Link href={`/rooms/${_id}`}>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight line-clamp-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          </Link>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Capacity Indicator & Meta Specs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-lg p-2 w-fit">
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span>Capacity: <span className="text-slate-900">{capacity} Pax</span></span>
        </div>

        {/* Amenities Minimal Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {amenities?.slice(0, 3).map((item, index) => (
            <span 
              key={index} 
              className="text-[11px] font-medium px-2.5 py-1 bg-slate-100/70 text-slate-600 rounded-md border border-slate-200/40"
            >
              {item}
            </span>
          ))}
          {amenities?.length > 3 && (
            <span className="text-[11px] font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
              +{amenities.length - 3} More
            </span>
          )}
        </div>

        {/* Pricing and CTA Action Footer */}
        <div className="pt-4 mt-auto border-t border-slate-100 flex justify-between items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Hourly Rate</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-extrabold text-slate-900">${hourlyRate}</span>
              <span className="text-xs font-medium text-slate-500">/hr</span>
            </div>
          </div>

          <Link href={`/rooms/${_id}`} className="shrink-0">
            <Button 
              variant="solid" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl px-5 h-10 shadow-xs transition-colors group/btn"
            >
              <span className="flex items-center gap-1.5">
                View Details
                <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RoomsCards;