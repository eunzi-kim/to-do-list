function Setting() {
  const colorStyle = {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    display: "flex",
    background: "#fff",
    borderRadius: "10px",
    padding: "1px 15px",
  };

  const blueStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "rgb(146, 168, 209)",
    margin: "5px",
    cursor: "pointer",
  };

  const pinkStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "5px",
    background: "#f7cac9",
    cursor: "pointer",
  };

  const greenStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "5px",
    background: "#6bc59c",
    cursor: "pointer",
  };

  const onClickColor = (color) => {
    let pre = document.body.classList[0];
    document.body.classList.remove(pre);

    document.body.classList.add(color);
    localStorage.setItem("color", JSON.stringify(color));
  };

  return (
    <div style={colorStyle}>
      <div onClick={() => onClickColor("pink")} style={pinkStyle}></div>
      <div onClick={() => onClickColor("blue")} style={blueStyle}></div>
      <div onClick={() => onClickColor("green")} style={greenStyle}></div>
    </div>
  );
}

export default Setting;
