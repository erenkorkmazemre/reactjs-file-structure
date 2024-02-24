import React from "react";
import PropTypes from "prop-types";
import { useStudent } from "@hooks/useStudent";
import CustomDataTable from "@components/_globals/customDataTable";

function StudentPanel(props) {
  const { studentList } = useStudent();
  return (
    <>
      <div style={{ marginLeft: 200 }}>StudentPanel</div>
      <CustomDataTable
              style={{ marginLeft: 200 }}
              label={"student-panel"}
              headData={["Name","Surname","User Role","User Type","Created Time","Lectures Code"]}
              bodyData={["name","surname","userRole","userType","createdTime","lectures[0].code"]}
              data={studentList}
              numberOfColumn={2}
      />
    </>
  );
}

StudentPanel.propTypes = {};

export default StudentPanel;
