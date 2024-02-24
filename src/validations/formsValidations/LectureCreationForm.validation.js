import { object, ref, string } from "yup";

const validation = object({
    name: string().required("Name is required")
});

export default validation;