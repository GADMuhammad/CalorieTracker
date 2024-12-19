const BUTTON_FORM_STYLES =
  "block w-full rounded-3xl py-1 text-lg transition-all duration-300 active:scale-95";

export default function FormButton({ label, additionStyles, ...props }) {
  return (
    <button {...props} className={`${BUTTON_FORM_STYLES} ${additionStyles}`}>
      {label}
    </button>
  );
}
