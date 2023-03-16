import { object, ref, string } from "yup";

const validation = object({
    name: string().email().required("Email Zorunlu Alan"),
    surname: string().min(5).max(10).required("Password Zorunlu Alan"),

});

export default validation;