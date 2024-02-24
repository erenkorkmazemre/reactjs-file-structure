import React from "react";
import CustomDataTableComponent from "@components/_globals/customDataTable/components/CustomDataTableComponent";

const CustomDataTable = ({label, numberOfColumn, data, style, headData, bodyData}) => {



    return (
        <>
            <CustomDataTableComponent style={style} data={data} headData={headData} bodyData={bodyData}/>
        </>
    )
}

export default CustomDataTable

CustomDataTable.defaultProps = {
    label: "Default Table Label"
}