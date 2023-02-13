import React from 'react'
import CustomButton from "@components/customButton";
import CustomSelect from "@components/customSelect";
import CustomTable from "@components/customTable";

const ComponentsDashboard = () => {

    var headData = ['Name', 'City', 'Course'];

    var bodyData =
        [['Kapil', 'Jaipur', 'MCA'],
            ['Aakash', 'Hisar', 'Btech'],
            ['Mani', 'Ranchi', 'MSc'],
            ['Yash', 'Udaipur', 'Mtech'],
            ['Yash', 'Udaipur', 'Mtech']
        ];

    return (
        <>
            <CustomButton/>
            <CustomButton label='Button-2'/>
            <CustomButton label='Button-3'/>
            <CustomSelect/>
            <CustomSelect label='Select-2'/>
            <CustomSelect label='Select-3'/>
            <CustomTable headData={headData} bodyData={bodyData}/>
        </>
    )
}

export default ComponentsDashboard