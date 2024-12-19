import { forwardRef } from "react";

const INPUT_STYLE =
    "mb-5 box-border block w-full mt-2 rounded-md p-2.5 text-base -caret--theme-color-normal -bg--theme-background-light -text--theme-color-dark placeholder:text-gray-500 border-solid border-2 border-transparent focus:-border--theme-color-normal focus:outline-none",
  ContainerOfLabelAndInputStyle = "max-md:col-span-2",
  FORM_LABEL_STYLE = "-text--theme-color-dark";

export default forwardRef(function FormInput({ id, ...props }, ref) {
  return (
    <div className={ContainerOfLabelAndInputStyle}>
      <label className={FORM_LABEL_STYLE} htmlFor={id}>
        {id.charAt(0).toUpperCase() + id.slice(1)}:
      </label>

      {props.type === "select" ? (
        <select className={INPUT_STYLE} name={id} id={id} {...props}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks - Junk food">Snacks - Junk food</option>
          <option value="Dessert">Dessert</option>
          <option value="Suhoor">Suhoor</option>
        </select>
      ) : (
        <input className={INPUT_STYLE} name={id} id={id} {...props} ref={ref} />
      )}
    </div>
  );
});
