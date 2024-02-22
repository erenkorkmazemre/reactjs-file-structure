import React from "react";
import CustomTableHeadAndBody from "@components/_globals/customTable/components/CustomTableHeadAndBody";

const CustomTable = ({label, numberOfColumn, data, style}) => {



    return (
        <>
            <CustomTableHeadAndBody style={style} data={data}/>
        </>
    )
}

export default CustomTable

CustomTable.defaultProps = {
    label: "Default Table Label"
}