import React from 'react'
import CustomButton from "@components/customButton";
import CustomSelect from "@components/customSelect";
import CustomTable from "@components/customTable";

const ComponentsDashboard = () => {
    return (
        <>
            <CustomButton/>
            <CustomButton label='Button-2'/>
            <CustomButton label='Button-3'/>
            <CustomSelect/>
            <CustomSelect label='Select-2'/>
            <CustomSelect label='Select-3'/>
            <CustomTable/>
            <CustomTable label='Table-2'/>
            <CustomTable label='Table-3'/>
        </>
    )
}

export default ComponentsDashboard