import { Link } from 'react-router-dom';
import React, {useState} from 'react'

export const Login = () => {
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const loginTeste = () => {
        fetch('https://lab-api-bq.herokuapp.com/auth', {
          body:`email=${email}&password=${pass}` ,
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          
          },
          
        )
          .then((response) => response.json())
          .then((data) => {
            setEmail('');
            setPass('');
            console.log(data);
          })
      }
    return (
        <>
        <input type="email" placeholder="Informe seu email"
           value={email} onChange={e=> setEmail(e.target.value)}
           />
            <input type="password" placeholder="Informe sua senha"
           value={pass} onChange={e=> setPass(e.target.value)}
           />
            <button type='submit' onClick={(e) => {
            e.preventDefault();
            loginTeste();
            }}>Logar</button>
            <Link to="/register">Cadastre-se</Link>
            
        </>
    );
};
