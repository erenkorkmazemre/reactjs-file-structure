import React from 'react'
import CustomButton from "@components/_globals/customButton";
import CustomSelect from "@components/_globals/customSelect";
import CustomTable from "@components/_globals/customTable";
import LoginForm from "@components/loginForm/LoginForm";
import CustomCalendar from "@components/_globals/customCalendar/CustomCalendar";
import CustomDateRange from "@components/_globals/customDateRange";
import CustomDateRangePicker from "@components/_globals/customDateRangePicker";
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
            <LoginForm />

            <h4>React Date Select</h4>
            <CustomCalendar/>
            <CustomDateRange/>
            <CustomDateRangePicker/>

            <br /><br />
            <hr />

        </>
    )
}

export default ComponentsDashboard