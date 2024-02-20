import * as yup from "yup";

export const loginSchema =()=>yup.object({
    userName:yup.string().required("userName is Required"),
    password:yup.string().required("password is Required"),
})