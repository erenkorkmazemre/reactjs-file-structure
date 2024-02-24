import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomInput from "@components/_globals/customInput";
import { useFormik } from "formik";
import { useStudent } from "@hooks/useStudent";
import CustomButton from "@components/_globals/customButton";
import validation from "@validations/formsValidations/StudentCreationForm.validation";

function StudentCreationForm({ style, underlineLabel }, props) {

  const { fetchAllStudents, createStudents } = useStudent();
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState(false);
  const handleCreateStudent = async (payload) => {
    
    try {
      setIsLoading(true)
      await createStudents(payload);
      await fetchAllStudents();
      setIsLoading(false)


    } catch ({ error }) {}
   
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
    },
    onSubmit: handleCreateStudent,
    validationSchema: validation,
  });

  const validationMessage = () => {
    setValidationErrorMessage(true);
    if (validationErrorMessage === true) {
      setValidationErrorMessage(false);
    }
  };

  return (
    <>
      <div style={style}>StudentCreationForm
      
      <form onSubmit={handleSubmit}>
      
      <CustomInput
        handleSubmit={handleSubmit}
        errors={errors.name}
        value={values.name}
        name="name"
        id="name"
        handleChange={handleChange}
        validationErrorMessage={validationMessage}
        placeholder="Name"
        underlineLabel={underlineLabel}
      />

      <CustomInput
        handleSubmit={handleSubmit}
        errors={errors.surname}
        value={values.surname}
        name="surname"
        id="surname"
        handleChange={handleChange}
        validationErrorMessage={validationMessage}
        placeholder="Surname"
        underlineLabel={underlineLabel}
      />
      <CustomButton
          disabled={isLoading}
          label={"Login"}
          onClick={validationMessage}
          type="submit"
        />
        </form>
      </div>
    </>
  );
}

StudentCreationForm.propTypes = {};

export default StudentCreationForm;
