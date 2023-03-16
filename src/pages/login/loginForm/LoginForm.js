import CustomInput from "@components/_globals/customInput";
import modules from "./LoginForm.module.scss"
import CustomButton from "@components/_globals/customButton";
import {useFormik} from "formik";
import {useState} from "react";
import validation from "@validations/Login.validation";
import {useStudent} from "@hooks/useStudent";
import CustomTable from "@components/_globals/customTable";
import axios from "axios";

const LoginForm = ({underlineLabel}) => {
    const {studentList, fetchAllStudents, createStudents} = useStudent();
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateStudent = async (payload) => {
        try {
            await createStudents(payload);
            setIsLoading(true)
            await axios
                .get("")
                .then((res) => console.log("3"))
                .catch((e) => console.log(e))
                .finally(() => setIsLoading(false));
            console.log(studentList)
        } catch ({error}) {
        }
    };

    const [validationErrorMessage, setValidationErrorMessage] = useState(false);


    const {handleSubmit, handleChange, values, errors} = useFormik({
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
        <div className={modules.container}>
            <form onSubmit={handleSubmit}>
                <h1 className={modules.header}>Login</h1>
                <CustomInput handleSubmit={handleSubmit}
                             errors={errors.name}
                             value={values.name}
                             name="name"
                             id="name"
                             handleChange={handleChange} validationErrorMessage={validationMessage} placeholder='Email'
                             underlineLabel={underlineLabel}/>
                <CustomInput handleSubmit={handleSubmit}
                             errors={errors.surname}
                             value={values.surname}
                             name="surname"
                             id="surname"
                             handleChange={handleChange}
                             validationErrorMessage={validationMessage}
                             placeholder='Password'
                             underlineLabel={underlineLabel}/>
                <CustomButton disabled={isLoading} label={"Login"} onClick={validationMessage} type="submit"/>
                <CustomTable label={"eren"} data={studentList} numberOfColumn={2}/>
            </form>
        </div>
    )
}

export default LoginForm

LoginForm.defaultProps = {}