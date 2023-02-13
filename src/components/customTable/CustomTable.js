import React from "react";
import CustomTableHeadAndBody from "@components/customTable/components/CustomTableHeadAndBody";
import CustomTableRow from "@components/customTable/components/CustomTableRow";

const CustomTable = ({label, numberOfColumn, bodyData, headData}) => {


    return (
        <>
            <CustomTableHeadAndBody headData={headData} bodyData={bodyData}/>
        </>
    )
}

export default CustomTable

CustomTable.defaultProps = {
    label: "Default Table Label"
}