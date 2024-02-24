import React from "react";
import PropTypes from "prop-types";
import CustomDataTable from "@components/_globals/customDataTable";
import { useLecture } from "@hooks/useLecture";
import LectureCreationForm from "./lectureCreationForm";

function LecturePanel(props) {
    const { lectureList } = useLecture();
  return (
    <>
      <div style={{ marginLeft: 200 }}>LecturePanel</div>
      <LectureCreationForm style={{ marginLeft: 200 }}/>
      <CustomDataTable
        style={{ marginLeft: 200 }}
        label={"lecture-panel"}
        headData={[
          "Name",
          "Code",
          "Created Time"
        ]}
        bodyData={[
            "name",
            "code",
            "createdTime"
        ]}
        data={lectureList}
        numberOfColumn={2}
      />
    </>
  );
}

LecturePanel.propTypes = {};

export default LecturePanel;
