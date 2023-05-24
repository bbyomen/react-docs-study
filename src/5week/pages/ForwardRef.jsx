import {
  useRef,
  forwardRef,
  HTMLInputTypeAttribute,
  HTMLAttributes,
} from "react";

const MyInput = (props) => {
  return <input {...props} />;
};

export default function MyForm() {
  const innerInputRef = useRef(null);
  const childInputRef = useRef(null);

  function handleClick() {
    innerInputRef.current?.focus();
    // childInputRef.current?.focus();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        width: "300px",
      }}
    >
      <input
        ref={innerInputRef}
        placeholder="innerInput"
        style={{ padding: "20px" }}
      />
      <MyInput
        ref={childInputRef}
        placeholder="childInput"
        style={{ padding: "20px" }}
      />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
