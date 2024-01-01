import { ChangeEvent, FC, useState } from "react";
import { TextFieldWrapper } from "./TextField.styled";

interface TextFieldProps {
  rows?: number;
  label: string;
  $width?: string;
  placeholder: string;
  onChange: (value: string) => void;
  showCloseButton?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  placeholder,
  label,
  $width,
  rows = 1,
  onChange,
  showCloseButton = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const handleDeleteInput = () => {
    setInputValue("");
    onChange("");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  };

  return (
    <TextFieldWrapper $width={$width}>
      <label>{label}</label>
      <div className="textField-container">
        <textarea
          id="input"
          rows={rows}
          value={inputValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {inputValue && showCloseButton && isFocused && (
          <img
            src="./icons/close-button.svg"
            onClick={handleDeleteInput}
            alt="close"
            className={rows > 1 ? "left-icon" : ""}
          />
        )}
      </div>
    </TextFieldWrapper>
  );
};

export default TextField;
