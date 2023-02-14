import React from 'react'
import CustomButton from "@components/_globals/customButton";
import CustomSelect from "@components/_globals/customSelect";
import CustomTable from "@components/_globals/customTable";
import CustomInput from "@components/_globals/customInput";

const ComponentsDashboard = () => {
    var headData = ['Name', 'City', 'Course', 'Course'];
    var bodyData =
        [['Kapil', 'Jaipur', 'MCA'],
            ['Aakash', 'Hisar', 'Btech', 'Course'],
            ['Mani', 'Ranchi', 'MSc'],
            ['Yash', 'Udaipur', 'Mtech'],
            ['Yash', 'Udaipur', 'Mtech']
        ];
    console.log(headData)
    console.log(bodyData)
    return (
        <>
            <CustomButton/>
            <CustomButton label='Button-2'/>
            <CustomButton label='Button-3'/>
            <CustomSelect/>
            <CustomSelect label='Select-2'/>
            <CustomSelect label='Select-3'/>
            <CustomTable headData={headData} bodyData={bodyData}/>
            <CustomInput/>
        </>
    )
}

export default ComponentsDashboard