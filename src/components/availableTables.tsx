import { useBookingContext } from "../context/BookingContext";

export const AvailableTables = (
  date: string,
  persons: number,
  setHasCheckedAvailability: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const tablesToBook = 15;
  const { bookings } = useBookingContext();

  // Beräkna totalt antal bord som behövs vid bokning, alltså hur många gäster vill användaren boka för?
  const totalTablesNeeded = Math.ceil(persons / 6);
  console.log("Antal bord som behövs", totalTablesNeeded);

  // Filtrera ut bokningar på det aktuella datumet som användare klickat på
  const filteredBookingsByDate = bookings.filter((booking) => booking.date === date);
  // Filtrera ut bokningar på de olika tiderna för det akutella datumet
  const bookingsEarlyTime = filteredBookingsByDate.filter((time) => time.time === "18:00");
  const bookingsLateTime = filteredBookingsByDate.filter((time) => time.time === "21:00");
  console.log("Alla bokningar det valda datumet", filteredBookingsByDate);
  console.log("kl 18", bookingsEarlyTime, "kl 21:", bookingsLateTime);

  let totalTablesBookedEarly = 0;
  // Gå igenom alla bokningar för den tidiga tiden och summera antalet bord redan bokade
  bookingsEarlyTime.forEach((booking) => {
    const numberOfGuests = booking.numberOfGuests;
    // För vardera bokning räknas det ut hur många bord som är bokade baserat på antalet gäster
    totalTablesBookedEarly += Math.ceil(numberOfGuests / 6);
  });
  console.log("Totalt antal bord redan bokade för tidig tid:", totalTablesBookedEarly);

  let totalTablesBookedLate = 0;
  // Samma sak för den sena tiden som den tidiga
  bookingsLateTime.forEach((booking) => {
    const numberOfGuests = booking.numberOfGuests;
    totalTablesBookedLate += Math.ceil(numberOfGuests / 6);
  });
  console.log("Totalt antal bord redan bokade för sen tid:", totalTablesBookedLate);

  // Beräkna hur många bord det finns kvar att boka
  const tablesLeftToBookEarly = tablesToBook - totalTablesBookedEarly;
  console.log("antal bord det finns kvar att boka kl 18:00", tablesLeftToBookEarly);

  // Beräkna totalt antal borden redan bokade för det aktuella datumet och den sena tiden, samt hur många bord det finns kvar att boka
  const tablesLeftToBookLate = tablesToBook - totalTablesBookedLate;
  console.log("antal bord det finns kvar att boka kl 21:00", tablesLeftToBookLate);

  if (tablesLeftToBookEarly >= totalTablesNeeded || tablesLeftToBookLate >= totalTablesNeeded) {
    setHasCheckedAvailability(true);
  } else {
    setHasCheckedAvailability(false);
  }

  return null;
};

export default AvailableTables;
