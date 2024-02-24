import React from "react";

const CustomDataTableComponent = ({ data, style, headData, bodyData }) => {
  const renderManipulateTh = () => {
    const arr = [];
    for (let i = 0; i < headData.length; i++) {
      arr.push(
        <th key={i} style={{ borderStyle: "solid", borderColor: "black" }}>
          {headData[i]}
        </th>
      );
    }
    return arr;
  };

  const renderManipulateTd = (index) => {
    const arr = [];

    for (let i = 0; i < bodyData.length; i++) {
      arr.push(
        <td key={i} style={{ borderStyle: "solid", borderColor: "black" }}>
          {data[index]?.[bodyData[i]]}
        </td>
      );
    }
    return arr;
  };

  return (
    <>
      <table style={style}>
        <thead>
          <tr>{renderManipulateTh()}</tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>{renderManipulateTd(index)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomDataTableComponent;

CustomDataTableComponent.defaultProps = {
  label: "Default Table Label",
};
