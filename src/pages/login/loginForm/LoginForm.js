import CustomInput from "@components/_globals/customInput";
import modules from "./LoginForm.module.scss"
import CustomButton from "@components/_globals/customButton";
import {useFormik} from "formik";
import {useState} from "react";
import validation from "@validations/Login.validation";
import {useStudent} from "@hooks/useStudent";

const LoginForm = ({underlineLabel}) => {
    const {studentList} = useStudent();
    const [validationErrorMessage, setValidationErrorMessage] = useState(false);
    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values, errors) => {
            console.log(values);
            console.log(studentList)
        },
        validationSchema: validation,
    });


    const validationMessage = () => {
        setValidationErrorMessage(true);
        if (validationErrorMessage === true) {
            setValidationErrorMessage(false);
        }
    };

    return (
        <div className={modules.container}>
            <form onSubmit={handleSubmit}>
                <h1 className={modules.header}>Login</h1>
                <CustomInput handleSubmit={handleSubmit} errors={errors.email} value={values.email} name="email"
                             id="email"
                             handleChange={handleChange} validationErrorMessage={validationMessage} placeholder='Email'
                             underlineLabel={underlineLabel}/>
                <CustomInput handleSubmit={handleSubmit} errors={errors.password} value={values.password}
                             name="password"
                             id="password"
                             handleChange={handleChange} validationErrorMessage={validationMessage}
                             placeholder='Password'
                             underlineLabel={underlineLabel}/>
                <CustomButton label={"Login"} onClick={validationMessage} type="submit"/>
            </form>
        </div>
    )
}

export default LoginForm

LoginForm.defaultProps = {}