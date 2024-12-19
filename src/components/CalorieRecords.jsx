import { memo } from "react";
import Date from "./Date";

function CalorieRecords({
  record,
  onDeleteMeal,
  isModalOpen,
  setDisplayedRecords,
}) {
  const { date, meal, content, calories } = record;

  const updateCalories = (key, change) => {
    const currentRecordInfo = (currentRecord) =>
      `${currentRecord.calories}${currentRecord.meal}${currentRecord.date}${currentRecord.content}`;

    setDisplayedRecords((prev) =>
      prev.map((record) =>
        currentRecordInfo(record) === key
          ? { ...record, calories: record.calories + change }
          : record,
      ),
    );

    const allRecords = JSON.parse(localStorage.getItem("records"));
    const newAllRecords = allRecords.map((record) =>
      currentRecordInfo(record) === key
        ? { ...record, calories: record.calories + change }
        : record,
    );
    localStorage.setItem("records", JSON.stringify(newAllRecords));
  };

  return (
    <ul
      className={`${isModalOpen ? "hidden" : "flex"} mx-auto mb-5 h-fit w-10/12 animate-up select-none list-none flex-wrap items-center justify-around gap-5 rounded-md border-2 border-solid -border--theme-color-normal -bg--theme-background-light p-4 text-stone-500 transition-all duration-300 hover:shadow-day`}
    >
      <li className="grid place-items-center rounded-2xl border-2 border-solid bg-white px-5 py-1 text-blue-950">
        <Date date={date} />
      </li>

      <li>{meal}</li>
      <li>{content}</li>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() =>
            updateCalories(`${calories}${meal}${date}${content}`, 1)
          }
        >
          <ion-icon name="add-circle-outline" />
        </button>
        <li>
          {calories} Calorie
          {calories !== 1 && calories !== -1 && calories !== 0 && "s"}
        </li>
        <button
          onClick={() =>
            updateCalories(`${calories}${meal}${date}${content}`, -1)
          }
        >
          <ion-icon name="remove-circle-outline" />
        </button>
      </div>

      <button
        onClick={() => onDeleteMeal(`${calories}${meal}${date}${content}`)}
        className="cursor-pointer rounded-md border-2 border-solid -border--theme-color-normal px-2 py-1 -text--theme-color-dark transition-colors duration-300 hover:-bg--theme-color-normal hover:text-white"
      >
        Delete
      </button>
    </ul>
  );
}

export default memo(CalorieRecords);
