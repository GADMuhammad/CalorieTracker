import { useState } from "react";
import CalorieRecords from "./components/CalorieRecords";
import CaloriesRecordAdd from "./components/CaloriesRecordAdd";

const BUTTONS_STYLES =
  "rounded-3xl border-2 border-solid border-transparent -bg--theme-color-normal px-5 py-2 text-base text-white transition-transform duration-300 hover:scale-105 hover:-border--theme-color-normal hover:bg-transparent hover:-text--theme-color-dark outline-none";

function App() {
  const loadDate = () =>
    JSON.parse(localStorage.getItem("records")) ??
    (localStorage.setItem("records", JSON.stringify([])) || []);

  const filterDate = (filter1, filter2) => {
    const recordDate = new Date(filter1); // Convert string to Date object
    return (
      recordDate.getDate() === filter2.getDate() &&
      recordDate.getMonth() === filter2.getMonth() &&
      recordDate.getFullYear() === filter2.getFullYear()
    );
  };

  const displayedRecordsInitial = loadDate().filter((record) =>
    filterDate(record.date, new Date()),
  );

  const [currentDate, setCurrentDate] = useState(new Date()),
    [displayedRecords, setDisplayedRecords] = useState(displayedRecordsInitial),
    [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = (date) => {
    // IMPORTANT FUNCTION
    const year = date.getFullYear(),
      month = String(date.getMonth() + 1).padStart(2, "0"),
      day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const DEFAULT_VALUES = {
    date: formattedDate(new Date()),
    meal: "Breakfast",
    content: "",
    calories: 0,
  };

  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUES);

  const onDeleteMeal = (key) => {
    // prettier-ignore
    const filterRecords = (records) => records.filter(({ calories, meal, date, content }) => `${calories}${meal}${date}${content}` !== key);
    const newRecords = filterRecords(loadDate());
    setDisplayedRecords((prevRecords) => filterRecords(prevRecords));
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  const dateFilter = (event) => {
    const selectedDate = new Date(event.target.value);
    setCurrentDate(selectedDate);
    setMealRecord({ ...mealRecord, date: event.target.value });

    setDisplayedRecords(
      loadDate().filter((record) => filterDate(record.date, selectedDate)),
    );
  };

  const toDisplayCertainCategory = (newDate, newDisplay) => {
    setCurrentDate(newDate);
    setDisplayedRecords(newDisplay);
  };

  const displayAllRecords = () => toDisplayCertainCategory("", loadDate());

  const displayTodayRecords = () =>
    toDisplayCertainCategory(
      new Date(),
      loadDate().filter((record) => filterDate(record.date, new Date())),
    );

  const buttonsDetails = [
    { label: "Display all records", onClick: displayAllRecords },
    { label: "Display today records", onClick: displayTodayRecords },
    { label: "Add a new record", onClick: () => setIsModalOpen(true) },
  ];

  return (
    <>
      <div
        className={`${isModalOpen ? "hidden" : "flex"} animate-down justify-center gap-5 px-8 max-sm:flex-col`}
      >
        {buttonsDetails.map((button) => (
          <button
            key={button.label}
            onClick={button.onClick}
            className={BUTTONS_STYLES}
          >
            {button.label}
          </button>
        ))}
      </div>

      <CaloriesRecordAdd
        setDisplayedRecords={setDisplayedRecords}
        currentDate={currentDate !== "" ? formattedDate(currentDate) : ""}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        DEFAULT_VALUES={DEFAULT_VALUES}
        mealRecord={mealRecord}
        setMealRecord={setMealRecord}
        formattedDate={formattedDate}
      />

      <div
        className={`${isModalOpen ? "hidden" : "flex"} mb-3 mt-5 animate-up items-center justify-center gap-5 max-very-small-phones:flex-col`}
      >
        <label htmlFor="date-chosen">Select a date to display 📅</label>
        <input
          id="date-chosen"
          type="date"
          value={currentDate !== "" ? formattedDate(currentDate) : ""}
          onChange={dateFilter}
          className="box-border block w-1/3 rounded-lg border-2 border-solid -border--theme-color-normal -bg--theme-background-light p-2.5 text-base -text--theme-color-dark caret-blue-100 placeholder:text-gray-500 focus:-border--theme-color-normal focus:outline-none"
        />
      </div>

      {displayedRecords.length !== 0 ? (
        displayedRecords.map((record) => (
          <CalorieRecords
            record={record}
            key={`${record.calories}${record.meal}${record.date}${record.content}`}
            onDeleteMeal={onDeleteMeal}
            setDisplayedRecords={setDisplayedRecords}
            isModalOpen={isModalOpen}
          />
        ))
      ) : (
        <p
          className={`${isModalOpen ? "hidden" : "block"} my-20 animate-up px-5 font-mono text-3xl -text--theme-color-normal`}
        >
          {`No Records${loadDate().length !== 0 ? " on this day" : ""} To Display🫥.`}
        </p>
      )}

      {displayedRecords.length !== 0 && (
        <p
          className={` ${isModalOpen ? "hidden" : "block"} animate-up px-5 font-mono text-xl -text--theme-color-normal`}
        >
          {`The total calories${currentDate !== "" ? " of this day" : ""} are ${displayedRecords
            .map((record) => record.calories)
            .reduce(
              (acc, cur) => acc + cur,
            )} from ${displayedRecords.length} record${displayedRecords.length > 1 ? "s" : ""}.`}
        </p>
      )}
    </>
  );
}

export default App;
