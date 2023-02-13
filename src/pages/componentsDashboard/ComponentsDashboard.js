import React from 'react'
import CustomButton from "@components/customButton";
import CustomSelect from "@components/customSelect";

const ComponentsDashboard = () => {
    return (
        <>
            <CustomButton/>
            <CustomButton label='Button-2'/>
            <CustomButton label='Button-3'/>
            <CustomSelect/>
            <CustomSelect label='Select-2'/>
            <CustomSelect label='Select-3'/>
        </>
    )
}

export default ComponentsDashboard