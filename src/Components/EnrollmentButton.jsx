"use client";


import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function EnrollmentButton({ room }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleEnroll = async () => {
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;

    if (!token) {
      toast.error("Authentication failed");
      return;
    }

 const updateData = {
  userId: session?.user?.id,
  studentName: session?.user?.name,
  studentEmail: session?.user?.email,
  studentImage: session?.user?.image,
  image: room?.image,
  title: room?.name,
  description:room?.description
};
console.log(updateData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/enrollments/${room?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      }
    );

   const data = await res.json();
   if(!data){
    toast.error("something went wrong")
    return
   }
   router.push("/my-booking")
  };

  return (
    <Button
      color="primary"
      size="lg"
      className="w-full font-bold shadow-lg mt-4"
      onPress={handleEnroll}
    >
      Enroll Now
    </Button>
  );
}