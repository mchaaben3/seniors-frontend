import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSide from '../components/Auth/LeftSideAuth';
import TextField from '../components/Auth/TextField';
import { useLoginMutation } from '../redux/features/api/authApi';


import { BgContainer } from '../styled/auth.styled';
const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [form, setForm] = useState<any>(initialState);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { name, email, password, confirmPassword } = form;



  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [login, { isLoading, isError, error, isSuccess }] =
    useLoginMutation();
  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    } else {
      login(form);
      navigate('/');
    }
  };


  return (
    <div className="grid grid-cols-1   h-screen lg:grid-cols-5 sm:grid-cols-2">
      <BgContainer className='col-span-3'><LeftSide /></BgContainer>


      <div className="flex flex-col justify-center bg-gray-900  px-4 sm:px-6 md:px-8 lg:px-10 py-8  w-full col-span-2">



        <div className="mt-8">

          {showRegister && (

            <TextField
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              handleChange={handleChange}
            />


          )}
          <TextField
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={handleChange}
          />
          {showRegister && (
            <TextField
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              handleChange={handleChange}
            />
          )}
          <div className="flex items-center mb-6 -mt-4">
            <div className="flex ">
              <span

                className="inline-flex text-xs sm:text-sm text-red-500 hover:text-red-700"
              >
                {errorMessage}
              </span>
            </div>
            <div className="flex ml-auto">
              <a
                href="#"
                className="inline-flex text-xs sm:text-sm text-white hover:text-gray-300"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>

          <div className="flex w-full">
            {!showRegister ? (
              <button

                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700  py-2 w-full transition duration-150 ease-in"
                onClick={() => handleLogin()}
              >
                <span className="mr-2 uppercase">Login</span>
              </button>
            ) : (
              <button

                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700  py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Register</span>
              </button>
            )}
          </div>

        </div>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            onClick={() => setShowRegister(!showRegister)}
            className="inline-flex items-center font-bold text-white hover:text-gray-300 text-xs text-center"
          >
            <span>
              {!showRegister && (<svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>)}

            </span>
            <span className="ml-2">{!showRegister ? "You don't have an account?" : "You already have an account?"}</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Auth;
