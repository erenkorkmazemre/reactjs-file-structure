import React from "react";

const CustomTableRow = ({rowContent}) => {

    return (
        <>
            <tr>
                {rowContent.map((val, rowID) => <td  style={{border: "1px solid black"}} key={rowID}>{val}</td>)}
            </tr>
        </>
    )
}

export default CustomTableRow

CustomTableRow.defaultProps = {
    label: "Default Table Label"
}