import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin, setToken, requestData } from '../services/requests';
import { positiveLogo } from '../images';
import Header from '../components/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/login', { email, password });

      setToken(token);

      const { role } = await requestData('/login/role', { email, password });

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to='/matches' />;

  return (
    <>
      <Header />
      <section className='flex flex-col items-center space-y-10 mt-10'>
        <img
          className='h-56'
          src={positiveLogo}
          alt='Brasileirao Positive Logo'
        />
        <form className='flex flex-col text-center space-y-5'>
          <h1 className='text-2xl'>Área do usuário</h1>
          <label htmlFor='email-input'>
            <input
              className='border h-10 p-2 rounded-md'
              type='text'
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder='Login'
            />
          </label>
          <label htmlFor='password-input'>
            <input
              className='border h-10 p-2 rounded-md'
              type='password'
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              placeholder='Senha'
            />
          </label>
          {failedTryLogin ? (
            <p>
              {`O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`}
            </p>
          ) : null}
          <button
            className='bg-blue-600 text-white h-10 rounded-md'
            type='submit'
            onClick={(event) => login(event)}
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
