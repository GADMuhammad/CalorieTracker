import { memo, useMemo, useRef } from "react";
import Modal from "react-modal";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

function CaloriesRecordAdd({
  setDisplayedRecords,
  currentDate,
  isModalOpen,
  setIsModalOpen,
  DEFAULT_VALUES,
  mealRecord,
  setMealRecord,
  formattedDate,
}) {
  const reset = () => {
    setIsModalOpen(false);
    setMealRecord(DEFAULT_VALUES);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const previousRecords = JSON.parse(localStorage.getItem("records"));

    const recordWithFormattedDate = {
      ...mealRecord,
      date: new Date(mealRecord.date),
    };

    // prettier-ignore
    localStorage.setItem("records", JSON.stringify([recordWithFormattedDate, ...previousRecords]));

    (currentDate === formattedDate(recordWithFormattedDate.date) ||
      currentDate === "") &&
      setDisplayedRecords((prev) => [recordWithFormattedDate, ...prev]);

    reset();
  };

  const isFormValid = useMemo(
    () => mealRecord.content && mealRecord.calories !== "",
    [mealRecord.content, mealRecord.calories],
  );

  const formInputsData = [
    {
      id: "date", // id - name - type - label - htmlFor
      type: "date",
      onChange: (e) => setMealRecord({ ...mealRecord, date: e.target.value }),
    },
    {
      id: "meal",
      type: "select",
      onChange: (event) =>
        setMealRecord({ ...mealRecord, meal: event.target.value }),
    },
    {
      id: "content",
      type: "text",
      placeholder: "what did you eat?",
      onChange: (event) =>
        setMealRecord({ ...mealRecord, content: event.target.value }),
    },
    {
      id: "calories",
      type: "number",
      placeholder: "type a number...",
      onChange: (event) =>
        setMealRecord({ ...mealRecord, calories: +event.target.value }),
      onBeforeInput: () =>
        mealRecord.calories === 0 &&
        setMealRecord((prev) => ({ ...prev, calories: "" })),
      ref: useRef(),
      min: 0,
    },
  ];

  const formButtonsDetails = [
    {
      label: "Submit",
      additionStyles:
        "cursor-pointer -border--theme-color-normal -bg--theme-color-normal -text--theme-background-light hover:scale-102 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:scale-100",
      disabled: !isFormValid,
    },
    {
      label: "Cancel Record",
      additionStyles:
        "-text--theme-background-normal border-2 border-solid -border--theme-color-normal font-mono",
      onClick: reset,
      type: "button",
    },
  ];

  return (
    <Modal
      onAfterOpen={() => formInputsData[2].ref.current.focus()}
      isOpen={isModalOpen}
      className="m-auto w-full border-transparent p-10 outline-none"
    >
      <form
        onSubmit={onSubmit}
        className="m-auto grid w-10/12 animate-down grid-cols-2 gap-4 rounded-xl border-2 border-solid -border--theme-color-normal -bg--theme-background-ultralight p-5"
      >
        {formInputsData.map((input) => (
          <FormInput key={input.id} value={mealRecord[input.id]} {...input} />
        ))}

        <div className="col-span-full flex min-w-full gap-10 max-md:flex-col">
          {formButtonsDetails.map((button) => (
            <FormButton key={button.label} {...button} />
          ))}
        </div>

        <p
          className={`col-span-full mt-2 text-left italic ${isFormValid ? "text-transparent" : "animate-pulse -text--theme-color-normal"}`}
        >
          Fill the form to submit !!
        </p>
      </form>
    </Modal>
  );
}

export default memo(CaloriesRecordAdd);
