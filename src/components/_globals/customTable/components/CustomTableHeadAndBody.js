import React from "react";
import CustomTable from "@components/_globals/customTable";
import CustomTableRow from "@components/_globals/customTable/components/CustomTableRow";

const CustomTableHeadAndBody = ({headData, bodyData}) => {
    return (
        <>
            <table style={{width: 500, textAlign: "center", border: "1px solid black"}}>
                <thead>
                <tr>
                    {headData.map((head, headID) => <th style={{border: "1px solid black"}} key={headID}>{head}</th>)}
                </tr>
                </thead>
                <tbody>
                {bodyData.map((rowContent, rowID) => <CustomTableRow rowContent={rowContent} key={rowID}/>)}
                </tbody>
            </table>
        </>
    )
}

export default CustomTableHeadAndBody

CustomTableHeadAndBody.defaultProps = {
    label: "Default Table Label"
}