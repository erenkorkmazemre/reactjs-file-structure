import { object, ref, string } from "yup";

const validation = object({
    name: string().email().required("Email is required!"),
    surname: string().min(5).max(10).required("Password is required!"),

});

export default validation;