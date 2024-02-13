import { useState } from "react"
import Input from "../../common/Input"
import '../../../assets/styles/Login.css'
import Button from "../../common/Button";
import { useFormik } from "formik";
import { loginSchema } from "../../validation/LoginSchema";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { setLogin } from "../../store/Initializer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    const initialValue = {
        userName: null, password: null
    }
    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: loginSchema,
        onSubmit: () => {
            addData();
        }
    })

    const { errors, values, touched, handleChange, handleBlur, handleSubmit } = formik;

    const addData = () => {
        setLoading(true)
        if (values) {
            setLoading(false)
            formik.resetForm();
            console.log(values)
            setTimeout(() => {
                navigate("/");
              }, 1000);
            dispatch(setLogin({userName:values.userName}))
        }
    }
    return (
        <div className="login_section">
            <div className="login_div">
                <h3>LOGIN</h3>
                <Input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.userName && touched.userName && errors.userName}
                />
              
                <Input
                    type={show?"text":"password"}
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMessage={errors.password && touched.password && errors.password}
                />
                 {show ?  <AiOutlineEye onClick={handleShow} className={`${errors.password && touched.password?"password1":"password2"}`}/>:<RiEyeCloseLine onClick={handleShow} className={`${errors.password && touched.password?"password1":"password2"}`}/> }
         
                <Button type="submit" onClick={handleSubmit} loading={loading}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
