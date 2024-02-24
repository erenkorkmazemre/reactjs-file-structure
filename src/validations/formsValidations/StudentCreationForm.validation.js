import { object, ref, string } from "yup";

const validation = object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
});

export default validation;