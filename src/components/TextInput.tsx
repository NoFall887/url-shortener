import React from "react";

interface Props {
  state: string;
  setStateAction: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  disabled: boolean;
}

const TextInput: React.FC<Props> = ({
  state,
  setStateAction,
  label,
  disabled,
}) => {
  return (
    <>
      <label
        htmlFor="url-input"
        className=" text-violet-700 font-bold text-2xl mb-2 text-center"
      >
        {label}
      </label>
      <input
        className=" border-violet-500 border-2 focus:outline-none focus:shadow-outline disabled:opacity-60 p-2 font-medium text-lg"
        name="url-input"
        id="url-input"
        type={"text"}
        onChange={(e) => setStateAction(e.target.value)}
        value={state}
        placeholder="Enter url..."
        required
        disabled={disabled}
      />
    </>
  );
};

export default TextInput;
