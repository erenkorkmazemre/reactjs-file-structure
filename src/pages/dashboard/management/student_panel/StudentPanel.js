import React from "react";
import PropTypes from "prop-types";
import CustomTable from "@components/_globals/customTable";
import { useStudent } from "@hooks/useStudent";

function StudentPanel(props) {
  const { studentList } = useStudent();
  return (
    <>
      <div style={{ marginLeft: 200 }}>StudentPanel</div>
      <CustomTable
        style={{ marginLeft: 200 }}
        label={"student-panel"}
        data={studentList}
        numberOfColumn={2}
      />
    </>
  );
}

StudentPanel.propTypes = {};

export default StudentPanel;
