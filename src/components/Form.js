import React from "react";

function Form({ onHandleChange, onHandleSubmit, value }) {
  return (
    <form
      style={{ display: "flex", margin: "1rem 0" }}
      onSubmit={onHandleSubmit}
    >
      <input
        id="ID_INPUT_BOX"
        type="text"
        name="value"
        style={{
          flex: "10",
          padding: "5px",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
        }}
        placeholder="해야 할 일을 입력하세요."
        onChange={onHandleChange}
        value={value}
      />
      <input type="submit" value="입력" style={{ flex: "1" }} />
    </form>
  );
}

export default Form;
