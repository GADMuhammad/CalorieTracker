export default function DateComponent({ date }) {
  const parsedDate = new Date(date); // Parse the date string into a Date object

  const month = parsedDate.toLocaleString("en-US", { month: "long" }); // Get long month name
  const day = parsedDate.getDate(); // Get the day of the month
  const year = parsedDate.getFullYear(); // Get the year

  return (
    <>
      <p className="text-xs font-semibold text-red-800">{month}</p>
      <p className="text-xl font-extralight text-black">{day}</p>
      <p className="text-verySmall text-stone-500">{year}</p>
    </>
  );
}
