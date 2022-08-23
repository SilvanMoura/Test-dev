import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import './user.css';

export default function User() {

    const [ searchParams, setSearchParams ] = useSearchParams();

    const [visible, setVisible] = useState(false);

    const openUsers = () => {
        setVisible(true);
    }

    const closeUsers = () => {
        setVisible(false);
        render.textContent = '';   
    }

    function user(){
        axios.get('http://localhost:3001/user')
            .then(response => {
                let user = JSON.stringify(response.data);
                let result= JSON.parse(user)
                let array= [];
                for(let i=0; i<=result.length-1; i++){
                    array.push(result[i].email);
                }
                render.textContent = array;

                
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="container-user">
            <div className="container-left">
                <div>Usuário</div>
                {searchParams.get('email')}
            </div>
            <div className="container-right">
                
                <div id="render"></div>
                {visible &&
                    <>
                        {user()}
                        <button className='button' type='button' onClick={closeUsers}>Ocultar usuários cadastrados</button>
                    </>
                }
                {!visible &&
                    <button className='button' type='button' onClick={openUsers}>Mostrar usuários cadastrados</button>
                }
                
                
                
            </div>
        </div>
    );
}