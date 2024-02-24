import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLecture } from '@hooks/useLecture';
import CustomInput from '@components/_globals/customInput';
import CustomButton from '@components/_globals/customButton';
import { useFormik } from 'formik';
import validation from '@validations/formsValidations/LectureCreationForm.validation';

function LectureCreationForm({style, underlineLabel}, props) {
    const { fetchAllLectures, createLectures } = useLecture();
    const [isLoading, setIsLoading] = useState(false);
    const [validationErrorMessage, setValidationErrorMessage] = useState(false);
    const handleCreateLecture = async (payload) => {
      
      try {
        setIsLoading(true)
        await createLectures(payload);
        await fetchAllLectures();
        setIsLoading(false)
  
  
      } catch ({ error }) {}
     
    };
    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        name: "",
        code: "",
      },
      onSubmit: handleCreateLecture,
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
        <div style={style}> Lecture Creation Form
        
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
          name="code"
          id="code"
          handleChange={handleChange}
          validationErrorMessage={validationMessage}
          placeholder="Code"
          underlineLabel={underlineLabel}
        />
        <CustomButton
            disabled={isLoading}
            label={"Create Lecture"}
            onClick={validationMessage}
            type="submit"
          />
          </form>
        </div>
      </>
    );
  }

LectureCreationForm.propTypes = {}

export default LectureCreationForm
