import React from "react";
import CustomTable from "@components/customTable";
import CustomTableRow from "@components/customTable/components/CustomTableRow";

const CustomTableHeadAndBody = ({headData,bodyData}) => {
    return (
        <>
            <table style={{ width: 500 }}>
                <thead>
                <tr>
                    {headData.map((head, headID) => <th key={headID} >{head}</th>)}
                </tr>
                </thead>
                <tbody>
                {bodyData.map((rowContent, rowID) => <CustomTableRow rowContent={rowContent} key={rowID} />)}
                </tbody>
            </table>
        </>
    )
}

export default CustomTableHeadAndBody

CustomTableHeadAndBody.defaultProps = {
    label: "Default Table Label"
}