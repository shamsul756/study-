import Banner from "@/Components/Banner";
import ExtraSection from "@/Components/ExtraSection";
import LibraryCards from "@/Components/LibrayCard";
import Image from "next/image";
import RoomsPage from "./rooms/page";
import FeaturedRooms from "@/Components/FeatureRooms";

export default function Home() {
  return (
    <>
        {/* const { 
            _id, 
            image, 
            name, 
            description, 
            floor, 
            capacity, 
            hourlyRate, 
            amenities 
        } = rooms; */}
    <Banner/>
    
    <FeaturedRooms/>
    <ExtraSection/>
    <LibraryCards/>
    </>
  );
}
