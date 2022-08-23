import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home(){

  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');

  const handleRegister = () => navigate('/register');

  return(
    <div className="container-home">
        <button onClick={handleLogin} className='button'>Fazer Login</button>
        <button onClick={handleRegister} className='button'>Fazer Cadastro</button>
    </div>
  );
}