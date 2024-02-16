import { IBooking } from "../models/IBookings";

export const AvailableTables = (bookings: IBooking[], date: string, persons: number) => {
  const filteredBookings = bookings.filter((booking) => booking.date === date);
  const filteredTime = filteredBookings.filter((time) => time.time === "18:00");
  const filteredTimeLate = filteredBookings.filter((time) => time.time === "21:00");
  console.log("Alla bokningar det valada datumet", filteredBookings);
  console.log("kl 18", filteredTime, "kl 21:", filteredTimeLate);
  console.log(persons);

  // Beräkna totalt antal bord som behövs för det aktuella datumet och tiden
  const totalTablesNeededForDateTime = Math.ceil(persons / 6);
  console.log(totalTablesNeededForDateTime);

  // Beräkna antalet kvarvarande bord för det aktuella datumet och tiden
  /*   const tablesLeftForDateTime = tablesToBook - totalTablesNeededForDateTime; */
  /*  console.log(tablesLeftForDateTime); */

  /* slutliga resultat ska se ut [{ time: "18:00" }, { time: "21:00" }] */
  return <></>;
};
