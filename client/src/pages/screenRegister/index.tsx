import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './register.css';
import Axios from 'axios';

export default function Register() {

    const navigate = useNavigate();

    const handleClickRegister = (values: any) => {
        Axios.post("http://localhost:3001/register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
            if(response.data.msg == "Usuário cadastrado com sucesso"){
                navigate(`/user?email=${values.email}`);
            }else{
                alert(response.data.msg);
            }
        });
    };

    const validationRegister = yup.object().shape({
        email: yup.string().email("Não é um e-mail").required("Este campo é obrigatório"),
        password: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "As senhas não são iguais"),
    });

    return (
        <div className="container-register">

            <h1>Fazer Cadastro</h1>
            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                <Form className='login-form'>
                    
                    <div className='login-form-group'>
                        <Field name="email" className="form-field" placeHolder="E-mail" />
                    </div>
                    <ErrorMessage component="p" name="email" className="form-error" />

                    <div className='login-form-group'>
                        <Field name="password" type="password" className="form-field" placeHolder="Senha" />
                    </div>
                    <ErrorMessage component="p" name="password" className="form-error" />
                    
                    
                    <div className='login-form-group'>
                        <Field name="confirmPassword" type="password" className="form-field" placeHolder="Confirme sua senha" />
                    </div>
                    <ErrorMessage component="span" name="confirmPassword" className="form-error" />

                    <button className='button' type='submit'>Cadastrar</button>
                </Form>

            </Formik>

        </div>
    );
}