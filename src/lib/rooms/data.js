// export const fetchRooms = async (searchTerm = '') => {
//   console.log();

//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms?search=${searchTerm}`);
export const fetchingRooms = async ({ searchTerm = "" }) => {
    const res = await fetch(`http://localhost:8000/rooms?search=${searchTerm}`);
    const data = await res.json();
    return data || [];
}
// };

export const RoomsFetured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
    const data = await res.json();
    return data || [];
} 