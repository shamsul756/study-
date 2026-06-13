import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import RoomsFeaturedCard from "./RoomsFeatureCard";
import { RoomsFetured } from "@/lib/rooms/data";

const FeaturedRooms = async () => {
    const rooms = await RoomsFetured();
    

    return (
        <section className="py-24 bg-slate-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm text-center">Top Rated</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 text-center">Featured Study <span className="text-cyan-800">Spaces</span></h3>
                        <p className="text-slate-500 max-w-xl text-center">
                            Handpicked premium rooms and workspaces designed to give you the ultimate environment for deep focus and productivity.
                        </p>
                    </div>
                  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                    rooms?.map(room => <RoomsFeaturedCard key={room?._id} room={room} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedRooms;