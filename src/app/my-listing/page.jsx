import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-listings/${session?.user?.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const rooms = await res.json();

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">My Listings</h1>

      {rooms.length === 0 ? (
        <p>No rooms added yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="border rounded-xl overflow-hidden"
            >
              <Image
                src={room.image}
                alt={room.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-xl">
                  {room.name}
                </h2>

                <p className="text-slate-500">
                  {room.floor}
                </p>

                <p className="font-semibold mt-2">
                  ${room.hourlyRate}/hour
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListing;