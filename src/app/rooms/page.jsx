import RoomsCards from "@/Components/RoomsCards";
import RoomesHeader from "@/Components/RoomsHeader";
import { fetchingRooms } from "@/lib/rooms/data";

// import { fetchRooms } from "@/lib/rooms/data";
import { Button } from "@heroui/react";
import { BookOpen, Filter } from "lucide-react";


// { searchParams }
// // console.log(searchParams);
// const sParams = await searchParams;
// // console.log(sParams);
// const rooms = await fetchRooms(sParams?.searchTerm || "");



const RoomsPage = async () => {
    const rooms = await fetchingRooms();
   
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <RoomesHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        All Rooms
                    </h2>
                    <Button
                        variant="flat"
                        startContent={<Filter className="w-4 h-4" />}
                        className="rounded-full font-bold"
                    >
                        Filters
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        rooms?.map((room) => <RoomsCards key={room._id} room={room} />
                        )
                    }
                </div>


            </main>
        </div>
    );
};
export default RoomsPage;
