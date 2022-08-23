import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './login.css';
import Axios from "axios";

export default function Login() {
    
    const navigate = useNavigate();

    const handleClickLogin = (values:any) => {
        Axios.post("http://localhost:3001/login", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          if(response.data.msg == "Usuário logado"){
            navigate(`/user?email=${values.email}`);
          }else{
            alert(response.data.msg);
          }
        });
    }; 

    const validationLogin = yup.object().shape({
        email: yup.string().email("Não é um e-mail").required("Este campo é obrigatório"),
        password: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório"),
    });

    return (
        <div className="container-login">

            <h1>Fazer Login</h1>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                <Form className='login-form'>

                    <div className='login-form-group'>
                        <Field name="email" className="form-field" placeHolder="E-mail" />
                    </div>
                    <ErrorMessage component="div" name="email" className="form-error" />

                    <div className='login-form-group'>
                        <Field name="password" type="password" className="form-field" placeHolder="Senha" />
                    </div>
                    <ErrorMessage component="div" name="password" className="form-error" />
                    
                    <button className='button' type='submit'>Login</button>
                </Form>

            </Formik>

        </div>
    );
}