import React from "react";
import CustomTableHeadAndBody from "@components/_globals/customTable/components/CustomTableHeadAndBody";

const CustomTable = ({label, numberOfColumn, data}) => {



    return (
        <>
            <CustomTableHeadAndBody data={data}/>
        </>
    )
}

export default CustomTable

CustomTable.defaultProps = {
    label: "Default Table Label"
}