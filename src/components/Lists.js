import React, { useEffect, useState } from "react";

function Lists({ todoData, onChangeCheckBox, onClickDelete, onUpdateData }) {
  const btnStyle = {
    color: "#FFF",
    backgroundColor: "gray",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    marginLeft: "10px",
  };

  const btnEditStyle = {
    backgroundColor: "darkgray",
    color: "#FFF",
    border: "none",
    padding: "5px 9px",
    borderRadius: "15%",
    margin: "0 2px",
  };

  const listStyle = {
    padding: "25px 10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: "none",
  };

  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState("");

  const onClickEdit = (id) => {
    setEditId(id);

    let data = todoData.filter((data) => data.id === id);
    setEditValue(data[0]["title"]);
  };

  const onCancelEdit = () => {
    setEditId("");
    setEditValue("");
  };

  const onChangeEdit = (e) => {
    setEditValue(e.target.value);
  };

  useEffect(() => {
    onCancelEdit();
  }, [todoData]);

  return (
    <div className="lists" style={{ overflowY: "auto", maxHeight: "50vh" }}>
      {todoData.map((data) => (
        <div style={listStyle} key={data.id}>
          <div
            style={{
              verticalAlign: "middle",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                defaultChecked={data.completed}
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
                onChange={() => onChangeCheckBox(data.id)}
              />
              {data.id === editId ? (
                <input
                  defaultValue={editValue}
                  style={{ padding: "3px 5px" }}
                  onChange={onChangeEdit}
                />
              ) : (
                <>
                  {" "}
                  {data.completed ? (
                    <span style={{ textDecoration: "line-through" }}>
                      {data.title}
                    </span>
                  ) : (
                    <span>{data.title}</span>
                  )}
                </>
              )}
            </div>

            <div>
              {data.id === editId ? (
                <>
                  <button
                    style={btnEditStyle}
                    onClick={() => onUpdateData(data.id, editValue)}
                    className="btnEditOk"
                  >
                    OK
                  </button>
                  <button style={btnEditStyle} onClick={onCancelEdit}>
                    cancel
                  </button>
                </>
              ) : (
                <button
                  style={btnEditStyle}
                  onClick={() => onClickEdit(data.id)}
                >
                  edit
                </button>
              )}

              <button style={btnStyle} onClick={() => onClickDelete(data.id)}>
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lists;
