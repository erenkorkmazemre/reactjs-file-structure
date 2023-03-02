import { object, ref, string } from "yup";

const validation = object({
    email: string().email().required("Email Zorunlu Alan"),
    password: string().min(5).max(10).required("Password Zorunlu Alan"),

});

export default validation;